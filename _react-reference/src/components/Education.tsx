import { useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Book,
  Eye,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Education = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const education = [
    {
      degree: "Computer Science and Information Technology",
      institution: "Dhaka International University",
      location: "Satarkul Road, Badda, Dhaka, Bangladesh",
      duration: "2025",
      grade: "3.34 CGPA",
      description:
        "Studied computer science fundamentals including programming, software engineering, and information technology systems.",
      highlights: [
        "Object-Oriented Programming (OOP) & Design Patterns",
        "Relational Database Design, Query Optimization & Indexing",
        "Software Development Life Cycle (SDLC) & Agile Methodologies",
        "Basic Machine Learning Concepts & Data Processing",
        "Testing, Debugging & Code Quality Assurance",
      ],
      projects: [
        "Database Design Projects",
        "Software Development Methodologies (SDLC)",
        "RESTful API Development with Authentication (JWT/Sanctum)",
        "E-commerce Platform with Payment Integration",
        "Machine Learning-Based Result Prediction System (Basic)",
        "Microservices Architecture Concept Project",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Shahid Smrity Degree College",
      location: "Nesarabad, Pirojpur, Bangladesh",
      duration: "2020",
      grade: "4.56 GPA",
      description:
        "Completed Higher Secondary education in the Science stream with strong academic performance. Built a solid foundation in mathematics and physical sciences while developing analytical thinking, problem-solving ability, and fundamental computer literacy.",
      highlights: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "ICT",
        "English",
        "Bangla",
      ],
      projects: [
        "Science Fair Projects",
        "Mathematics Problem Solving",
        "Computer Programming Basics",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC) - Science",
      institution: "Islamabad Haat Bashail High School and College",
      location: "Nesarabad, Pirojpur, Bangladesh",
      duration: "2018",
      grade: "4.83 GPA",
      description:
        "Successfully completed secondary education in the Science stream with outstanding academic performance. Developed a strong foundation in mathematics, physical sciences, and basic computing while strengthening analytical reasoning and problem-solving skills.",
      highlights: [
        "General Mathematics",
        "Higher Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
      ],
      projects: ["School Science Projects"],
    },
  ];

  const certifications = [
    {
      title: "Web Development with PHP & Laravel and Vue.js",
      provider: "Ostad Limited",
      date: "1 December 2023 - 5 Jan 2024",
      skills: ["PHP", "Laravel", "MySQL", "Vue js", "Rest API"],
      description:
        "Completed web development course covering PHP, Laravel, MySQL, Vue.js, and REST API development. Gained practical experience in building dynamic web applications and implementing modern web technologies.",
      image: "/education/phplaravel.webp",
    },
    {
      title: "English Proficiency Certificate",
      provider: "Ten Minute School",
      date: "October 2023",
      skills: [
        "Communication",
        "Professional Writing",
        "English Language",
        "Presentation Skills",
      ],
      description:
        "Completed comprehensive English language course focusing on communication and professional skills.",
      image: "/education/english.webp",
    },
    {
      title: "Networking Basics Certificate",
      provider: "CISCO Networking Academy",
      date: "September 2024",
      skills: [
        "Networking Fundamentals",
        "IP Addressing",
        "Network Devices",
        "Network Security Basics",
      ],
      description:
        "Completed the Cisco Networking Academy Networking course, gaining foundational knowledge of computer networks, IP addressing, network devices, connectivity, and basic network security concepts.",
      image: "/education/networking-basics.webp",
    },
    {
      title: "Advance English Certificate",
      provider: "Dhaka International University",
      date: "December 2024",
      skills: [
        "Advanced English Communication",
        "Professional Writing",
        "Presentation Skills",
        "Public Speaking",
      ],
      description:
        "Completed an Advanced English course focused on enhancing communication, professional writing, presentation, and public speaking skills for academic and professional environments.",
      image: "/education/advance_english.webp",
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["PHP", "JavaScript", "C Language", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks",
      items: ["Laravel", "CodeIgniter", "React.js", "Node.js", "jQuery"],
    },
    {
      category: "Backend Technologies",
      items: ["PHP", "Laravel", "MySQL", "REST APIs", "Express.js"],
    },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    {
      category: "Tools & Design",
      items: ["Git", "MS Office", "Adobe (Ps, Ai, Pr)", "WordPress", "Postman"],
    },
    {
      category: "Languages",
      items: ["English (High)", "Bangla (High)", "Hindi (Medium)"],
    },
  ];

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="mb-20" data-aos="fade-right">
          <h2 className="section-header">
            <span className="section-number">04.</span> My Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-20">
          {/* Education Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Formal Education */}
            <div>
              <h3
                className="text-2xl font-bold text-accent mb-6 flex items-center"
                data-aos="fade-up"
              >
                <GraduationCap className="w-6 h-6 mr-2" />
                Formal Education
              </h3>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-10 xl:p-12 mb-8 shadow-card hover:shadow-elegant transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Institution Info */}
                    <div className="md:col-span-1">
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <h4 className="font-bold text-foreground text-lg mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-accent font-semibold mb-3">
                          {edu.institution}
                        </p>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-accent" />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Key Subjects */}
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">
                          Key Subjects:
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">
                          Projects:
                        </h5>
                        <ul className="space-y-1">
                          {edu.projects.map((project, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-highlight rounded-full mt-2"></div>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="space-y-8">
            <h3
              className="text-2xl font-bold text-accent mb-6"
              data-aos="fade-left"
            >
              Skills Overview
            </h3>

            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-card border border-border rounded-lg p-6 sm:p-7 lg:p-8 xl:p-10 shadow-card hover:shadow-elegant transition-all duration-300 group"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <h4 className="font-semibold text-foreground mb-3 text-sm group-hover:text-accent transition-colors">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-accent text-xs rounded border border-border hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 xl:mt-20">
          <h3
            className="text-2xl font-bold text-accent mb-6 flex items-center"
            data-aos="fade-up"
          >
            <Book className="w-6 h-6 mr-2" />
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card hover:shadow-elegant hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Certificate Image */}
                {cert.image ? (
                  <div
                    className="w-full h-36 sm:h-40 bg-white/[0.08] rounded-lg mb-4 overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-colors cursor-pointer relative flex-shrink-0"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={280}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-36 sm:h-40 bg-accent/10 rounded-lg mb-4 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-colors flex-shrink-0">
                    <Book className="w-10 h-10 text-accent/50" />
                  </div>
                )}

                <h4 className="font-semibold text-foreground mb-1.5 line-clamp-2 min-h-[2.75rem] group-hover:text-accent transition-colors">
                  {cert.title}
                </h4>
                <p className="text-accent text-sm font-medium mb-1">
                  {cert.provider}
                </p>
                <p className="text-muted-foreground text-xs mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  {cert.date}
                </p>

                {cert.description && (
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal Dialog */}
          {selectedImage && (
            <Dialog
              open={!!selectedImage}
              onOpenChange={(open) => !open && setSelectedImage(null)}
            >
              <DialogContent className="max-w-2xl sm:max-w-3xl lg:max-w-4xl w-[95vw] max-h-[95vh] overflow-hidden bg-background/95 backdrop-blur-sm border border-accent/20 p-4 sm:p-6">
                <div className="flex items-center justify-center h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
                  <img
                    src={selectedImage}
                    alt="Certificate preview, enlarged"
                    decoding="async"
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
