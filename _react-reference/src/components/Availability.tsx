import { Sparkles, Mail, ArrowRight } from 'lucide-react';

const Availability = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="availability" className="section-padding bg-card/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div 
          className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8"
          data-aos="fade-down"
        >
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-sm font-medium text-accent">Open for Opportunities</span>
        </div>

        {/* Main Heading */}
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-foreground">Available for </span>
          <span className="text-accent text-glow">Work</span>
        </h2>

        {/* Description */}
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm available for freelance projects and full-time roles, Laravel backends, Vue.js frontends, REST APIs, and AI integrations. Let's build something that ships.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button 
            onClick={scrollToContact}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            <span>Hire Me for Your Next Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="mailto:jalismahamud31@gmail.com"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
          >
            <span>jalismahamud31@gmail.com</span>
          </a>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;