import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Code,
  Database,
  Terminal,
  Shield,
  Scale,
  TrendingUp,
  GraduationCap,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronRight,
  Download,
  Sparkles,
  CheckCircle2,
  UserCheck,
  Image as ImageIcon,
  Lock,
  Layers,
  BookOpen,
  BarChart,
  Zap,
  Menu,
  X,
  Server,
  Workflow,
  Laptop,
  ArrowUpRight,
  Send,
  Sliders,
  Maximize2
} from 'lucide-react';

// ==========================================
// TYPESAFE INTERFACES
// ==========================================

export type ProjectCategory = 'all' | 'ai' | 'web' | 'hardware' | 'edtech';
export type SkillCategory = 'software' | 'hardware' | 'tools' | 'core';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  detailedDescription: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasSystemSpec?: boolean; // Indicates if detailed PRD/TRD modal is available
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
  iconName: string;
  tag: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  gpa: string;
  status: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  organization: 'Infosys' | 'IBM' | 'Deloitte' | 'Edunet' | 'Incanto' | 'SAP';
  status: 'Completed' | 'Ongoing';
  issueDate: string;
  certId?: string;
  verifyUrl?: string;
  verifyText?: string;
  institution?: string;
  description: string;
  skills: string[];
  category: 'software' | 'hardware' | 'ai' | 'analytics';
  certImage?: string;
  certFile?: string;
}

// ==========================================
// PORTFOLIO DATA CONSTANTS
// ==========================================

const PROFILE_DATA = {
  name: "Anvith Kumar",
  title: "Bridging Hardware and Software: Building Intelligent Systems for the Real World",
  tagline: "ECE Student & Python Developer specializing in full-stack web applications, embedded systems, and data-driven AI platforms.",
  about: "I am a motivated Electronics and Communication Engineering undergraduate currently pursuing my degree in Karnataka, India. With a deep curiosity for both software architectures and hardware systems, my technical journey centers around building full-stack web applications, designing embedded logic, and extracting actionable insights from data. I thrive on solving real-world challenges, implementing secure workflows, and developing scalable, intelligent solutions that make an impact.",
  email: "anvithkumar.ece@skit.org.in",
  github: "https://github.com/anvith-kumar2006",
  linkedin: "https://linkedin.com/in/anvith-kumar-22470a333",
  location: "Karnataka, India",
  college: "VTU Affiliated College, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.) — Electronics & Communication Engineering",
  cgpa: "6.5 / 10",
  batch: "2024 – 2028",
  image: "/candidate.jpeg",
  resumeImage: "/resume.jpeg"
};

const PROJECTS_DATA: Project[] = [
  {
    id: "verilaw",
    title: "VeriLaw",
    subtitle: "AI Legal Assistant for Indian Law",
    category: "ai",
    featured: true,
    description: "An intelligent digital assistant designed to democratize legal comprehension by analyzing statutes and regulations.",
    detailedDescription: "Processes Indian legal codes to provide simplified, context-aware advice for legal professionals and everyday citizens. Combines AI integration with an intuitive web UI to turn complex statutory legalese into plain, actionable language.",
    techStack: ["Python", "AI Integrations", "HTML5", "CSS3", "Flask"],
    highlights: [
      "Natural language statute analysis & legal query processing",
      "Contextual summarization of Indian Law & regulations",
      "Designed for both legal practitioners and everyday citizens",
      "Clean, accessible responsive user interface"
    ],
    githubUrl: "https://github.com/anvith-kumar2006/VeriLaw",
    liveUrl: "https://github.com/anvith-kumar2006/VeriLaw"
  },
  {
    id: "trade-analysis",
    title: "Trade-Analysis-Platform",
    subtitle: "AI-Powered Trade Analytics Engine",
    category: "ai",
    featured: true,
    description: "High-performance analytics web application designed to track trading activities, process transactional records, and identify key market trends.",
    detailedDescription: "Leveraging machine learning algorithms and robust Python data pipelines, this platform processes market records to assist traders in optimizing financial portfolios and mitigating transactional risk.",
    techStack: ["Python", "Flask", "Pandas", "MySQL", "Machine Learning"],
    highlights: [
      "Real-time transactional data parsing & portfolio analytics",
      "Machine learning models for pattern recognition & risk mitigation",
      "MySQL backend for high-throughput financial record storage",
      "Pandas-driven predictive performance metrics"
    ],
    githubUrl: "https://github.com/anvith-kumar2006/Trade-Analysis-Platform",
    liveUrl: "https://github.com/anvith-kumar2006/Trade-Analysis-Platform"
  },
  {
    id: "student-performance",
    title: "AI-Based Student Performance Analysis System",
    subtitle: "EdTech Predictive Risk & Analytics Platform",
    category: "edtech",
    featured: true,
    description: "Educational technology solution built to analyze student performance metrics and predict potential academic backlog risks.",
    detailedDescription: "By classifying student data into 'Good', 'Warning', and 'At Risk' profiles, the application generates interactive dashboard visualizations using Chart.js to enable educators to take early, targeted interventions.",
    techStack: ["Python", "Flask", "MySQL", "Pandas", "Chart.js"],
    highlights: [
      "Automated student profile classification ('Good', 'Warning', 'At Risk')",
      "Interactive Chart.js visualizations for grade trends & attendance",
      "Early warning alerts for potential academic backlogs",
      "Role-tailored dashboards for educators & institution admins"
    ],
    githubUrl: "https://github.com/anvith-kumar2006/AI-Student-Performance-Analysis",
    liveUrl: "https://github.com/anvith-kumar2006/AI-Student-Performance-Analysis"
  },
  {
    id: "studio-management",
    title: "Studio Management System (SMS)",
    subtitle: "7-Step Photography Workflow Automation Platform",
    category: "web",
    featured: true,
    hasSystemSpec: true,
    description: "A complete, role-based workflow platform connecting clients, photographers, and editors for photography studio operations.",
    detailedDescription: "Automates the full production cycle—from secure OTP-based login to assignment booking, image selection, color grading editing, and album delivery tracking with strict RBAC access control.",
    techStack: ["Flask", "MySQL", "HTML5", "CSS3", "JavaScript", "RBAC", "OTP Auth"],
    highlights: [
      "7-Step Pipeline: Booking -> Assignment -> Raw Upload -> Selection -> Editing -> Approval -> Delivery",
      "Four Role-Based Dashboards: Customer, Cameraman, Editor, and Studio Admin",
      "OTP-based authentication & encrypted session authorization",
      "Isolated booking directory structure & compressed preview thumbnails"
    ],
    githubUrl: "https://github.com/anvith-kumar2006/Studio-Management-System",
    liveUrl: "https://github.com/anvith-kumar2006/Studio-Management-System"
  },
  
];

const SKILLS_DATA: Skill[] = [
  // Software & Web
  { name: "Python", category: "software", proficiency: 92, iconName: "Terminal", tag: "Primary Language" },
  { name: "C Language", category: "software", proficiency: 80, iconName: "Code", tag: "System Programming" },
  { name: "SQL", category: "software", proficiency: 85, iconName: "Database", tag: "Database Querying" },
  { name: "Flask Framework", category: "software", proficiency: 88, iconName: "Server", tag: "Web Backend" },
  { name: "Pandas & Data Analysis", category: "software", proficiency: 84, iconName: "BarChart", tag: "Data Pipelines" },
  { name: "HTML5 / CSS3 / JavaScript", category: "software", proficiency: 90, iconName: "Laptop", tag: "Frontend Stack" },
  { name: "Chart.js Visualizations", category: "software", proficiency: 82, iconName: "TrendingUp", tag: "Analytics UI" },
  
  // Hardware & Logic Design
  { name: "Verilog HDL", category: "hardware", proficiency: 86, iconName: "Cpu", tag: "Hardware Description" },
  { name: "Embedded Systems", category: "hardware", proficiency: 82, iconName: "Zap", tag: "Microcontrollers" },
  { name: "Digital Logic Design", category: "hardware", proficiency: 88, iconName: "Sliders", tag: "Logic Synthesis" },
  { name: "Circuit Troubleshooting", category: "hardware", proficiency: 85, iconName: "Workflow", tag: "Hardware Debug" },
  
  // Databases & Tools
  { name: "MySQL", category: "tools", proficiency: 88, iconName: "Database", tag: "Relational DB" },
  { name: "Git & GitHub", category: "tools", proficiency: 90, iconName: "Github", tag: "Version Control" },
  { name: "VS Code", category: "tools", proficiency: 95, iconName: "Code", tag: "IDE Environment" },
  { name: "Jupyter Notebook", category: "tools", proficiency: 85, iconName: "BookOpen", tag: "Data Research" },
  { name: "MySQL Workbench", category: "tools", proficiency: 86, iconName: "Database", tag: "Schema Design" },
  
  // Core Competencies
  { name: "Full-Stack Web Dev", category: "core", proficiency: 90, iconName: "Layers", tag: "Architectural Scope" },
  { name: "Data Analytics & ML", category: "core", proficiency: 82, iconName: "Sparkles", tag: "Intelligent Systems" },
  { name: "Cybersecurity & OTP", category: "core", proficiency: 80, iconName: "Shield", tag: "System Auth" },
  { name: "Database Schema Design", category: "core", proficiency: 86, iconName: "Database", tag: "Data Modeling" },
  { name: "Team Collaboration", category: "core", proficiency: 92, iconName: "UserCheck", tag: "Soft Skills" },
  { name: "Creative Problem Solving", category: "core", proficiency: 94, iconName: "CheckCircle2", tag: "Analytical Mind" }
];

const EDUCATION_DATA: Education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Electronics & Communication Engineering (ECE)",
  institution: "VTU Affiliated College, Karnataka, India",
  period: "2024 – 2028",
  gpa: "6.5 / 10 (Current CGPA)",
  status: "In Progress (Undergraduate)",
  highlights: [
    "Comprehensive study of Digital Signal Processing, Verilog HDL, and Embedded System Architectures.",
    "Active contributor to software and hardware projects combining microcontrollers with Flask web backends.",
    "Strong foundation in Data Structures, Relational Database Management (MySQL), and Object-Oriented Programming."
  ]
};

const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "infosys-c-programming",
    title: "Programming in C",
    issuer: "Infosys Springguard",
    organization: "Infosys",
    status: "Completed",
    issueDate: "May 21, 2025",
    verifyUrl: "https://verify.owningspan.com",
    verifyText: "Verify via QR Code",
    description: "Successfully completed the comprehensive course on Programming in C, covering fundamental programming concepts, memory management, and practical coding skills.",
    skills: ["C Programming", "Data Structures", "Algorithms", "Problem Solving"],
    category: "software",
    certImage: "/c-programming.jpeg"
  },
  {
    id: "infosys-digital-electronics",
    title: "Digital Electronics - Online Digital Electronics Courses",
    issuer: "Infosys Springguard",
    organization: "Infosys",
    status: "Completed",
    issueDate: "September 6, 2025",
    verifyUrl: "https://verify.owningspan.com",
    verifyText: "Verify via QR Code",
    description: "Successfully completed the comprehensive course on Digital Electronics, covering logic gates, combinational circuits, sequential circuits, and practical hardware design principles.",
    skills: ["Digital Electronics", "Logic Circuits", "HDL Fundamentals", "Hardware Design"],
    category: "hardware",
    certImage: "/digital-electronics.jpeg"
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Issued via Forage)",
    organization: "Deloitte",
    status: "Completed",
    issueDate: "March 23, 2026",
    certId: "69638f204b3bff447af55ac3",
    verifyUrl: "https://www.theforage.com",
    verifyText: "Enrolment Code: uz3JzLWecagWFpH7D",
    description: "Completed practical job simulation tasks in data analysis, data storytelling, and forensic technology under Deloitte Human Resources Leadership.",
    skills: ["Data Analysis", "Forensic Technology", "Business Intelligence", "Analytics Reporting"],
    category: "analytics"
  },
  {
    id: "ibm-ai-literacy",
    title: "AI Literacy Certification",
    issuer: "IBM SkillsBuild",
    organization: "IBM",
    status: "Completed",
    issueDate: "December 20, 2025",
    verifyUrl: "https://www.credly.com/go/LUj5eH0R",
    verifyText: "Verify Credential on Credly",
    description: "Official IBM SkillsBuild digital credential verifying artificial intelligence literacy, machine learning concepts, ethical AI frameworks, and generative AI fundamentals.",
    skills: ["AI Literacy", "Machine Learning", "Generative AI", "AI Ethics", "Data Insights"],
    category: "ai"
  },
  {
    id: "sap-course-certificate",
    title: "SAP Code Unnati Program Certification",
    issuer: "SAP & Edunet Foundation",
    organization: "SAP",
    status: "Completed",
    issueDate: "2025 – 2026",
    certId: "CU26_41081",
    verifyUrl: "/certificate.pdf",
    verifyText: "Open Certificate PDF",
    description: "Successfully completed the Code Unnati Foundation Course (a CSR initiative of SAP, implemented by Edunet Foundation), covering Python, Object-Oriented Programming, Data Analytics, DBMS, Data Structures & Algorithms, and Competitive Coding.",
    skills: ["Python", "OOP", "Data Analytics", "DBMS", "DSA", "Competitive Coding"],
    category: "software",
    certFile: "/certificate.pdf"
  }
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<SkillCategory | 'all'>('all');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<ProjectCategory>('all');
  const [isPRDModalOpen, setIsPRDModalOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedCertCategory, setSelectedCertCategory] = useState<'all' | 'ai' | 'software' | 'hardware' | 'analytics'>('all');
  const [prdTab, setPrdTab] = useState<'overview' | 'roles' | 'pipeline' | 'schema' | 'api'>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Handle scroll detection for active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'architecture', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = selectedProjectCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedProjectCategory);

  const filteredSkills = selectedSkillCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === selectedSkillCategory);

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/10">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg">
                  AK
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
                Anvith Kumar
              </span>
              <span className="block text-[10px] text-cyan-400/90 font-mono uppercase tracking-wider">
                ECE & Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-950/40 hover:border-cyan-400 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === item.id ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => { setIsResumeModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-slate-800 text-cyan-400 border border-slate-700"
              >
                View Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Bio */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Domain Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  ECE Undergraduate (2024–2028)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  Hardware & Verilog HDL
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold">
                  <Code className="w-3.5 h-3.5" />
                  Python & Web Full-Stack
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
                Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Hardware</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Software</span>:
                <br />
                Building Intelligent Systems for the Real World.
              </h1>

              {/* Subheadline Paragraph */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {PROFILE_DATA.tagline}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2 group"
                >
                  <span>Explore Featured Work</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setIsPRDModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:bg-slate-800 hover:border-cyan-400 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>Studio SMS Architecture Spec</span>
                </button>

                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Resume</span>
                </button>
              </div>

              {/* Social Quick Links */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400 text-xs font-mono">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github/anvith-kumar2006</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right Column: Profile Image & Floating Cards */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Decorative Frame */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

                {/* Main Image Container */}
                <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl p-3">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                    <img
                      src={PROFILE_DATA.image}
                      alt="Anvith Kumar"
                      className="w-full h-full object-cover object-top filter contrast-105 saturate-105 hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                    
                    {/* Floating Info Pill inside Image */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-100">Anvith Kumar</p>
                          <p className="text-[11px] text-cyan-400 font-mono">B.E. ECE • VTU Karnataka</p>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                          CGPA: 6.5
                        </span>
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            {[
              { label: "Core Projects", value: "4+ Systems", sub: "AI, Web & Verilog", icon: Layers, color: "text-cyan-400" },
              { label: "Hardware Stack", value: "Verilog HDL", sub: "Digital Logic & Embedded", icon: Cpu, color: "text-indigo-400" },
              { label: "Software Stack", value: "Python & Flask", sub: "Pandas, MySQL & AI", icon: Server, color: "text-blue-400" },
              { label: "Education Status", value: "B.E. ECE", sub: "2024–2028 (VTU)", icon: GraduationCap, color: "text-emerald-400" }
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-lg bg-slate-900 border border-slate-800 ${stat.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-slate-100 block tracking-tight">{stat.value}</span>
                    <span className="text-xs text-slate-400 font-medium block">{stat.label}</span>
                    <span className="text-[10px] text-slate-500 font-mono block mt-0.5">{stat.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-20 bg-slate-900/40 border-y border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Candidate Profile
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight sm:text-4xl">
              About Anvith Kumar
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Bio Card */}
            <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Engineering & Software Vision</h3>
                    <p className="text-xs text-slate-400 font-mono">Electronics & Communication Engineering (2024–2028)</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  I am an Electronics and Communication Engineering undergraduate pursuing my degree in Karnataka, India. With a deep curiosity for both software architectures and hardware systems, my technical journey centers around building full-stack web applications, designing embedded logic, and extracting actionable insights from data.
                </p>

              </div>

              {/* Core Philosophy Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Cpu className="w-4 h-4 text-cyan-400 mb-1" />
                  <p className="text-xs font-bold text-slate-200">Hardware Logic</p>
                  <p className="text-[11px] text-slate-400 font-mono">Verilog & Circuit Design</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Server className="w-4 h-4 text-blue-400 mb-1" />
                  <p className="text-xs font-bold text-slate-200">Full-Stack Web</p>
                  <p className="text-[11px] text-slate-400 font-mono">Python, Flask & MySQL</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Sparkles className="w-4 h-4 text-indigo-400 mb-1" />
                  <p className="text-xs font-bold text-slate-200">AI Platforms</p>
                  <p className="text-[11px] text-slate-400 font-mono">ML & Predictive Models</p>
                </div>
              </div>
            </div>

            {/* Right Academic & Contact Info Card */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* Academic Overview Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Academic Profile</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    Active BE Student
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-slate-400 text-xs block font-mono">DEGREE & BRANCH</span>
                    <span className="font-semibold text-slate-200 block">B.E. Electronics & Communication Engineering</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-mono">AFFILIATION</span>
                    <span className="font-semibold text-slate-200 block">VTU Affiliated College, Karnataka, India</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-mono">ACADEMIC PERIOD</span>
                      <span className="font-mono font-bold text-cyan-400 text-xs">2024 – 2028</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-mono">CURRENT CGPA</span>
                      <span className="font-mono font-bold text-emerald-400 text-xs">6.5 / 10.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Reach Card */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Direct Contact & Credentials
                </h4>
                
                <div className="space-y-2.5 text-xs font-mono">
                  <a href={`mailto:${PROFILE_DATA.email}`} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{PROFILE_DATA.email}</span>
                  </a>
                  <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <Github className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">github.com/anvith-kumar2006</span>
                  </a>
                  <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">linkedin.com/in/anvith-kumar-22470a333</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SKILLS GRID SECTION ================= */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Technical Stack & Hardware Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight sm:text-4xl">
              Skills & Expertise Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ranging from low-level Verilog hardware logic synthesis to full-stack Python Flask micro-frameworks and machine learning algorithms.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'software', label: 'Software & Web Dev' },
              { id: 'hardware', label: 'Hardware & Verilog' },
              { id: 'tools', label: 'Databases & Tools' },
              { id: 'core', label: 'Core Competencies' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedSkillCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedSkillCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => {
              // Icon selector helper
              const renderIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
                  case 'Terminal': return <Terminal className="w-5 h-5 text-cyan-400" />;
                  case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
                  case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
                  case 'BarChart': return <BarChart className="w-5 h-5 text-teal-400" />;
                  case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
                  case 'Shield': return <Shield className="w-5 h-5 text-purple-400" />;
                  case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
                  default: return <Workflow className="w-5 h-5 text-slate-400" />;
                }
              };

              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                        {renderIcon(skill.iconName)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-100 text-sm group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {skill.tag}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="uppercase text-slate-400">{skill.category}</span>
                    <span className="text-emerald-400 font-semibold">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section id="projects" className="py-20 bg-slate-900/30 border-y border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Software & Hardware Engineering Showcase
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From legal AI platforms and financial trading engines to photo studio workflows and hardware logic implementations.
            </p>
          </div>

          {/* Project Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Projects (5)' },
              { id: 'ai', label: 'AI & Analytics' },
              { id: 'web', label: 'Full-Stack Web' },
              { id: 'edtech', label: 'EdTech & Predictive' },
              { id: 'hardware', label: 'Hardware & Verilog' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedProjectCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedProjectCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
              >
                <div className="space-y-4">
                  
                  {/* Category & Status Header */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-mono font-semibold border border-cyan-500/20 uppercase">
                      {project.category === 'ai' && 'AI & Legal NLP'}
                      {project.category === 'web' && 'Full-Stack Workflow'}
                      {project.category === 'edtech' && 'EdTech Analytics'}
                      {project.category === 'hardware' && 'Verilog & Embedded'}
                    </span>

                    {project.hasSystemSpec && (
                      <button
                        onClick={() => setIsPRDModalOpen(true)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors animate-pulse"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>PRD/TRD Architecture</span>
                      </button>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono mt-0.5">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.detailedDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code Repository</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>

                  {project.hasSystemSpec ? (
                    <button
                      onClick={() => setIsPRDModalOpen(true)}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <span>Explore SMS Spec</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:underline font-mono flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Studio Management System Callout Banner */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-2xl border border-indigo-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold border border-indigo-500/40">
                Deep-Dive Case Study Available
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                Studio Management System (SMS) PRD & TRD Architecture
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
                Explore the complete Product Requirements Document (PRD) and Technical Requirements Document (TRD) covering the 7-step photography production engine, role-based access control, and normalized MySQL ERD schema.
              </p>
            </div>

            <button
              onClick={() => setIsPRDModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-950 font-extrabold text-sm hover:from-indigo-400 hover:to-cyan-400 transition-all shadow-lg shadow-indigo-500/20 shrink-0 flex items-center gap-2"
            >
              <Workflow className="w-4 h-4" />
              <span>Launch PRD/TRD Viewer</span>
            </button>
          </div>

        </div>
      </section>

      {/* ================= EDUCATION & CERTIFICATIONS SECTION ================= */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Academic Background & Skill Training
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight sm:text-4xl">
              Education & Certifications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Undergraduate engineering studies combined with specialized industry training in embedded systems and data analytics.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Education Block */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 pb-3 border-b border-slate-800">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Degree & Academic Institution
              </h3>

              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4 relative">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{EDUCATION_DATA.period}</span>
                    <h4 className="text-lg font-bold text-slate-100">{EDUCATION_DATA.degree}</h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{EDUCATION_DATA.field}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                    CGPA: 6.5 / 10
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-medium">
                  {EDUCATION_DATA.institution}
                </p>

                <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                  {EDUCATION_DATA.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hardware vs Software Engineering Philosophy */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Dual Hardware & Software Competency
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Combining Electronics and Communication Engineering (ECE) with full-stack Python development allows me to bridge low-level Verilog hardware design with modern web application platforms and data science workflows.
                </p>
              </div>
            </div>

            {/* Certifications block placed below the education section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  Verified Certifications ({CERTIFICATIONS_DATA.length})
                </h3>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'all', label: 'All (5)' },
                    { id: 'ai', label: 'AI & Data' },
                    { id: 'software', label: 'Software' },
                    { id: 'hardware', label: 'Hardware' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCertCategory(cat.id as any)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        selectedCertCategory === cat.id
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS_DATA
                  .filter(c => selectedCertCategory === 'all' || c.category === selectedCertCategory || (selectedCertCategory === 'ai' && (c.category === 'ai' || c.category === 'analytics')))
                  .map((cert) => {
                    const orgColors = {
                      Deloitte: 'from-emerald-500/10 to-teal-500/5 text-emerald-400 border-emerald-500/30',
                      IBM: 'from-blue-500/10 to-indigo-500/5 text-blue-400 border-blue-500/30',
                      Infosys: 'from-cyan-500/10 to-sky-500/5 text-cyan-400 border-cyan-500/30',
                      Edunet: 'from-amber-500/10 to-yellow-500/5 text-amber-400 border-amber-500/30',
                      Incanto: 'from-purple-500/10 to-violet-500/5 text-purple-400 border-purple-500/30',
                      SAP: 'from-orange-500/10 to-amber-500/5 text-orange-400 border-orange-500/30'
                    };

                    return (
                      <div
                        key={cert.id}
                        className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 shadow-lg group relative overflow-hidden"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border bg-gradient-to-r ${orgColors[cert.organization]}`}>
                                {cert.organization}
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                                  cert.status === 'Ongoing'
                                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                }`}
                              >
                                {cert.status} • {cert.issueDate}
                              </span>
                            </div>

                            <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors pt-1">
                              {cert.title}
                            </h4>
                            <p className="text-xs text-slate-400 font-mono">
                              {cert.issuer} {cert.institution ? `• ${cert.institution}` : ''}
                            </p>
                          </div>

                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all border border-slate-700/80 shrink-0"
                            title="Inspect Credential Details"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {cert.description}
                        </p>

                        {cert.certId && (
                          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span className="text-cyan-400/90">Cert ID: {cert.certId}</span>
                            <span className="text-slate-500 text-[10px]">Verified Credential</span>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 text-[10px] font-mono border border-slate-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="text-cyan-400 font-bold hover:underline flex items-center gap-1 text-[11px]"
                          >
                            <span>Inspect Certificate</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>

                          {cert.verifyUrl ? (
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] font-mono transition-colors"
                            >
                              <span>Verify Link</span>
                              <ExternalLink className="w-3 h-3 text-cyan-400" />
                            </a>
                          ) : (
                            <span className="text-slate-500 text-[10px] font-mono">Issued to Anvith Kumar</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-20 bg-slate-900/40 border-t border-slate-800/60 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Get in Touch
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight sm:text-4xl">
              Connect with Anvith
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Interested in software engineering roles, embedded systems projects, or technical collaboration? Reach out directly via email, GitHub, or LinkedIn!
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8 shadow-2xl">
            <h3 className="text-xl font-extrabold text-slate-100 text-center">Contact Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center gap-4 hover:border-cyan-500/40 transition-all group shadow-md"
              >
                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase mb-1">Email Address</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors break-all">
                    {PROFILE_DATA.email}
                  </span>
                </div>
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center gap-4 hover:border-indigo-500/40 transition-all group shadow-md"
              >
                <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase mb-1">GitHub Profile</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                    github.com/anvith-kumar2006
                  </span>
                </div>
              </a>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center gap-4 hover:border-blue-500/40 transition-all group shadow-md"
              >
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase mb-1">LinkedIn Network</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors break-all">
                    linkedin.com/in/anvith-kumar-22470a333
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Direct Action */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 uppercase">LOCATION:</span>
                <span className="text-slate-200 font-bold">{PROFILE_DATA.location}</span>
              </div>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 bg-slate-950 border-t border-slate-900 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
              AK
            </div>
            <span>© {new Date().getFullYear()} Anvith Kumar. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#top" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>Back to Top</span>
              <ChevronRight className="w-3 h-3 -rotate-90" />
            </a>
          </div>

        </div>
      </footer>

      {/* ================= STUDIO MANAGEMENT SYSTEM PRD & TRD INTERACTIVE MODAL ================= */}
      {isPRDModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-indigo-500/40 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Studio Management System (SMS) Specification</h3>
                  <p className="text-xs text-indigo-400 font-mono">Product & Technical Architecture Specification • Author: Anvith Kumar</p>
                </div>
              </div>

              <button
                onClick={() => setIsPRDModalOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="bg-slate-950/60 border-b border-slate-800 px-4 flex overflow-x-auto gap-2 text-xs font-semibold">
              {[
                { id: 'overview', label: '1. Executive Summary & Stack' },
                { id: 'roles', label: '2. User Roles (4 Personas)' },
                { id: 'pipeline', label: '3. 7-Step Workflow Pipeline' },
                { id: 'schema', label: '4. MySQL Database Schema' },
                { id: 'api', label: '5. API & Routing Spec' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setPrdTab(tab.id as any)}
                  className={`py-3 px-3 border-b-2 font-mono whitespace-nowrap transition-colors ${
                    prdTab === tab.id
                      ? 'border-indigo-400 text-indigo-400 font-bold bg-indigo-500/10'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
              
              {/* TAB 1: OVERVIEW */}
              {prdTab === 'overview' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-2">
                    <h4 className="font-bold text-slate-100 text-base">Executive Summary & Problem Statement</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Traditional photography studio operations suffer from fragmented communication, manual file sharing via physical hard drives or unstructured cloud links, and inefficient photo selection loops between customers and editors. SMS centralizes operations under a unified role-based MVC application.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold">CORE OBJECTIVES</span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        <li className="flex items-center gap-2">• Centralize clients, photographers, & editors</li>
                        <li className="flex items-center gap-2">• Automate 7-step digital album delivery</li>
                        <li className="flex items-center gap-2">• Secure OTP email verification & session RBAC</li>
                        <li className="flex items-center gap-2">• Accelerate selection turnaround times</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-xs font-mono text-indigo-400 font-bold">TARGET TECHNICAL STACK</span>
                      <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                        <li className="flex items-center gap-2"><Server className="w-3.5 h-3.5 text-cyan-400" /> Backend: Python 3.x & Flask Micro-framework</li>
                        <li className="flex items-center gap-2"><Database className="w-3.5 h-3.5 text-blue-400" /> Database: MySQL Relational Engine (SQLAlchemy)</li>
                        <li className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-purple-400" /> Auth: Flask-Session + Werkzeug Bcrypt Hashing</li>
                        <li className="flex items-center gap-2"><Laptop className="w-3.5 h-3.5 text-emerald-400" /> Frontend: HTML5, Semantic CSS3 & Vanilla JS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: USER ROLES */}
              {prdTab === 'roles' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400 font-mono">Four distinct user roles with custom RBAC access control:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { role: 'Customer (Client)', icon: UserCheck, actions: 'Book event slots, review raw proofs, select favorite photos for editing, approve final deliverables, download digital album.' },
                      { role: 'Cameraman (Photographer)', icon: ImageIcon, actions: 'View assigned shoots/bookings, upload raw captured images to client event folder, track assignment progress.' },
                      { role: 'Editor (Asset Artist)', icon: Sliders, actions: 'Retrieve customer-selected raw images, upload color-graded versions, update post-production status, deliver final assets.' },
                      { role: 'Admin (Studio Owner)', icon: Shield, actions: 'Manage bookings, map cameramen/editors to specific client jobs, oversee system-wide workflows, track studio progress.' }
                    ].map((r, i) => {
                      const IconC = r.icon;
                      return (
                        <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-slate-100">
                            <IconC className="w-4 h-4 text-cyan-400" />
                            <span>{r.role}</span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">{r.actions}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: PIPELINE */}
              {prdTab === 'pipeline' && (
                <div className="space-y-6">
                  <p className="text-xs text-slate-400 font-mono">The 7-Step Production Workflow Engine:</p>

                  <div className="space-y-3">
                    {[
                      { step: 1, name: "Booking Stage", role: "Customer / Admin", desc: "Customer creates booking slot (date, event, location). Status: Pending -> Scheduled." },
                      { step: 2, name: "Assignment Stage", role: "Studio Admin", desc: "Admin maps specific Cameraman and Editor to the scheduled booking." },
                      { step: 3, name: "Raw Upload", role: "Cameraman", desc: "Photographer uploads raw captured media to dedicated client project folder. Status: Raw Uploaded." },
                      { step: 4, name: "Client Selection", role: "Customer", desc: "Client logs in, reviews proof thumbnails, stars photos to edit. Status: Selection Locked." },
                      { step: 5, name: "Editing & Post-Production", role: "Editor", desc: "Editor downloads selected raw photos, color grades, and uploads final assets. Status: Review Ready." },
                      { step: 6, name: "Client Approval Loop", role: "Customer", desc: "Client reviews high-res edited proofs and grants final approval." },
                      { step: 7, name: "Final Album Delivery", role: "System", desc: "System generates secure, downloadable digital album link. Status: Delivered & Completed." }
                    ].map((s) => (
                      <div key={s.step} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          0{s.step}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-100 text-xs">{s.name}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">{s.role}</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SCHEMA */}
              {prdTab === 'schema' && (
                <div className="space-y-4 font-mono">
                  <p className="text-xs text-slate-400">MySQL Database Relational Schema Definitions:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-cyan-400 font-bold">TABLE: users</span>
                      <pre className="text-[11px] text-slate-300 overflow-x-auto p-2 bg-slate-900 rounded">
{`id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
role ENUM('Admin','Customer','Cameraman','Editor'),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-blue-400 font-bold">TABLE: bookings</span>
                      <pre className="text-[11px] text-slate-300 overflow-x-auto p-2 bg-slate-900 rounded">
{`id INT AUTO_INCREMENT PRIMARY KEY,
client_id INT NOT NULL (FK -> users.id),
event_date DATE NOT NULL,
location VARCHAR(255) NOT NULL,
status ENUM('Pending','Scheduled','Raw Uploaded',
  'Selection Locked','Editing','Completed')`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-indigo-400 font-bold">TABLE: assignments</span>
                      <pre className="text-[11px] text-slate-300 overflow-x-auto p-2 bg-slate-900 rounded">
{`id INT AUTO_INCREMENT PRIMARY KEY,
booking_id INT UNIQUE (FK -> bookings.id),
cameraman_id INT (FK -> users.id),
editor_id INT (FK -> users.id),
assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-emerald-400 font-bold">TABLE: media</span>
                      <pre className="text-[11px] text-slate-300 overflow-x-auto p-2 bg-slate-900 rounded">
{`id INT AUTO_INCREMENT PRIMARY KEY,
booking_id INT (FK -> bookings.id),
uploader_id INT (FK -> users.id),
file_path VARCHAR(500) NOT NULL,
file_type ENUM('Raw', 'Edited'),
selection_status ENUM('Unselected','Selected')`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: API */}
              {prdTab === 'api' && (
                <div className="space-y-4 font-mono text-xs">
                  <p className="text-slate-400">Key API Routing & Authentication Specifications:</p>
                  
                  <div className="space-y-2">
                    {[
                      { method: 'POST', endpoint: '/login', desc: 'Validates credentials & sets server-side session token.' },
                      { method: 'POST', endpoint: '/register', desc: 'Registers new customer; triggers OTP email sequence.' },
                      { method: 'POST', endpoint: '/verify-otp', desc: 'Checks user OTP input against temporary server variable.' },
                      { method: 'POST', endpoint: '/bookings/create', desc: 'Customers create a raw booking slot request.' },
                      { method: 'POST', endpoint: '/bookings/assign', desc: 'Admins map cameraman_id and editor_id to booking_id.' },
                      { method: 'POST', endpoint: '/media/upload/<booking_id>', desc: 'Cameramen/editors upload raw or edited binary assets.' },
                      { method: 'POST', endpoint: '/media/select', desc: 'Clients POST selected asset IDs array to lock proofs.' },
                      { method: 'POST', endpoint: '/media/approve/<booking_id>', desc: 'Clients lock final edited assets, setting status to Completed.' }
                    ].map((api, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">{api.method}</span>
                          <span className="text-slate-200 font-bold">{api.endpoint}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-sans">{api.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">SMS Architecture • Designed by Anvith Kumar</span>
              <button
                onClick={() => setIsPRDModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
              >
                Close Specification
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================= RESUME VIEWER MODAL ================= */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-slate-100 text-sm">Anvith Kumar - Resume Overview</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:text-white font-medium text-xs flex items-center gap-1.5 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Screen</span>
                </a>
                <a
                  href="/resume.jpeg"
                  download="Anvith_Kumar_Resume.jpeg"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto bg-slate-950 flex-1 min-h-0 flex justify-center items-start">
              <img
                src={PROFILE_DATA.resumeImage}
                alt="Anvith Kumar Resume"
                className="w-auto max-w-full h-auto object-contain rounded-lg shadow-xl border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= CERTIFICATE INSPECTOR MODAL ================= */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-100 text-base">{selectedCert.title}</h3>
                  <p className="text-xs text-cyan-400 font-mono">Issued by {selectedCert.issuer}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Digital Certificate Layout */}
            <div className="p-6 overflow-y-auto space-y-6 bg-slate-950">
              
              {/* Certificate Canvas Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-5 text-center relative overflow-hidden shadow-inner">
                
                {/* Show PDF viewer for PDF certificates */}
                {selectedCert.certFile && selectedCert.certFile.endsWith('.pdf') ? (
                  <embed
                    src={selectedCert.certFile}
                    type="application/pdf"
                    className="w-full rounded-xl"
                    style={{ height: '600px' }}
                  />
                ) : selectedCert.certImage ? (
                  <img
                    src={selectedCert.certImage}
                    alt={selectedCert.title}
                    className="w-full h-auto rounded-xl object-contain max-h-[500px]"
                  />
                ) : (
                  <div className="space-y-5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
                      Official Course Completion Certificate
                    </span>

                    <div className="space-y-1">
                      <p className="text-xs text-slate-400">This certificate is awarded to</p>
                      <h2 className="text-2xl font-black tracking-tight font-sans text-cyan-300">
                        ANVITH KUMAR
                      </h2>
                      {selectedCert.institution && (
                        <p className="text-xs text-slate-400 font-mono pt-0.5">from {selectedCert.institution}</p>
                      )}
                    </div>

                    <div className="py-2 border-y border-slate-800/80 space-y-1">
                      <p className="text-xs text-slate-400">for successfully completing the course</p>
                      <h4 className="text-lg font-bold text-slate-100">{selectedCert.title}</h4>
                      <p className="text-xs text-slate-400 font-mono">Issued: {selectedCert.issueDate}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-1">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 space-y-1">
                        <span className="text-[10px] text-slate-400 font-mono uppercase block">Issuing Authority</span>
                        <span className="text-xs font-bold text-slate-200 block">{selectedCert.issuer}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 space-y-1">
                        <span className="text-[10px] text-slate-400 font-mono uppercase block">Credential Status</span>
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          {selectedCert.status} Verified
                        </span>
                      </div>

                      {selectedCert.certId && (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 space-y-1 sm:col-span-2 font-mono">
                          <span className="text-[10px] text-slate-400 uppercase block">Certificate ID / Ref</span>
                          <span className="text-xs font-bold text-cyan-400">{selectedCert.certId}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Skills & Competencies Verified */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Verified Skills & Competencies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
                {selectedCert.description}
              </p>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Official Certification Record</span>

              <div className="flex items-center gap-3">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
                  >
                    <span>{selectedCert.verifyText || 'Verify Credential'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
