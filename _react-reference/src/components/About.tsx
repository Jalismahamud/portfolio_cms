import { Code2, Database, Globe, Smartphone, Server, GitBranch } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.webp';
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';
import TechIcon from './TechIcon';
import ImageGallerySlider from './ImageGallerySlider';

const About = () => {
  const techStack = [
    { name: 'PHP (OOP)', icon: '🐘', category: 'Backend' },
    { name: 'Laravel Framework', icon: '🔴', category: 'Backend' },
    { name: 'CodeIgniter', icon: '🔥', category: 'Backend' },
    { name: 'JavaScript', icon: '🟨', category: 'Frontend' },
    { name: 'Vue js', icon: '', category: 'Frontend' },
    { name: 'Nuxt js', icon: '🟢', category: 'Frontend' },
    { name: 'jQuery', icon: '💙', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
    { name: 'Bootstrap', icon: '🅱️', category: 'Frontend' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'MS Office pack', icon: '📊', category: 'Tools' },
    { name: 'Adobe (Ps, Ai, Pr)', icon: '🎨', category: 'Design' },
    { name: 'C Language', icon: '⚙️', category: 'Programming' },
    { name: 'C++', icon: '💻', category: 'Programming' },
    { name: 'WordPress', icon: '📝', category: 'CMS' },
    { name: 'Git', icon: '📚', category: 'Tools' },
    { name: 'REST APIs', icon: '🔗', category: 'Backend' },
    { name: 'Postman', icon: '📮', category: 'Testing' },
    { name: 'APIS', icon: '🌐', category: 'Integration' },
  ];

  const skills = [
    { icon: Code2, title: 'Frontend Development', desc: 'JavaScript, Vue Js, Tailwind and responsive design' },
    { icon: Server, title: 'Backend Development', desc: 'PHP, Laravel, RESTful APIs' },
    { icon: Database, title: 'Database Design', desc: 'SQL and NoSQL database optimization' },
    { icon: Globe, title: 'Web Technologies', desc: 'Full-stack web application development' },
    { icon: Smartphone, title: 'Mobile Development', desc: 'Native PHP and progressive web apps' },
    { icon: GitBranch, title: 'DevOps & Tools', desc: 'CI/CD, Docker, cloud deployment' },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16" data-aos="fade-right">
          <h2 className="section-header">
            <span className="section-number">01.</span> About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - About text and skills */}
          <div className="space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed" data-aos="fade-up">
              <p>
                Hello! I'm Jalis Mahamud, a passionate Laravel developer dedicated to crafting efficient and reliable web applications. I focus on building solutions that simplify complex problems and deliver meaningful experiences to users. I am committed to continuous learning and professional growth, striving to contribute effectively to every project I undertake.
              </p>

              <p data-aos="fade-up" data-aos-delay="100">
                With extensive experience in PHP and Laravel, I specialize in developing scalable and maintainable applications, ranging from e-commerce platforms to service management systems and custom business solutions. I follow best practices to ensure clean, robust, and high-performing code.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                Based in Dhaka, Bangladesh, I work remotely and have successfully delivered multiple projects, consistently exceeding client expectations. I am always eager to embrace new challenges and enhance my skills in the ever-evolving world of web development.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="bg-card p-4 rounded-lg border border-border card-hover group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start space-x-3">
                    <skill.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Gallery and Tech stack */}
          <div className="space-y-6 sm:space-y-8">
            {/* Photo Gallery Slider */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5" data-aos="fade-left">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Software Engineer based in Dhaka, Bangladesh
              </p>
              <ImageGallerySlider
                images={[
                  { src: profilePhoto, alt: 'Jalis Mahamud - Profile Photo' },
                  { src: gallery1, alt: 'Working at desk setup' },
                  { src: gallery2, alt: 'Working at desk setup' },
                  { src: gallery3, alt: 'Code - Repet - Code' },
                  { src: gallery4, alt: 'Jalis Mahamud' },
                ]}
                autoPlayInterval={5000}
              />
            </div>

            {/* Tech Stack */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-accent">Technologies I Work With</h3>
              <div className="tech-grid">
                {techStack.map((tech, index) => (
                  <TechIcon
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    category={tech.category}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;