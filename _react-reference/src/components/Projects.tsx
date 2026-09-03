import { ExternalLink, Github, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16" data-aos="fade-right">
          <h2 className="section-header">
            <span className="section-number">03.</span> Work I've Built
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6 sm:mb-8" data-aos="fade-up">Featured Projects</h3>
          <div className="space-y-16 sm:space-y-24">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Project Image - Larger for featured */}
                <div 
                  className={`relative group lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <Link to={`/project/${project.id}`}>
                    <div className="relative overflow-hidden rounded-xl bg-accent/10 border-2 border-accent/30 cursor-pointer shadow-xl hover:shadow-accent/20 transition-all duration-500">
                      <img
                        src={project.images[0]}
                        alt={`Screenshot of ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={800}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Project Info */}
                <div 
                  className={`space-y-4 sm:space-y-6 lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay="100"
                >
                  <div>
                    <p className="text-accent font-mono text-xs sm:text-sm mb-2 flex items-center">
                      <span className="w-8 h-[2px] bg-accent mr-2"></span>
                      Featured Project
                    </p>
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">{project.title}</h3>
                    </Link>
                    <div className="bg-card border border-border rounded-xl p-5 sm:p-8 shadow-card">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs sm:text-sm font-mono text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6 sm:mb-8" data-aos="fade-up">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                role="link"
                tabIndex={0}
                onClick={() => navigate(`/project/${project.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/project/${project.id}`);
                  }
                }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 card-hover group hover:scale-105 transition-all duration-300 block cursor-pointer hover:border-accent/50"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Eye className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-mono text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link to="/projects" className="btn-outline-cyan inline-block">
            View Archive
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
