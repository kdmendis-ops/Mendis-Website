export const personal = {
  name: "Shaun Kappina Mendis",
  title: "Agentic AI Builder & Automation Engineer",
  tagline: "Designing multi-agent AI systems and full-stack automation pipelines.",
  bio: "Agentic AI Builder and Automation Engineer with a production track record of designing multi-agent AI systems, deploying full-stack automation pipelines, and architecting secure MCP middleware layers. 10+ years at Canada's Big 5 banks brings deep enterprise credibility in security, IAM, and integration complexity.",
  email: "kdmendis@gmail.com",
  github: "https://github.com/kdmendis-ops",
  linkedin: "https://www.linkedin.com/in/kappina-mendis",
  resumeFile: "/resume.pdf",
};

export const skills = [
  { name: "Python", category: "AI & Automation" },
  { name: "n8n", category: "AI & Automation" },
  { name: "ADK", category: "AI & Automation" },
  { name: "A2A (Agent-to-Agent)", category: "AI & Automation" },
  { name: "GPT-4", category: "AI & Automation" },
  { name: "Agentic Workflows", category: "AI & Automation" },
  { name: "Deep Learning", category: "AI & Automation" },
  { name: "LangChain", category: "AI & Automation" },
  { name: "LangGraph", category: "AI & Automation" },
  { name: "AWS (EC2, S3, IAM, RDS)", category: "Data & Cloud" },
  { name: "Supabase", category: "Data & Cloud" },
  { name: "PostgreSQL", category: "Data & Cloud" },
  { name: "Databricks", category: "Data & Cloud" },
  { name: "Pinecone", category: "Data & Cloud" },
  { name: "Vector Databases", category: "Data & Cloud" },
  { name: "Data Chunking", category: "Data & Cloud" },
  { name: "MCP Server Architecture", category: "Architecture" },
  { name: "Secure API Proxy Design", category: "Architecture" },
  { name: "Multi-Agent Systems", category: "Architecture" },
];

export const projects = [
  {
    title: "AI-Powered Lead Qualification System",
    description:
      "Conceptualized and deployed a live full-stack application that automates lead scoring using an asynchronous n8n engine. Ingests data, enriches it via Google Search, and uses GPT-4 to score leads as Hot, Warm, or Cold. Automated real-time Slack notifications and data logging, reducing manual lead triage time by an estimated 90%.",
    tags: ["n8n", "GPT-4", "Lovable", "Google Sheets", "Slack"],
    liveUrl: "https://streak-star-53.lovable.app",
    githubUrl: "https://github.com/kdmendis-ops/streak-star-53",
    image: null,
  },
  {
    title: "Multi-Agent Data Query Architecture",
    description:
      "Designed a secure, three-tier system allowing natural language querying of sensitive business data. Developed specialized Python agents (Router, Data Fetcher, Data Analyzer) to triage requests and handle complex analytical queries. Implemented n8n as a secure MCP server, acting as a proxy to execute AI-generated SQL safely on a PostgreSQL database.",
    tags: ["Python ADK", "n8n", "MCP Server", "PostgreSQL", "Supabase"],
    liveUrl: null,
    githubUrl: "https://github.com/kdmendis-ops",
    image: null,
  },
  {
    title: "API Project",
    description:
      "A hands-on project exploring API design, integration patterns, and secure endpoint architecture for modern web applications.",
    tags: ["APIs", "Python", "REST"],
    liveUrl: null,
    githubUrl: "https://github.com/kdmendis-ops/API-Project",
    image: null,
  },
  {
    title: "Currency Agent",
    description:
      "An intelligent agent that fetches and processes real-time currency exchange data, demonstrating agentic AI patterns and external API orchestration.",
    tags: ["Python", "ADK", "Agentic AI"],
    liveUrl: null,
    githubUrl: "https://github.com/kdmendis-ops/currency-agent",
    image: null,
  },
  {
    title: "AI Engineering App",
    description:
      "A full-stack AI engineering application showcasing modern AI/ML pipeline design, model integration, and intelligent automation workflows.",
    tags: ["Python", "AI/ML", "Full-Stack"],
    liveUrl: null,
    githubUrl: "https://github.com/kdmendis-ops/ai-engineering-app",
    image: null,
  },
];

export const experience = [
  {
    role: "Branch System Administrator / IAM Specialist",
    company: "Scotiabank",
    period: "2017 – 2025",
    bullets: [
      "Managed enterprise IT operations and identity access for a major Canadian financial institution, supporting hundreds of users in a highly regulated environment",
      "Owned the Identity and Access Management (IAM) lifecycle: provisioning, auditing, and revoking permissions in line with strict financial regulatory requirements",
      "Administered Salesforce CRM workflows and Excel-based reporting pipelines, building fluency with structured business data systems",
    ],
  },
  {
    role: "IT Infrastructure & Identity Analyst",
    company: "CIBC",
    period: "2016 – 2017",
    bullets: [
      "Delivered IT infrastructure and identity management within a security-conscious Big 5 environment",
      "Administered Active Directory user identity lifecycle at scale, focusing on provisioning and role assignment for a multi-branch workforce",
    ],
  },
  {
    role: "Enterprise Migration Technical Support",
    company: "RBC",
    period: "2015 – 2016",
    bullets: [
      "Supported a bank-wide enterprise platform migration affecting thousands of users under strict operational continuity constraints",
      "Executed and validated OS migrations at scale with zero data loss across the branch network",
    ],
  },
];

export const education = [
  {
    title: "AI Engineering Bootcamp",
    institution: "AI Product Builder Certification",
    year: "Jan 2026",
  },
  {
    title: "Network Technologist Diploma",
    institution: "Centennial College",
    year: "",
  },
  {
    title: "Microsoft Certified Professional (Windows Server)",
    institution: "Microsoft",
    year: "",
  },
  {
    title: "IBM Quality Call Centre",
    institution: "IBM",
    year: "",
  },
];
