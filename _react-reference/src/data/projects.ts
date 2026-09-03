export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  features: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    id: "AI-chique",
    title: "AI Chique - AI-Powered Fashion Assistant",
    description:
      "Developed an innovative AI-powered fashion assistant that provides personalized style recommendations and virtual try-on experiences. The platform leverages machine learning algorithms to analyze user preferences and suggest fashionable outfits.",
    longDescription:
      "AI Chique is a cutting-edge fashion technology platform that combines artificial intelligence with e-commerce to deliver a seamless shopping experience. The platform uses advanced machine learning models to understand user preferences, body types, and style choices, providing highly personalized recommendations.",
    images: ["/ai-chique.webp", "/ai-chique1.webp", "/ai-chique2.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "Rest APIs", "Stripe", "Open AI Models"],
    github: "https://github.com/Jalismahamud/fashion_frontend_riaky",
    live: "https://fashion.jalisdev.com",
    featured: true,
    features: [
      "Personalized Style Recommendations - AI-driven outfit suggestions based on user preferences",
      "Virtual Try-On - Augmented reality feature for users to visualize outfits",
      "Comprehensive User Profiles - Detailed style and preference tracking",
      "Seamless E-commerce Integration - Direct shopping from recommendations",
      "Real-time Inventory Sync - Up-to-date product availability",
      "AI-Powered Search - Natural language processing for intuitive product discovery",
      "Scalable Architecture - Built to handle high traffic and data processing",
      "Responsive Design - Optimized for all devices",
      "Subscription Model - Premium features and exclusive content for subscribers",
    ],
    challenges: [
      "Integrating complex AI models for accurate style recommendations",
      "Developing a seamless virtual try-on experience",
      "Ensuring real-time inventory synchronization with multiple retailers",
      "Building a scalable architecture to handle AI processing and user traffic",
      "Creating an intuitive user interface for diverse user preferences",
    ],
  },
  {
    id: "soko-room",
    title: "Soko Room - E-commerce Platform",
    description:
      "Built a modern e-commerce platform enabling users to list, manage, and sell products. Key features include product boosting system for enhanced visibility based on payment and duration, Stripe integration for secure payment processing, admin/user dashboards with financial reporting and analytics.",
    longDescription:
      "Soko Room is a full-featured e-commerce platform designed to empower sellers with comprehensive tools for online business management. The platform offers a sophisticated product management system, integrated payment processing, and detailed analytics to help businesses thrive in the digital marketplace.",
    images: ["/soko-roam.webp", "/soko-roam1.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "Stripe API", "Bootstrap"],
    github: "https://github.com/Webgenius0/mercymat_backend",
    live: "https://soko-room.com",
    featured: false,
    features: [
      "Product Boosting System - Enhanced visibility based on payment and duration",
      "Secure Stripe Payment Integration - Complete payment processing solution",
      "Admin Dashboard - Comprehensive management tools with financial reporting",
      "User Dashboard - Order tracking, reporting",
      "Advanced Search & Filtering - Intuitive product discovery",
      "Scalable Architecture - Built for growth and high traffic",
      "Responsive Design - Optimized for all devices",
    ],
    challenges: [
      "Implementing complex payment workflows with Stripe",
      "Building scalable product boosting algorithms",
      "Creating comprehensive admin analytics dashboard",
      "Ensuring secure user data handling and transactions",
    ],
  },
  {
    id: "total-eco-clean",
    title: "Total Eco Clean - Cleaning Service Booking Platform",
    description:
      "Developed a platform for booking eco-friendly home and vehicle cleaning services. Highlights include subscription-based service bookings, Stripe-powered secure payments (one-time and recurring), CMS for managing service content and promotions.",
    longDescription:
      "Total Eco Clean revolutionizes the cleaning service industry by providing a seamless platform for booking eco-friendly cleaning services. The platform connects customers with verified, insured professionals while maintaining environmental consciousness.",
    images: ["/total-echo.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "Stripe", "CMS"],
    github: "https://github.com/Webgenius0/jayy68_laravel",
    live: "https://www.totalecoclea.com",
    featured: false,
    features: [
      "Subscription-based Service Bookings - Flexible recurring appointments",
      "Stripe Payment Integration - Secure one-time and recurring payments",
      "Content Management System - Easy service content and promotion management",
      "Steam-cleaning Technology Integration - Advanced cleaning methods",
      "Verified Professionals - Insured and vetted service providers",
      "Real-time Booking Management - Live scheduling and updates",
    ],
    challenges: [
      "Integrating complex subscription billing systems",
      "Building reliable service provider verification system",
      "Creating flexible booking management interface",
      "Implementing eco-friendly service standards tracking",
    ],
  },
  {
    id: "human-resource-management",
    title: "Human Resource Management - HR Platform",
    description:
      "Developed a comprehensive human resource management platform for handling employee records, payroll, and performance evaluations. Features include role-based access control, automated reporting, and integration with third-party tools.",
    longDescription:
      "This comprehensive HR platform empowers organizations to efficiently manage their human capital through streamlined processes, analytics, and compliance features.",
    images: ["/hrm.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js"],
    github: "https://github.com/Jalismahamud",
    live: "https://hrm.jalisdev.com",
    featured: true,
    features: [
      "Employee Record Management - Centralized employee database",
      "Payroll Management - Automated salary processing",
      "Performance Tracking - Comprehensive evaluation system",
      "Role-based Access Control - Secure permission management",
      "Automated Reporting - Generate HR insights and analytics",
      "Third-party Integration - Connect with external tools",
    ],
    challenges: [
      "Building comprehensive payroll system",
      "Implementing complex role-based access control",
      "Creating accurate performance tracking metrics",
      "Ensuring data security and compliance",
    ],
  },
  {
    id: "bmw-parts",
    title: "BMW Parts - BMW Parts Marketplace",
    description:
      "Developed a specialized platform for buying and selling second-hand BMW car parts. Key features include role-switching system for seamless buyer/seller experience, Stripe Connect integration for secure seller onboarding and multi-party payouts.",
    longDescription:
      "BMW Parts Marketplace is a niche platform specifically designed for BMW enthusiasts and professional parts dealers. The platform facilitates secure transactions between buyers and sellers while maintaining quality standards through an approval system.",
    images: ["/bmw-parts.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "Stripe Connect"],
    github: "https://github.com/Webgenius0/jcunning_backend",
    live: "https://bmwparts.com",
    featured: false,
    features: [
      "Role-switching System - Seamless buyer/seller experience",
      "Stripe Connect Integration - Secure multi-party payouts",
      "Admin Product Approval - Quality assurance system",
      "Order Notifications - Real-time email alerts",
      "Part Verification - Authenticity checking system",
      "Advanced Search - BMW-specific part finder",
    ],
    challenges: [
      "Implementing Stripe Connect for marketplace payments",
      "Building comprehensive part categorization system",
      "Creating reliable seller verification process",
      "Developing BMW-specific part database",
    ],
  },
  {
    id: "pet-fresh-kitchen",
    title: "Pet Fresh Kitchen - Online Pet Food Delivery Platform",
    description:
      "Built a pet-focused food delivery system offering fresh, personalized meals for dogs based on their breed, age, weight, and health needs. Features personalized meal planning, secure Stripe integration, and admin CMS.",
    longDescription:
      "Pet Fresh Kitchen transforms pet nutrition by providing personalized meal plans tailored to each dog's specific needs. The platform combines veterinary science with convenient delivery to ensure optimal pet health.",
    images: ["/pet-fresh-kitchen.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "Stripe"],
    github: "https://github.com/Webgenius0/damansing_laravel_new",
    live: "https://pet-fresh-kitchen.netlify.app",
    featured: false,
    features: [
      "Personalized Meal Planning - Breed, age, weight, and health-based recommendations",
      "Pet Profile Management - Comprehensive pet information tracking",
      "Secure Payment Processing - Stripe integration for subscriptions",
      "Real-time Notifications - Order and account status updates",
      "Admin CMS - Product and pricing management",
      "Quality Assurance - Product approval system",
    ],
    challenges: [
      "Developing complex meal recommendation algorithms",
      "Integrating veterinary nutritional guidelines",
      "Building subscription management system",
      "Creating pet health tracking features",
    ],
  },
  {
    id: "cryptax",
    title: "Cryptax - Cryptocurrency Taxation Platform",
    description:
      "Built a secure and intelligent crypto tax platform for individuals and businesses. Features AI-powered tax assistant, live crypto charts, Stripe subscription billing, and bank-grade security.",
    longDescription:
      "Cryptax provides a comprehensive solution for cryptocurrency taxation, combining AI technology with financial expertise to simplify complex tax calculations and reporting for crypto traders and businesses.",
    images: ["/cryptax.webp"],
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "AI APIs", "Crypto APIs"],
    github: "https://github.com/Webgenius0/anandkasi_laravel",
    live: "https://www.cryptax.nl",
    featured: true,
    features: [
      "AI-powered Tax Assistant - Custom tax reports and real-time calculations",
      "Live Crypto Charts - Portfolio and transaction tracking",
      "Stripe Subscription Billing - Flexible plan management",
      "Advanced Notifications - Billing, reports, and account alerts",
      "Bank-grade Security - 256-bit SSL encryption",
      "Regulatory Compliance - Expert-verified tax solutions",
    ],
    challenges: [
      "Integrating multiple cryptocurrency APIs",
      "Implementing AI-powered tax calculations",
      "Ensuring regulatory compliance across jurisdictions",
      "Building secure financial data handling systems",
    ],
  },
  {
    id: "breatheasy",
    title: "BreathEasy - Yoga & Wellness Mobile App",
    description:
      "Developed BreathEasy, a holistic yoga and meditation mobile application with premium yoga classes, guided meditations, progress tracking, and community features.",
    longDescription:
      "BreathEasy is a comprehensive wellness mobile application that combines traditional yoga practices with modern technology to provide personalized wellness experiences for users of all skill levels.",
    images: ["/breatheasy.svg"],
    technologies: ["Flutter", "Dart", "Firebase", "REST API (Laravel)", "Stripe"],
    github: "https://github.com/Webgenius0/breatheasy",
    live: "#",
    featured: false,
    features: [
      "Premium Yoga Classes - Hatha, Vinyasa, Restorative (30/45/60 mins)",
      "Guided Meditations - 5-15 minute sessions for focus and relaxation",
      "Daily Motivation - Short inspirational talks for mindfulness",
      "Progress Tracking - Classes, moods, diet logs, and recommendations",
      "Community Forum - Premium user insights and Q&A platform",
      "Offline Access - Download sessions for anytime practice",
    ],
    challenges: [
      "Developing cross-platform mobile application",
      "Implementing offline content synchronization",
      "Building subscription-based content access",
      "Creating engaging user progress tracking",
    ],
  },
];
