import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "PHP & Laravel Developer",
      company: "Softvence Agency",
      location: "Medona Tower, MohaKhali, Dhaka",
      duration: "10 March 2024 - 30 October 2025",
      type: ["Full-time", "OnSite"], // multiple values
      description: [
        "Specialized in backend development using Laravel framework",
        "Developed robust web applications with PHP and Laravel",
        "Built and maintained RESTful APIs and database systems",
        "Implemented secure authentication and authorization systems",
        "Worked on e-commerce platforms and service booking systems",
        "Collaborated with remote teams to deliver high-quality solutions",
        "Contributed to code reviews and optimized application performance",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs"],
    },
    {
      title: "Full Stack Developer",
      company: "Classic IT & Sky Mart Ltd.",
      location: "Sector # 12, Uttara, Dhaka-1230.",
      duration: "10 November 2025 - Present",
      type: ["Full-time", "OnSite"],
      description: [
        "Developed ERP modules (Accounts, HRM, Payroll, Inventory) using Laravel & Vue.js",
        "Built scalable E-commerce and POS systems with payment integration",
        "Created secure REST APIs with role-based authentication",
        "Optimized MySQL databases for performance and scalability",
        "Integrated third-party services and delivered production-ready solutions",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Vue.js",
        "MySQL",
        "JavaScript",
        "REST APIs",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-header">
            <span className="section-number">02.</span> Where I've Worked
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-5 sm:p-6 lg:p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left side - Company info */}
                <div className="lg:col-span-1">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 sm:p-5 lg:p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-accent font-semibold">
                      {exp.company}
                    </h4>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                      {/* Multiple types as badges */}
                      <div className="flex gap-2 mt-2">
                        {exp.type.map((t, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Job details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-12">
          <a
            href="/cv.pdf"
            download="My-CV.pdf"
            className="btn-outline-cyan inline-flex items-center space-x-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Download Full CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
