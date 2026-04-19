import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowUpRight, FiClock, FiMail, FiPhone, FiSend } from 'react-icons/fi';
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
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
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

    const publicKey = 'sa9hJIDwFVtiMk2kq';
    const adminTemplateId = 'template_fcp2ud1';
    const userTemplateId = 'template_p5e7nxa';
    const serviceId = 'service_07qwlir';

    try {
      await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.subject,
          message: formData.message,
          from_email: 'sanjayn29.aiml@gmail.com',
          time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        },
        publicKey
      );
      await emailjs.send(
        serviceId,
        userTemplateId,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.subject,
          message: formData.message,
          from_email: 'sanjayn29.aiml@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
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
      icon: <FiPhone className="h-4 w-4" />,
      color: 'text-green-400',
      border: 'hover:border-green-400/40',
    },
    {
      label: 'Email',
      value: 'sanjayn29.aiml@gmail.com',
      hint: 'Best for project details',
      action: 'mailto:sanjayn29.aiml@gmail.com',
      icon: <FiMail className="h-4 w-4" />,
      color: 'text-glow-cyan',
      border: 'hover:border-glow-cyan/40',
    },
  ];

  /* shared glass card classes */
  const glass =
    'rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl';

  return (
    <>
      <Helmet>        <meta
          name="description"
          content="Get in touch with Sanjay N for collaboration, freelance projects, or inquiries. Connect via email, LinkedIn, or the contact form."
        />
        <meta property="og:title" content="Contact Sanjay N | Get In Touch" />
        <meta property="og:description" content="Get in touch with Sanjay N for collaboration, freelance projects, or inquiries." />
        <meta property="og:url" content="https://sanjayn.me/#contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section id="contact" ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
        {/* subtle ambient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-glow-cyan/8 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-glow-blue/8 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div
            className={`mb-14 text-center transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/8 px-3 py-1 text-xs text-glow-cyan">
              Let's Connect
            </span>
            <h2 className="mb-3 font-display text-3xl font-bold text-silver-primary md:text-4xl lg:text-5xl">
              Get <span className="text-glow-cyan">In Touch</span>
            </h2>
            <div className="section-divider mx-auto max-w-xs" />

            {/* rotating subtitle */}
            <div className="relative mx-auto mt-5 h-7 max-w-xl overflow-hidden">
              {statusMessages.map((msg, i) => (
                <p
                  key={msg}
                  className={`absolute inset-0 text-sm text-silver-secondary transition-all duration-500 md:text-base ${
                    statusIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  {msg}
                </p>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-silver-muted">
              Have a project or idea? I'd be glad to connect and find the best next step together.
            </p>
          </div>

          {/* ── Two columns ── */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

            {/* ── Left: contact channels + availability ── */}
            <div
              className={`flex flex-col gap-5 transition-all delay-100 duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Contact Channels card */}
              <div className={`${glass} p-6`}>
                <p className="text-xs font-medium uppercase tracking-widest text-silver-muted">Contact Channels</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-silver-primary">Reach me directly</h3>

                <div className="mt-5 space-y-3">
                  {contactInfo.map((info) => (
                    <button
                      key={info.label}
                      type="button"
                      onClick={() => openContactAction(info.action)}
                      className={`group flex w-full items-center gap-4 rounded-xl border border-white/8 bg-white/3 px-4 py-3.5 text-left transition-all duration-300 ${info.border} hover:bg-white/6`}
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 ${info.color}`}>
                        {info.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-silver-muted">{info.label}</p>
                        <p className="truncate text-sm font-medium text-silver-primary">{info.value}</p>
                        <p className="mt-0.5 text-xs text-silver-muted/70">{info.hint}</p>
                      </div>
                      <FiArrowUpRight className={`h-4 w-4 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 ${info.color}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div className={`${glass} p-6`}>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
                  <span className="flex items-center gap-1.5 text-xs font-medium text-silver-muted">
                    <FiClock className="h-3.5 w-3.5" />
                    Availability
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-silver-secondary">
                  Currently taking freelance builds and internship opportunities in AI and full-stack development.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Web Apps', 'AI Integrations', 'Rapid MVPs'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: contact form ── */}
            <div
              className={`transition-all delay-200 duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className={`${glass} p-6 md:p-7`}>
                <p className="text-xs font-medium uppercase tracking-widest text-silver-muted">Send a Message</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-silver-primary">Tell me about your project</h3>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs text-silver-muted">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/12 bg-space-deep px-4 py-3 text-sm text-silver-primary placeholder-silver-muted/40 transition-all duration-200 focus:border-glow-cyan/50 focus:outline-none focus:ring-1 focus:ring-glow-cyan/25"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs text-silver-muted">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-white/12 bg-space-deep px-4 py-3 text-sm text-silver-primary placeholder-silver-muted/40 transition-all duration-200 focus:border-glow-cyan/50 focus:outline-none focus:ring-1 focus:ring-glow-cyan/25"
                      />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-xs text-silver-muted">Mobile Number</label>
                    <input
                      type="tel"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="+91 1234567890"
                      className="w-full rounded-xl border border-white/12 bg-space-deep px-4 py-3 text-sm text-silver-primary placeholder-silver-muted/40 transition-all duration-200 focus:border-glow-cyan/50 focus:outline-none focus:ring-1 focus:ring-glow-cyan/25"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs text-silver-muted">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className="w-full resize-none rounded-xl border border-white/12 bg-space-deep px-4 py-3 text-sm text-silver-primary placeholder-silver-muted/40 transition-all duration-200 focus:border-glow-cyan/50 focus:outline-none focus:ring-1 focus:ring-glow-cyan/25"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl border border-glow-cyan/35 bg-glow-cyan/10 px-6 py-3.5 text-sm font-semibold text-glow-cyan transition-all duration-300 hover:border-glow-cyan/60 hover:bg-glow-cyan/18 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="rounded-xl border border-green-500/25 bg-green-500/8 px-4 py-3 text-center text-sm text-green-400">
                      ✓ Message sent! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="rounded-xl border border-red-500/25 bg-red-500/8 px-4 py-3 text-center text-sm text-red-400">
                      Failed to send. Please try again in a moment.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
