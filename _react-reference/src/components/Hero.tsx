  import { useState, useEffect, useMemo } from 'react';
  import { FileDown, MessageCircle } from 'lucide-react';

  const services = [
    "Building high-performance web apps.",
    "Crafting scalable Laravel systems.",
    "Designing reliable backend architectures.",
    "Creating clean, intuitive interfaces.",
    "Managing cloud deployments.",
    "Engineering systems to scale.",
    "Delivering full-stack solutions."
  ];

  const Hero = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const mainText = "Jalis Mahamud";
    const [displayedText] = useState(mainText);
    const [serviceText, setServiceText] = useState('');
    const [serviceIndex, setServiceIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    // Computed once so the typing/clock re-renders (every ~50-1000ms) don't
    // reshuffle every star's position and repaint the whole background on
    // every tick — that churn was stealing the first few wheel-scroll ticks.
    const stars = useMemo(
      () =>
        Array.from({ length: 20 }, () => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${8 + Math.random() * 6}s`,
        })),
      []
    );

    // Clock effect
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    // Services typing + deleting animation (slower and smoother)
    useEffect(() => {
      const currentService = services[serviceIndex];
      
      if (isTyping) {
        if (serviceText.length < currentService.length) {
          const timer = setTimeout(() => {
            setServiceText(currentService.slice(0, serviceText.length + 1));
          }, 80);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setIsTyping(false);
          }, 5000);
          return () => clearTimeout(timer);
        }
      } else {
        if (serviceText.length > 0) {
          const timer = setTimeout(() => {
            setServiceText(serviceText.slice(0, -1));
          }, 50);
          return () => clearTimeout(timer);
        } else {
          setServiceIndex((prev) => (prev + 1) % services.length);
          setIsTyping(true);
        }
      }
    }, [serviceText, serviceIndex, isTyping]);

    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-24">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
        </div>

        {/* Floating Stars/Particles - Slower and smoother */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-star-slow opacity-60"
            style={star}
          />
        ))}
        
        <div className="w-full min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Real-time clock */}
          <div className="mb-10 sm:mb-14 pt-4 text-accent font-mono text-base sm:text-lg animate-fade-in flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>{currentTime.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">UTC+6 Dhaka</span>
          </div>

          {/* Main heading */}
          <div className="mb-6 sm:mb-8 animate-slide-up">
            <p className="text-accent mb-3 sm:mb-4 text-base sm:text-lg font-mono">Hey, I'm</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4 font-serif">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
                {displayedText}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-muted-foreground mb-4 sm:mb-6 font-serif min-h-[2.4em] sm:min-h-[1.2em]">
              <span className="inline-block max-w-full break-words border-r-2 border-accent">
                {serviceText}
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              I'm a dedicated Software Engineer with extensive experience in full-stack development. 
              Currently focused on creating innovative solutions using PHP, LARAVEL, VUE and modern web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up mb-12 sm:mb-16" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-muted/50 border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
            
            <a 
              href="/cv.pdf" 
              download="My-CV.pdf"
              className="group inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-24 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-highlight rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-36 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-44 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-highlight rounded-full animate-float opacity-50" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-28 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1.8s' }}></div>
      </section>
    );
  };

  export default Hero;