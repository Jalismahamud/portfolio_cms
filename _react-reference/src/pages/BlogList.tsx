import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Laravel Applications",
    excerpt: "Learn best practices for building enterprise-grade Laravel applications that can handle millions of users.",
    category: "Laravel",
    date: "Dec 25, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    slug: "building-scalable-laravel-applications"
  },
  {
    id: 2,
    title: "Modern React Patterns for 2025",
    excerpt: "Explore the latest React patterns and hooks that will make your code cleaner and more maintainable.",
    category: "React",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    slug: "modern-react-patterns-2025"
  },
  {
    id: 3,
    title: "Server Management Best Practices",
    excerpt: "A comprehensive guide to managing production servers, from deployment to monitoring and security.",
    category: "DevOps",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    slug: "server-management-best-practices"
  },
  {
    id: 4,
    title: "Tailwind CSS Tips and Tricks",
    excerpt: "Master Tailwind CSS with these advanced tips and tricks for creating beautiful, responsive designs.",
    category: "CSS",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
    slug: "tailwind-css-tips-tricks"
  },
  {
    id: 5,
    title: "Getting Started with OpenAI GPT API",
    excerpt: "A comprehensive guide to integrating OpenAI's powerful GPT models into your applications with practical examples.",
    category: "AI",
    date: "Dec 28, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    slug: "getting-started-openai-gpt-api"
  },
  {
    id: 6,
    title: "Building RAG Systems with LangChain",
    excerpt: "Learn how to build powerful Retrieval-Augmented Generation systems using LangChain and vector databases.",
    category: "AI",
    date: "Dec 22, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    slug: "building-rag-systems-langchain"
  },
  {
    id: 7,
    title: "PostgreSQL Performance Optimization",
    excerpt: "Deep dive into PostgreSQL performance tuning, indexing strategies, and query optimization techniques.",
    category: "Database",
    date: "Dec 18, 2024",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    slug: "postgresql-performance-optimization"
  },
  {
    id: 8,
    title: "MongoDB Schema Design Patterns",
    excerpt: "Master MongoDB schema design with best practices for embedding, referencing, and handling complex data relationships.",
    category: "Database",
    date: "Dec 12, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    slug: "mongodb-schema-design-patterns"
  },
  {
    id: 9,
    title: "Web Application Security Fundamentals",
    excerpt: "Essential security practices every developer should know to protect web applications from common vulnerabilities.",
    category: "Security",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    slug: "web-application-security-fundamentals"
  },
  {
    id: 10,
    title: "Implementing OAuth 2.0 and JWT Authentication",
    excerpt: "Step-by-step guide to implementing secure authentication using OAuth 2.0 and JSON Web Tokens in modern applications.",
    category: "Security",
    date: "Dec 5, 2024",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    slug: "implementing-oauth-jwt-authentication"
  },
  {
    id: 11,
    title: "Prompt Engineering Masterclass",
    excerpt: "Advanced techniques for crafting effective prompts that get the best results from large language models.",
    category: "AI",
    date: "Dec 1, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1737641624486-7846df8528dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvbXB0JTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
    slug: "prompt-engineering-masterclass"
  },
  {
    id: 12,
    title: "Redis Caching Strategies for High Performance",
    excerpt: "Learn effective caching patterns with Redis to dramatically improve your application's performance and scalability.",
    category: "Database",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    slug: "redis-caching-strategies"
  },
  {
    id: 13,
    title: "Designing Scalable MySQL Databases for High-Traffic Applications",
    excerpt: "Comprehensive guide on building scalable and reliable MySQL databases, covering normalization, replication, sharding, and query performance optimization.",
    category: "Database",
    date: "Jul 10, 2025",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1741958193874-6ef299f6b053?w=600&h=400&fit=crop",
    slug: "scalable-mysql-databases"
  },
  {
    id: 14,
    title: "Building Modern REST APIs with Laravel: A Practical Guide",
    excerpt: "Learn step-by-step how to design, implement, and secure RESTful APIs in Laravel, including authentication, rate limiting, and response optimization.",
    category: "Laravel",
    date: "Jan 5, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1672309558498-cfcc89afff25?w=600&h=400&fit=crop",
    slug: "modern-rest-apis-laravel"
  },
  {
    id: 15,
    title: "Vue.js & Inertia.js for Dynamic Single Page Applications",
    excerpt: "Discover how to create responsive, reactive SPAs using Vue.js combined with Inertia.js for seamless Laravel integration.",
    category: "Frontend",
    date: "Feb 20, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    slug: "vue-inertia-spa-laravel"
  },
  {
    id: 16,
    title: "Practical Machine Learning Projects for Web Developers",
    excerpt: "Hands-on machine learning implementations for web applications, including prediction models, recommendation systems, and data preprocessing techniques.",
    category: "AI",
    date: "Apr 3, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    slug: "ml-projects-for-web-developers"
  },
  {
    id: 17,
    title: "Deploying Laravel Applications on AWS: EC2, RDS, and S3 in Production",
    excerpt: "A practical walkthrough of hosting a Laravel application on AWS — provisioning EC2, connecting to RDS, offloading file storage to S3, and keeping it all deployable with zero downtime.",
    category: "DevOps",
    date: "Jan 15, 2026",
    readTime: "11 min read",
    image: "/blog/aws-deployment.webp",
    slug: "deploying-laravel-on-aws"
  },
  {
    id: 18,
    title: "Deploying a Laravel App on a Hostinger VPS: Complete Step-by-Step Guide",
    excerpt: "How to take a Laravel project from local development to a fully configured Hostinger VPS — Nginx, PHP-FPM, MySQL, SSL, and a deployment workflow you can repeat for every release.",
    category: "DevOps",
    date: "Jan 22, 2026",
    readTime: "10 min read",
    image: "/blog/hostinger-vps.webp",
    slug: "laravel-hostinger-vps-deployment"
  },
  {
    id: 19,
    title: "Claude AI Models Explained: Choosing the Right Model for Your App",
    excerpt: "Anthropic's Claude models come in different tiers built for different jobs. Here's how the model family breaks down, and a practical framework for picking the right one for a real application.",
    category: "AI",
    date: "Feb 3, 2026",
    readTime: "9 min read",
    image: "/blog/claude-ai-models.webp",
    slug: "claude-ai-models-explained"
  },
  {
    id: 20,
    title: "Essential PHP Built-in Functions Every Developer Should Master",
    excerpt: "PHP ships with hundreds of built-in functions, but a small, well-understood set covers most real-world backend work. Here are the ones worth knowing cold, with practical examples of each.",
    category: "PHP",
    date: "Feb 12, 2026",
    readTime: "10 min read",
    image: "/blog/php-builtin-functions.webp",
    slug: "essential-php-builtin-functions"
  },
  {
    id: 21,
    title: "Laravel Queues & Jobs: Building Scalable Background Processing",
    excerpt: "Anything that doesn't need to happen before the response goes out — emails, exports, notifications — belongs in a queue. Here's how to design Laravel jobs that scale.",
    category: "Laravel",
    date: "Feb 20, 2026",
    readTime: "10 min read",
    image: "/blog/laravel-queues.webp",
    slug: "laravel-queues-and-jobs"
  },
  {
    id: 22,
    title: "Dockerizing a Laravel + Vue.js Application for Consistent Environments",
    excerpt: "\"It works on my machine\" disappears once the whole stack — PHP, Nginx, MySQL, and the Vue build — runs from the same Docker Compose file for every developer and every server.",
    category: "DevOps",
    date: "Mar 1, 2026",
    readTime: "11 min read",
    image: "/blog/docker-laravel.webp",
    slug: "dockerizing-laravel-vue"
  },
  {
    id: 23,
    title: "CI/CD for Laravel: Automating Deployment with GitHub Actions",
    excerpt: "Manual deploys are where bugs slip through. A GitHub Actions pipeline that runs tests, checks code style, and deploys automatically turns every merge into a safe, repeatable release.",
    category: "DevOps",
    date: "Mar 10, 2026",
    readTime: "9 min read",
    image: "/blog/cicd-github-actions.webp",
    slug: "cicd-laravel-github-actions"
  },
  {
    id: 24,
    title: "Laravel Sanctum Authentication for SPAs: A Practical Guide",
    excerpt: "Sanctum's cookie-based SPA authentication is simpler and more secure than juggling JWTs by hand. Here's how the CSRF/session handshake works and how to wire it up with a Vue.js frontend.",
    category: "Laravel",
    date: "Mar 18, 2026",
    readTime: "9 min read",
    image: "/blog/laravel-sanctum-spa.webp",
    slug: "laravel-sanctum-spa-auth"
  },
  {
    id: 25,
    title: "Real-Time Features in Laravel with WebSockets and Reverb",
    excerpt: "Live notifications, chat, and dashboards that update themselves — Laravel Reverb brings first-party WebSocket broadcasting into the framework without a third-party service in the loop.",
    category: "Laravel",
    date: "Mar 25, 2026",
    readTime: "10 min read",
    image: "/blog/laravel-websockets.webp",
    slug: "realtime-laravel-websockets"
  },
  {
    id: 26,
    title: "Building Multi-Tenant SaaS Applications with Laravel",
    excerpt: "Every SaaS product eventually asks the same question: how do you isolate one customer's data from another's, cleanly, at scale? Here's how single-database multi-tenancy works in Laravel.",
    category: "Laravel",
    date: "Apr 2, 2026",
    readTime: "12 min read",
    image: "/blog/multi-tenant-saas.webp",
    slug: "multi-tenant-saas-laravel"
  }
];

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = [...new Set(blogPosts.map(post => post.category))];
    return cats.sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === null || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Laravel: 'bg-red-500/20 text-red-400 border-red-500/30',
      React: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      Frontend: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      DevOps: 'bg-green-500/20 text-green-400 border-green-500/30',
      CSS: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      AI: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      Database: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      Security: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      PHP: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    };
    return colors[category] || 'bg-accent/20 text-accent border-accent/30';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog & Articles | Jalis Mahamud"
        description="Technical articles and tutorials on Laravel, Vue.js, REST APIs, databases, AI integration, and modern web development by Jalis Mahamud."
        canonical="/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jalisdev.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://jalisdev.com/blog' },
          ],
        }}
      />
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-down">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Blog & Articles
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">
              All Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore tutorials, insights, and best practices in web development, 
              DevOps, AI, and modern technologies.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-10 space-y-6" data-aos="fade-up">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground mr-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-center text-sm text-muted-foreground">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  
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
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;