import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowUpRight, FiClock, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const statusMessages = [
  'Replies within 24 hours',
  'Open for freelance projects',
  'Available for collaborations',
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openContactAction = (action) => {
    if (!action) return;

    if (action.startsWith('http')) {
      window.open(action, '_blank', 'noopener,noreferrer');
      return;
    }

    window.location.href = action;
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
          time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }), // Dynamic timestamp for admin template
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
          from_email: 'sanjayn29.aiml@gmail.com', // Admin email as sender
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
      label: 'Mobile',
      value: '+91 9080581688',
      hint: 'Quickest for urgent queries',
      action: 'tel:+919080581688',
      iconBg: 'bg-green-500/15 text-green-300',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'sanjayn29.aiml@gmail.com',
      hint: 'Best for project details',
      action: 'mailto:sanjayn29.aiml@gmail.com',
      iconBg: 'bg-cyan-500/15 text-cyan-300',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
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

      <section id="contact" ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-glow-cyan/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-glow-blue/10 blur-3xl" />
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_25%,rgba(34,211,238,0.16)_1px,transparent_1.5px),radial-gradient(circle_at_85%_70%,rgba(96,165,250,0.14)_1px,transparent_1.5px)] [background-size:110px_110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-glow-cyan/40 bg-glow-cyan/10 px-3 py-1 text-xs text-glow-cyan">
              Let's Connect
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-silver-primary md:text-4xl lg:text-5xl">
              Get <span className="text-glow-cyan">In Touch</span>
            </h2>
            <div className="section-divider mx-auto max-w-xs" />
            <div className="relative mx-auto mt-5 h-7 max-w-xl overflow-hidden">
              {statusMessages.map((message, index) => (
                <p
                  key={message}
                  className={`absolute inset-0 text-sm text-silver-secondary transition-all duration-500 md:text-base ${
                    statusIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  {message}
                </p>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-silver-secondary md:text-xl">
              Have a project in mind, an idea to discuss, or an opportunity to collaborate? I'd be glad to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className={`transition-all delay-100 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="rounded-2xl border border-border/60 bg-space-card/55 p-5 backdrop-blur-lg md:p-6">
                <h3 className="font-display text-xl font-semibold text-silver-primary">Contact Channels</h3>
                <p className="mt-1 text-sm text-silver-muted">Choose whichever channel is easiest for you.</p>

                <div className="mt-5 space-y-3">
                  {contactInfo.map((info, index) => (
                    <button
                      key={info.label}
                      type="button"
                      onClick={() => openContactAction(info.action)}
                      disabled={!info.action}
                      className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                        info.action
                          ? 'border-border/60 bg-space-deep/35 hover:-translate-y-0.5 hover:border-glow-cyan/45 hover:bg-space-deep/55'
                          : 'cursor-default border-border/50 bg-space-deep/20'
                      }`}
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${info.iconBg}`}>{info.icon}</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-silver-muted">{info.label}</p>
                        <p className="truncate text-silver-primary">{info.value}</p>
                        <p className="mt-0.5 text-xs text-silver-muted/90">{info.hint}</p>
                      </div>
                      {info.action && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-glow-cyan/30 bg-glow-cyan/10 px-2.5 py-1 text-xs text-glow-cyan">
                          Open
                          <FiArrowUpRight className="h-3 w-3" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-glow-cyan/25 bg-gradient-to-r from-glow-cyan/10 via-space-card/50 to-glow-blue/10 p-5 backdrop-blur-lg md:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-glow-cyan/30 bg-space-card/70 px-3 py-1 text-xs text-glow-cyan">
                  <FiClock className="h-3.5 w-3.5" />
                  Availability
                </div>
                <p className="mt-3 text-silver-primary">
                  Currently taking freelance builds and internship opportunities in AI and full stack development.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-glow-cyan/30 bg-glow-cyan/10 px-3 py-1 text-xs text-silver-secondary">Web Apps</span>
                  <span className="rounded-full border border-glow-blue/30 bg-glow-blue/10 px-3 py-1 text-xs text-silver-secondary">AI Integrations</span>
                  <span className="rounded-full border border-border/60 bg-space-card/80 px-3 py-1 text-xs text-silver-secondary">Rapid MVPs</span>
                </div>
              </div>
            </div>

            <div className={`transition-all delay-200 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-glow-cyan/45 via-glow-blue/40 to-glow-cyan/45 opacity-70 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-glow-cyan/25 bg-space-card/75 p-5 backdrop-blur-xl md:p-6">
                  <h3 className="font-display text-xl font-semibold text-silver-primary">Send a Message</h3>
                  <p className="mt-1 text-sm text-silver-muted">
                    Share a brief about your requirement, and I will get back with the best next step.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm text-silver-secondary">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-border bg-space-deep/70 px-4 py-3 text-silver-primary placeholder-silver-muted transition-all duration-300 hover:border-glow-cyan/35 focus:border-glow-cyan focus:outline-none focus:ring-2 focus:ring-glow-cyan/45"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm text-silver-secondary">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-border bg-space-deep/70 px-4 py-3 text-silver-primary placeholder-silver-muted transition-all duration-300 hover:border-glow-cyan/35 focus:border-glow-cyan focus:outline-none focus:ring-2 focus:ring-glow-cyan/45"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm text-silver-secondary">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-space-deep/70 px-4 py-3 text-silver-primary placeholder-silver-muted transition-all duration-300 hover:border-glow-cyan/35 focus:border-glow-cyan focus:outline-none focus:ring-2 focus:ring-glow-cyan/45"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm text-silver-secondary">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full resize-none rounded-lg border border-border bg-space-deep/70 px-4 py-3 text-silver-primary placeholder-silver-muted transition-all duration-300 hover:border-glow-cyan/35 focus:border-glow-cyan focus:outline-none focus:ring-2 focus:ring-glow-cyan/45"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-glow-cyan/40 bg-gradient-to-r from-glow-cyan to-glow-blue px-8 py-4 font-semibold text-black shadow-[0_8px_20px_rgba(34,211,238,0.22)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(34,211,238,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400">
                        Message sent successfully! I will get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">
                        Failed to send message. Please try again in a moment.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
