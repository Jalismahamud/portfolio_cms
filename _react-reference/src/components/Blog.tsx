import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Mastering Scalable Laravel Applications: Best Practices for Enterprise Systems",
      excerpt:
        "Explore advanced Laravel development techniques to build robust, maintainable, and scalable applications capable of handling millions of users.",
      category: "Laravel",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50cmVwcmVuZXVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
      slug: "building-scalable-laravel-applications",
    },
    {
      id: 2,
      title: "Building Modern REST APIs with Laravel: A Practical Guide",
      excerpt:
        "Learn step-by-step how to design, implement, and secure RESTful APIs in Laravel, including authentication, rate limiting, and response optimization.",
      category: "Laravel",
      date: "Jan 5, 2025",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1672309558498-cfcc89afff25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcmF2ZWx8ZW58MHx8MHx8fDA%3D",
      slug: "modern-rest-apis-laravel",
    },
    {
      id: 3,
      title: "Vue.js & Inertia.js for Dynamic Single Page Applications",
      excerpt:
        "Discover how to create responsive, reactive SPAs using Vue.js combined with Inertia.js for seamless Laravel integration.",
      category: "Frontend",
      date: "Feb 20, 2025",
      readTime: "11 min read",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VnVlLmpzfGVufDB8fDB8fHww",
      slug: "vue-inertia-spa-laravel",
    },
    {
      id: 5,
      title: "Integrating OpenAI GPT API for Intelligent Applications",
      excerpt:
        "A professional guide to leveraging OpenAI GPT models in real-world projects, including chatbots, content generation, and AI-assisted workflows.",
      category: "AI",
      date: "Mar 12, 2025",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1676299081847-824916de030a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW50ZWdyYXRpbmclMjBPcGVuQUklMjBHUFR8ZW58MHx8MHx8fDA%3D",
      slug: "getting-started-openai-gpt-api",
    },
    {
      id: 6,
      title: "Practical Machine Learning Projects for Web Developers",
      excerpt:
        "Hands-on machine learning implementations for web applications, including prediction models, recommendation systems, and data preprocessing techniques.",
      category: "AI",
      date: "Apr 3, 2025",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
      slug: "ml-projects-for-web-developers",
    },
    {
      id: 7,
      title:
        "PostgreSQL Performance Optimization: Indexing and Query Tuning Techniques",
      excerpt:
        "Learn advanced strategies to improve PostgreSQL database performance, including indexing, query optimization, caching, and schema design best practices.",
      category: "Database",
      date: "May 22, 2025",
      readTime: "14 min read",
      image:
        "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U1FMfGVufDB8fDB8fHww",
      slug: "postgresql-performance-optimization",
    },
    {
      id: 8,
      title: "Designing Scalable MySQL Databases for High-Traffic Applications",
      excerpt:
        "Comprehensive guide on building scalable and reliable MySQL databases, covering normalization, replication, sharding, and query performance optimization.",
      category: "Database",
      date: "Jul 10, 2025",
      readTime: "13 min read",
      image:
        "https://images.unsplash.com/photo-1741958193874-6ef299f6b053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
      slug: "scalable-mysql-databases",
    },
    {
      id: 9,
      title:
        "Web Application Security Fundamentals: Protecting Against Common Vulnerabilities",
      excerpt:
        "Understand critical web security practices, including input validation, authentication, encryption, CSRF/XSS prevention, and secure session management.",
      category: "Security",
      date: "Sep 18, 2025",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      slug: "web-application-security-fundamentals",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Laravel: "bg-red-500/20 text-red-400 border-red-500/30",
      React: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Frontend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      DevOps: "bg-green-500/20 text-green-400 border-green-500/30",
      CSS: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      AI: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      Database: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Security: "bg-rose-500/20 text-rose-400 border-rose-500/30",
      PHP: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    };
    return colors[category] || "bg-accent/20 text-accent border-accent/30";
  };

  return (
    <section
      id="blog"
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-highlight rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 sm:mb-20 text-center" data-aos="fade-down">
          <h2 className="section-header">
            <span className="section-number">05.</span> Blog & Articles
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical articles and tutorials on web development, software
            architecture, and modern technologies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-card border border-border rounded-xl overflow-hidden card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  width={500}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
