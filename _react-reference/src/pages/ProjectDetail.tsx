import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { projects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import SEO, { SITE_URL, truncateForMeta } from '@/components/SEO';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Project Not Found | Jalis Mahamud"
          description="This project could not be found. Browse the full project archive instead."
          canonical={`/project/${id ?? ''}`}
          noindex
        />
        <Navigation />
        <div className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link to="/" className="btn-outline-cyan">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${project.title} | Jalis Mahamud`}
        description={truncateForMeta(project.description)}
        canonical={`/project/${project.id}`}
        image={project.images[0]}
        type="article"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: truncateForMeta(project.description),
            image: `${SITE_URL}${project.images[0]}`,
            author: { '@type': 'Person', name: 'Jalis Mahamud', url: SITE_URL },
            keywords: project.technologies.join(', '),
            url: `${SITE_URL}/project/${project.id}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
              { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE_URL}/project/${project.id}` },
            ],
          },
        ]}
      />
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline-cyan inline-flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="mb-12">
            <div className="relative bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  ref={(el) => { if (el && currentImageIndex === 0) el.setAttribute('fetchpriority', 'high'); }}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  loading={currentImageIndex === 0 ? undefined : 'lazy'}
                  decoding="async"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous screenshot"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next screenshot"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>
                  </>
                )}
              </div>
              
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to screenshot ${index + 1}`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-accent' : 'bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges & Solutions */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Challenges & Solutions</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <section className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Project Links */}
              <section className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;