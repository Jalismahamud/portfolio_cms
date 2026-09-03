import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, FileDown, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.webp';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { id: 'about', label: '01. About', href: '#about' },
  { id: 'experience', label: '02. Experience', href: '#experience' },
  { id: 'projects', label: '03. Projects', href: '#projects' },
  { id: 'education', label: '04. Education', href: '#education' },
  { id: 'blog', label: '05. Blog', href: '#blog' },
  { id: 'contact', label: '06. Contact', href: '#contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const activeRef = useRef<string>('about');

  useEffect(() => {
    // Check if on blog pages
    if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
      activeRef.current = 'blog';
      return;
    }

    // Check if on project pages
    if (location.pathname.startsWith('/project')) {
      setActiveSection('projects');
      activeRef.current = 'projects';
      return;
    }

    if (!isHome) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'about';

      // Check each section to find which one is currently in view
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const elementTop = window.scrollY + elementRect.top;
          const elementBottom = elementTop + elementRect.height;

          // If scroll position is within the section, it's the active one
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = item.id;
            break;
          }
        }
      }

      // Update if changed
      if (activeRef.current !== currentSection) {
        activeRef.current = currentSection;
        setActiveSection(currentSection);
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isHome]);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    setIsMobileMenuOpen(false);

    if (!isHome) {
      navigate(`/${href}`);
      return;
    }

    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);

    if (!isHome) {
      navigate('/#contact');
      return;
    }

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);

    if (!isHome) {
      navigate('/');
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop} aria-label="Jalis Mahamud - home" className="relative cursor-pointer inline-block">
              <img
                src={logo}
                alt="Jalis Mahamud - JalisDev logo"
                width={96}
                height={112}
                className="h-28 w-24 sm:h-24 sm:w-20 animate-logo-orbit z-10 relative cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link text-sm xl:text-base ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="section-number">{item.label.split('.')[0]}.</span>
                <span className="ml-1">{item.label.split('. ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button & Theme Toggle & Resume Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors"
            >
              {isMobileMenuOpen ?
                <X className="w-5 h-5 text-accent" /> :
                <Menu className="w-5 h-5 text-accent" />
              }
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2 rounded-lg bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
            >
              {theme === 'dark' ?
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-accent" /> :
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              }
            </button>
            
            {/* Get in Touch Button - Hidden on mobile */}
            <button 
              onClick={scrollToContact}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
            
            {/* Resume Button - Hidden on mobile */}
            <a 
              href="/cv.pdf" 
              download="My-CV.pdf"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-sm font-medium text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border mt-4 pt-4 pb-6 animate-fade-in">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'active bg-accent/10 text-accent' 
                      : 'hover:bg-accent/5 text-muted-foreground hover:text-accent'
                  }`}
                >
                  <span className="section-number text-sm mr-2">{item.label.split('.')[0]}.</span>
                  <span className="text-sm">{item.label.split('. ')[1]}</span>
                </button>
              ))}
              {/* Mobile Buttons */}
              <div className="pt-4 border-t border-border space-y-3">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-muted/50 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
                <a 
                  href="/cv.pdf" 
                  download="My-CV.pdf"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;