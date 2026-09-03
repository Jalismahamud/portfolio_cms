import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, FolderKanban, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SEO
        title="Page Not Found | Jalis Mahamud"
        description="The page you're looking for doesn't exist or may have been moved. Explore Jalis Mahamud's projects and blog instead."
        canonical={location.pathname}
        noindex
      />
      <div className="text-center">
        <p className="section-number text-6xl sm:text-7xl mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page <span className="text-accent font-mono">{location.pathname}</span> doesn't
          exist or may have been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 transition-all duration-300"
          >
            <FolderKanban className="w-5 h-5" />
            View Projects
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5" />
            Read the Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
