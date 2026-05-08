import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "mini-ecommerce-nest",
    title: "Mini E-Commerce Platform",
    description:
      "A production-ready e-commerce system focusing on modular architecture, transactional data consistency, and fraud-resistant order processing.",
    image: "/projects/mini-ecommerce.png",
    techStack: ["NestJS", "TypeScript", "MySQL", "TypeORM", "JWT"],
    features: [
      "Transactional order processing with atomic stock updates",
      "JWT auth with HTTP-only cookies (access + refresh)",
      "Fraud prevention with cancellation limits",
      "Order state machine with controlled transitions",
    ],
    github: {
      frontend: "https://github.com/rifah07/mini-ecommerce-frontend",
      backend: "https://github.com/rifah07/mini-ecommerce-nestjs",
    },
    live: {
      frontend: "https://mini-ecommerce-frontend-sandy.vercel.app/",
      backend: "https://mini-ecommerce-nestjs.onrender.com",
    },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "multi-tenant-workspace",
    title: "Multi-Tenant Workspace API",
    description:
      "A scalable multi-tenant backend system with strict tenant isolation and role-based access control.",
    image: "/projects/workspace.png",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    features: [
      "Tenant isolation with organization-level data boundaries",
      "Role-based access (Admin, Member)",
      "ACID-compliant schema with transactions",
      "Optimized indexed queries for performance",
    ],
    github: { backend: "https://github.com/rifah07" },
    live: {},
    category: "Backend",
    featured: true,
  },
  {
    id: "shopsphere",
    title: "ShopSphere E-commerce Platform",
    description:
      "A full-featured e-commerce system with authentication, payments, and analytics.",
    image: "/projects/shopsphere.png",
    techStack: ["TypeScript", "Node.js", "MongoDB"],
    features: [
      "Role-based authentication (Admin/Seller/Buyer)",
      "Payment integration (Stripe/PayPal)",
      "Product search, cart, wishlist",
      "Revenue analytics dashboard",
    ],
    github: {},
    live: {},
    category: "Full Stack",
    featured: true,
  },
  {
    id: "financial-tracker",
    title: "Financial Tracker Suite",
    description:
      "A financial management system with analytics, reporting, and automation.",
    image: "/projects/financial-tracker.png",
    techStack: ["Node.js", "MongoDB", "Express"],
    features: [
      "JWT authentication with secure password hashing",
      "Transaction tracking with auto balance calculation",
      "PDF report generation",
      "Email notifications",
    ],
    github: {},
    live: {},
    category: "Full Stack",
    featured: true,
  },
  {
    id: "hallmate",
    title: "hallmate-your-campus-companion",
    description:
      "A role-based hall management system for student applications and administration.",
    image: "/projects/hall.png",
    techStack: ["Node.js", "Express", "MongoDB"],
    features: [
      "Role-based workflows for students and admins",
      "Application and complaint management",
      "CSV-based bulk user import",
    ],
    github: {},
    live: {},
    category: "Backend",
    featured: true,
  },
  {
    id: "telegram-expense-tracker-bot",
    title: "Telegram Expense Tracker Bot",
    description: "A Telegram bot for tracking expenses and managing budgets.",
    image: "/projects/expense-tracker.png",
    techStack: ["Node.js", "Express JS", "Telegram API"],

    features: [
      "Real-time sensor data monitoring",
      "Automated alerts for unsafe conditions",
      "Historical data logging",
    ],
    github: {},
    live: {},
    category: "Backend",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
