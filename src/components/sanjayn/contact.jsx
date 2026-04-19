import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // This will be used for mobile number
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Updated Public Key
    const publicKey = 'sa9hJIDwFVtiMk2kq';

    // Updated Template IDs
    const adminTemplateId = 'template_fcp2ud1'; // Admin notification template
    const userTemplateId = 'template_p5e7nxa'; // User confirmation template

    // Updated Service ID
    const serviceId = 'service_07qwlir';

    try {
      // Send notification to admin (sanjayn29.aiml@gmail.com)
      await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.subject, // Using 'subject' field as mobile
          message: formData.message,
          from_email: 'sanjayn29.aiml@gmail.com', // Admin email as sender
          time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) // Dynamic timestamp for admin template
        },
        publicKey
      );

      // Send confirmation to user
      await emailjs.send(
        serviceId, // Same service ID
        userTemplateId,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.subject,
          message: formData.message,
          from_email: 'sanjayn29.aiml@gmail.com' // Admin email as sender
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Full EmailJS Error:', error);
      console.error('Status:', error.status);
      console.error('Text:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'sanjayn29.aiml@gmail.com',
      action: 'mailto:sanjayn29.aiml@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    
    {
      label: 'Mobile',
      value: '+91 9080581688',
      action: 'tel:+919080581688',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'sanjayn29',
      action: 'https://linkedin.com/in/sanjayn29',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'Vellore , Tamil Nadu',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    // {
    //   label: 'Instagram',
    //   value: 'instagram.com/_sanjay_n_',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.148-4.771-1.691-4.919-4.919-.053-1.263-.064-1.646-.064-4.849 0-3.204.012-3.584.064-4.849.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.073 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    //     </svg>
    //   ),
    // },
    // {
    //   label: 'GitHub',
    //   value: 'github.com/sanjayn',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    //     </svg>
    //   ),
    // },
  ];

  return (
    <>
      <Helmet>
        <title>Sanjay N | Freelancer</title>
        <meta
          name="description"
          content="Get in touch with Sanjay N for collaboration, freelance projects, or inquiries. Connect via email, LinkedIn, or the contact form."
        />
        <meta property="og:title" content="Contact Sanjay N | Get In Touch" />
        <meta property="og:description" content="Get in touch with Sanjay N for collaboration, freelance projects, or inquiries. Connect via email, LinkedIn, or the contact form." />
        <meta property="og:url" content="https://sanjayn.me/#contact" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Header */}
<div
  className={`text-center mb-12 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
    Let's Connect
  </span>
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
    Get <span className="text-glow-cyan">In Touch</span>
  </h2>

  <div className="section-divider max-w-xs mx-auto" />

  <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
    Have a project in mind, an idea to discuss, or an opportunity to collaborate? I’d be glad to connect.
  </p>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display text-xl font-semibold text-silver-primary mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 glass-card hover-glow-cyan"
                  onClick={() => {
                    if (!info.action) return;
                    window.open(info.action, '_blank');
                  }}
                  style={{ cursor: info.action ? 'pointer' : 'default' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-glow-cyan/10 text-glow-cyan">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-silver-muted text-sm">{info.label}</p>
                    <p className="text-silver-primary">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-silver-secondary text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-card border border-border rounded-lg text-silver-primary placeholder-silver-muted focus:outline-none focus:ring-2 focus:ring-glow-cyan/50 focus:border-glow-cyan transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-silver-secondary text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-card border border-border rounded-lg text-silver-primary placeholder-silver-muted focus:outline-none focus:ring-2 focus:ring-glow-cyan/50 focus:border-glow-cyan transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-silver-secondary text-sm mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-space-card border border-border rounded-lg text-silver-primary placeholder-silver-muted focus:outline-none focus:ring-2 focus:ring-glow-cyan/50 focus:border-glow-cyan transition-all duration-300"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-silver-secondary text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-space-card border border-border rounded-lg text-silver-primary placeholder-silver-muted focus:outline-none focus:ring-2 focus:ring-glow-cyan/50 focus:border-glow-cyan transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-glow-cyan text-black font-medium rounded-lg transition-all duration-500 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                  Failed to send message. Check console for details and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
