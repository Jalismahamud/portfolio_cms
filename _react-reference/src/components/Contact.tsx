import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Custom icons for platforms not in lucide
const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.26h1.61v.74a1.46 1.46 0 0 1 1.397-.848c.67 0 1.156.244 1.435.73a1.798 1.798 0 0 1 1.603-.73c1.063 0 1.682.652 1.682 1.77v3.106h-1.61v-2.837c0-.453-.176-.704-.567-.704-.37 0-.567.25-.567.704v2.837h-1.61v-2.837c0-.453-.175-.704-.566-.704-.37 0-.567.25-.567.704v2.837h-1.61v-3.558h.684c.546 0 .84-.41.84-1.092V11.26h1.61v.74c.279-.484.765-.848 1.435-.848.67 0 1.156.244 1.435.73a1.798 1.798 0 0 1 1.603-.73c1.063 0 1.682.652 1.682 1.77v3.106h-1.61v-2.837c0-.453-.176-.704-.567-.704-.37 0-.567.25-.567.704v.143zM6.752 12.5c0-.467.166-.848.543-.848.378 0 .545.38.545.848 0 .467-.167.848-.545.848-.377 0-.543-.381-.543-.848zm-.85 3.205c0-1.063.652-1.77 1.682-1.77.67 0 1.156.244 1.435.73V11.26h1.61v5.544H9.019v-.74a1.46 1.46 0 0 1-1.397.848c-1.03 0-1.72-.707-1.72-1.207zm-4.553 1.207V11.26h1.61v3.558h.85c.546 0 .84-.41.84-1.092V11.26h1.61v2.096c0 1.267-.81 2.162-2.132 2.162H1.349v.002z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const StackOverflowIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M15 21H3v-8h2v6h10v-6h2v8zm-2.09-8.59l-7.82-1.64.42-2.02 7.82 1.64-.42 2.02zM5.43 9.59l6.97-4.02 1.01 1.75-6.97 4.02-1.01-1.75zm2.34-4.45l5.67-5.67 1.41 1.41-5.67 5.67-1.41-1.41zM18.59 5L21 7.41l-9.59 9.59L9 14.59 18.59 5zM5 16h8v2H5v-2z"/>
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jalismahamud31@gmail.com",
      href: "mailto:jalismahamud31@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01785927491",
      href: "tel:+8801785927491"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Staratul Road, Badda, Dhaka",
      href: null
    }
  ];

  const socialLinks = [
    {
      Icon: Github,
      label: "GitHub",
      href: "https://github.com/Jalismahamud",
      color: "hover:text-accent hover:border-accent/50",
      bgHover: "hover:bg-accent/10",
      isCustom: false
    },
    {
      Icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/jalis-mahamud-540903090",
      color: "hover:text-blue-400 hover:border-blue-400/50",
      bgHover: "hover:bg-blue-400/10",
      isCustom: false
    },
    {
      Icon: Twitter,
      label: "Twitter",
      href: "https://x.com/j_a_l_i_s",
      color: "hover:text-sky-400 hover:border-sky-400/50",
      bgHover: "hover:bg-sky-400/10",
      isCustom: false
    },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/j__a__l__i__s",
      color: "hover:text-pink-500 hover:border-pink-500/50",
      bgHover: "hover:bg-pink-500/10",
      isCustom: false
    },
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/mdjalish.mahamud.16",
      color: "hover:text-blue-500 hover:border-blue-500/50",
      bgHover: "hover:bg-blue-500/10",
      isCustom: false
    },
    {
      Icon: FiverrIcon,
      label: "Fiverr",
      href: "https://www.fiverr.com/s/5r25Ep7",
      color: "hover:text-green-500 hover:border-green-500/50",
      bgHover: "hover:bg-green-500/10",
      isCustom: true
    },
    {
      Icon: MediumIcon,
      label: "Medium",
      href: "https://medium.com/@jalismahamud31",
      color: "hover:text-foreground hover:border-foreground/50",
      bgHover: "hover:bg-foreground/10",
      isCustom: true
    },
    {
      Icon: StackOverflowIcon,
      label: "StackOverflow",
      href: "https://stackoverflow.com/users/28428462/jalis-mahamud",
      color: "hover:text-orange-500 hover:border-orange-500/50",
      bgHover: "hover:bg-orange-500/10",
      isCustom: true
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-highlight rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 sm:mb-20 text-center" data-aos="fade-down">
          <h2 className="section-header">
            <span className="section-number">06.</span> Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div data-aos="fade-right">
              <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                I'm currently open to new opportunities and always excited to work on 
                innovative projects. If you're looking for a dedicated developer or 
                just want to connect, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Wrapper = contact.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={index}
                    href={contact.href ?? undefined}
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg card-hover group"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <contact.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div data-aos="fade-right" data-aos-delay="300">
              <h4 className="font-semibold text-foreground mb-4">Find me on</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-card ${social.color} ${social.bgHover}`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.isCustom ? <social.Icon /> : <social.Icon className="w-6 h-6" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-12 xl:p-16 shadow-card hover:shadow-elegant transition-all duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 pb-1 border-t border-border text-center" data-aos="fade-up">
          <p className="text-muted-foreground">
            Jalis Mahamud
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} Jalis Mahamud. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;