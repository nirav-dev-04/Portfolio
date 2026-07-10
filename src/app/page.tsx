"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Database, 
  Cpu, 
  Server, 
  Layers, 
  BookOpen, 
  ShieldAlert, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink 
} from "lucide-react";
import RequestLifecycle from "@/components/RequestLifecycle";
import AboutTerminal from "@/components/AboutTerminal";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("niravmathukiya8@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Scroll Reveal Animations
  const FadeInWhenInView = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: reducedMotion ? 0 : 30 }
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    );
  };

  const skillsData = [
    {
      category: "Languages",
      icon: <Cpu size={16} className="text-blueprint-amber" />,
      skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Backend Frameworks",
      icon: <Server size={16} className="text-blueprint-amber" />,
      skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Data & Caching",
      icon: <Database size={16} className="text-blueprint-amber" />,
      skills: ["MySQL", "PostgreSQL", "Hibernate ORM", "Redis"]
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Layers size={16} className="text-blueprint-amber" />,
      skills: ["AWS (S3, Lambda, MediaConvert, CloudFront)", "Docker", "CI/CD"]
    },
    {
      category: "Frontend Support",
      icon: <BookOpen size={16} className="text-blueprint-amber" />,
      skills: ["React.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Core Foundations",
      icon: <ShieldAlert size={16} className="text-blueprint-amber" />,
      skills: ["OOP", "Data Structures & Algorithms", "SOLID Principles", "MVC"]
    },
    {
      category: "Testing & Tooling",
      icon: <Cpu size={16} className="text-blueprint-amber" />,
      skills: ["JUnit 5", "Postman", "Git", "Maven", "IntelliJ IDEA"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-32 relative">
      
      {/* Decorative connecting line running vertically down the background */}
      <div className="absolute left-[39px] top-40 bottom-40 w-[1px] bg-gradient-to-b from-blueprint-border/60 via-blueprint-border/10 to-blueprint-border/60 hidden xl:block pointer-events-none" />

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col justify-center relative pt-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-6 space-y-6">
            {/* System label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blueprint-surface border border-blueprint-border font-mono text-[10px] text-blueprint-amber tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blueprint-amber animate-ping" />
              // 00 SYSTEM_INITIALIZED
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-blueprint-text-secondary">
                JAVA BACKEND DEVELOPER
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-blueprint-text-primary">
                Nirav Mathukiya
              </h1>
            </div>

            <p className="text-base md:text-lg text-blueprint-text-secondary leading-relaxed max-w-xl">
              I design backend systems that stay fast under load &mdash; caching layers, 
              payment pipelines, and cloud infrastructure that doesn&apos;t fall over.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#work"
                className="px-6 py-3 font-display font-semibold uppercase tracking-wider text-xs text-blueprint-bg bg-blueprint-amber hover:bg-blueprint-amber/90 rounded border border-blueprint-amber transition-all shadow-[0_0_15px_rgba(232,163,61,0.25)] hover:shadow-[0_0_20px_rgba(232,163,61,0.45)]"
              >
                View Case Studies
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-display font-semibold uppercase tracking-wider text-xs text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4 text-blueprint-text-secondary">
              <a
                href="https://github.com/nirav-dev-04"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blueprint-amber transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/nirav-mathukiya-47b1752b3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blueprint-amber transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:niravmathukiya8@gmail.com"
                className="hover:text-blueprint-amber transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+918866582133"
                className="hover:text-blueprint-amber transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Signature Animated Flow */}
          <div className="xl:col-span-6 w-full">
            <RequestLifecycle />
          </div>
        </div>
      </section>

      {/* WORK / PROJECTS SECTION */}
      <section id="work" className="scroll-mt-28 space-y-12">
        <FadeInWhenInView>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-blueprint-amber tracking-widest uppercase">// 01 PROJECTS</div>
            <div className="flex-grow h-[1px] bg-blueprint-border/60" />
          </div>
          <h2 className="text-3xl font-display font-bold mt-2 tracking-tight">
            Flagship Engineering Systems
          </h2>
          <p className="text-sm text-blueprint-text-secondary max-w-xl mt-1">
            Real deployments and architectural deep-dives. Click each card to read the complete systems-engineering design decisions.
          </p>
        </FadeInWhenInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1: Coursify */}
          <FadeInWhenInView delay={0.1}>
            <div className="h-full bg-blueprint-surface border border-blueprint-border rounded p-6 flex flex-col justify-between transition-all duration-300 hover:border-blueprint-amber hover:shadow-[0_4px_20px_rgba(232,163,61,0.08)] hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-blueprint-teal uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blueprint-teal" />
                    Production Deploy
                  </span>
                  <Link href="/work/coursify" className="text-blueprint-text-secondary hover:text-blueprint-amber transition-colors" title="View Case Study">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
                
                <Link href="/work/coursify" className="group/title block">
                  <h3 className="text-xl font-display font-bold tracking-tight text-blueprint-text-primary group-hover/title:text-blueprint-amber transition-colors">
                    Coursify
                  </h3>
                </Link>
                
                <p className="text-xs text-blueprint-text-secondary mt-2 leading-relaxed">
                  EdTech video platform featuring secure Segmented HLS streaming, write-back caching for progress, and Razorpay idempotency.
                </p>
                
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {["Spring Boot", "Next.js", "Redis", "AWS Lambda", "S3"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-blueprint-bg border border-blueprint-border font-mono text-[9px] text-blueprint-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-blueprint-text-secondary">SYS_METRIC:</span>
                  <span className="text-blueprint-teal font-semibold">90% DB WRITE DECREASE</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono border-t border-blueprint-border/30 pt-3">
                  <a
                    href="https://github.com/nirav-dev-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-text-secondary hover:text-blueprint-amber flex items-center gap-1 transition-colors"
                  >
                    <Github size={12} />
                    Code
                  </a>
                  <a
                    href="https://coursify-learn.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-text-secondary hover:text-blueprint-amber flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                  <Link
                    href="/work/coursify"
                    className="text-blueprint-amber hover:underline ml-auto flex items-center gap-0.5"
                  >
                    Specs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </FadeInWhenInView>

          {/* Project 2: ExamShield */}
          <FadeInWhenInView delay={0.2}>
            <div className="h-full bg-blueprint-surface border border-blueprint-border rounded p-6 flex flex-col justify-between transition-all duration-300 hover:border-blueprint-amber hover:shadow-[0_4px_20px_rgba(232,163,61,0.08)] hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-blueprint-amber uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blueprint-amber" />
                    Final Year Project
                  </span>
                  <Link href="/work/examshield" className="text-blueprint-text-secondary hover:text-blueprint-amber transition-colors" title="View Case Study">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
                
                <Link href="/work/examshield" className="group/title block">
                  <h3 className="text-xl font-display font-bold tracking-tight text-blueprint-text-primary group-hover/title:text-blueprint-amber transition-colors">
                    ExamShield
                  </h3>
                </Link>
                
                <p className="text-xs text-blueprint-text-secondary mt-2 leading-relaxed">
                  Real-time academic proctoring pipeline utilizing WebSockets with STOMP, Flyway schema migrations, and Bucket4j rate limiting.
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {["Spring Boot", "WebSockets", "STOMP", "PostgreSQL", "Bucket4j"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-blueprint-bg border border-blueprint-border font-mono text-[9px] text-blueprint-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-blueprint-text-secondary">SYS_METRIC:</span>
                  <span className="text-blueprint-amber font-semibold">100MS LATENCY MAX</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono border-t border-blueprint-border/30 pt-3">
                  <a
                    href="https://github.com/nirav-dev-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-text-secondary hover:text-blueprint-amber flex items-center gap-1 transition-colors"
                  >
                    <Github size={12} />
                    Code
                  </a>
                  <Link
                    href="/work/examshield"
                    className="text-blueprint-amber hover:underline ml-auto flex items-center gap-0.5"
                  >
                    Specs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </FadeInWhenInView>

          {/* Project 3: Hostel Management */}
          <FadeInWhenInView delay={0.3}>
            <div className="h-full bg-blueprint-surface border border-blueprint-border rounded p-6 flex flex-col justify-between transition-all duration-300 hover:border-blueprint-amber hover:shadow-[0_4px_20px_rgba(232,163,61,0.08)] hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-blueprint-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blueprint-text-secondary/50" />
                    Administrative System
                  </span>
                  <Link href="/work/hostel-management" className="text-blueprint-text-secondary hover:text-blueprint-amber transition-colors" title="View Case Study">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
                
                <Link href="/work/hostel-management" className="group/title block">
                  <h3 className="text-xl font-display font-bold tracking-tight text-blueprint-text-primary group-hover/title:text-blueprint-amber transition-colors">
                    Smart Hostel Management
                  </h3>
                </Link>
                
                <p className="text-xs text-blueprint-text-secondary mt-2 leading-relaxed">
                  Role-based multi-tier portal (Students, Rectors, Admins) secured with Spring Security, with document storage and multi-stage Docker.
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {["Spring Security", "React/Vite", "Docker", "PostgreSQL", "Cloudinary"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-blueprint-bg border border-blueprint-border font-mono text-[9px] text-blueprint-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-blueprint-text-secondary">SYS_METRIC:</span>
                  <span className="text-blueprint-text-primary font-semibold">ROLE-SECURED API</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono border-t border-blueprint-border/30 pt-3">
                  <a
                    href="https://github.com/nirav-dev-04/smart-hostel-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-text-secondary hover:text-blueprint-amber flex items-center gap-1 transition-colors"
                  >
                    <Github size={12} />
                    Code (BE)
                  </a>
                  <a
                    href="https://github.com/nirav-dev-04/HOSTEL-MANAGMENT---FRONTEND"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-text-secondary hover:text-blueprint-amber flex items-center gap-1 transition-colors"
                  >
                    <Github size={12} />
                    Code (FE)
                  </a>
                  <a
                    href="https://hostel-managment-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-text-secondary hover:text-blueprint-amber flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                  <Link
                    href="/work/hostel-management"
                    className="text-blueprint-amber hover:underline ml-auto flex items-center gap-0.5"
                  >
                    Specs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </FadeInWhenInView>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-mt-28 space-y-12">
        <FadeInWhenInView>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-blueprint-amber tracking-widest uppercase">// 02 SKILLS</div>
            <div className="flex-grow h-[1px] bg-blueprint-border/60" />
          </div>
          <h2 className="text-3xl font-display font-bold mt-2 tracking-tight">
            System Stack & Capabilities
          </h2>
          <p className="text-sm text-blueprint-text-secondary max-w-xl mt-1">
            Backend-focused hierarchy resembling service deployment components, avoiding generic badge walls.
          </p>
        </FadeInWhenInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, index) => (
            <FadeInWhenInView key={categoryGroup.category} delay={index * 0.05}>
              <div className="bg-blueprint-surface border border-blueprint-border rounded p-6 h-full relative overflow-hidden group hover:border-blueprint-amber hover:shadow-[0_4px_20px_rgba(232,163,61,0.04)] transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blueprint-amber/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold text-blueprint-text-primary group-hover:text-blueprint-amber border-b border-blueprint-border/60 pb-2 transition-colors">
                  {categoryGroup.icon}
                  <span>{categoryGroup.category.toUpperCase()}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2.5 py-1 rounded bg-[#0A0D14] border border-blueprint-border font-mono text-[11px] text-blueprint-text-secondary hover:text-blueprint-amber hover:border-blueprint-amber/55 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInWhenInView>
          ))}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="scroll-mt-28 space-y-12">
        <FadeInWhenInView>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-blueprint-amber tracking-widest uppercase">// 03 CERTIFICATES</div>
            <div className="flex-grow h-[1px] bg-blueprint-border/60" />
          </div>
          <h2 className="text-3xl font-display font-bold mt-2 tracking-tight">
            Verified Credentials & Achievements
          </h2>
          <p className="text-sm text-blueprint-text-secondary max-w-xl mt-1">
            Academic certifications, internships, and technical workshop accomplishments.
          </p>
        </FadeInWhenInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate 1: Codec Technologies */}
          <FadeInWhenInView delay={0.05}>
            <div className="bg-blueprint-surface border border-blueprint-border rounded p-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-blueprint-amber transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-blueprint-teal/15 border border-blueprint-teal/30 text-blueprint-teal">
                    INTERNSHIP
                  </span>
                  <span className="font-mono text-[10px] text-blueprint-text-secondary">May - Jun 2026</span>
                </div>
                <h3 className="text-base font-display font-bold text-blueprint-text-primary group-hover:text-blueprint-amber transition-colors">
                  Java Developer Intern
                </h3>
                <p className="text-xs text-blueprint-text-secondary mt-1">
                  Codec Technologies Pvt. Ltd.
                </p>
                <p className="text-[11px] text-blueprint-text-secondary/70 mt-3 leading-relaxed">
                  Completed a 1-Month AICTE & ACTE approved internship program working on core Java development, backend logic, and API architecture integrations.
                </p>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex justify-between items-center">
                <span className="font-mono text-[9px] text-blueprint-text-secondary">VERIFIED CREDENTIAL</span>
                <a
                  href="/internship-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-blueprint-amber hover:underline"
                >
                  View PDF <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </FadeInWhenInView>

          {/* Certificate 2: NPTEL IIT Madras */}
          <FadeInWhenInView delay={0.1}>
            <div className="bg-blueprint-surface border border-blueprint-border rounded p-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-blueprint-amber transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-blueprint-amber/15 border border-blueprint-amber/30 text-blueprint-amber">
                    ELITE CERTIFICATION
                  </span>
                  <span className="font-mono text-[10px] text-blueprint-text-secondary">Jan - Feb 2026</span>
                </div>
                <h3 className="text-base font-display font-bold text-blueprint-text-primary group-hover:text-blueprint-amber transition-colors">
                  Python for Data Science
                </h3>
                <p className="text-xs text-blueprint-text-secondary mt-1">
                  NPTEL (IIT Madras & Swayam)
                </p>
                <p className="text-[11px] text-blueprint-text-secondary/70 mt-3 leading-relaxed">
                  Earned an **Elite** certificate with a consolidated score of **75%** (Assignments: 23.67/25, Proctored Exam: 51/75). Funded by Ministry of Education, Gov. of India.
                </p>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex justify-between items-center">
                <span className="font-mono text-[9px] text-blueprint-teal font-semibold">SCORE: 75% [ELITE]</span>
                <a
                  href="/nptel-python-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-blueprint-amber hover:underline"
                >
                  View PDF <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </FadeInWhenInView>

          {/* Certificate 3: ISRO Hackathon */}
          <FadeInWhenInView delay={0.15}>
            <div className="bg-blueprint-surface border border-blueprint-border rounded p-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-blueprint-amber transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-blueprint-text-secondary/20 border border-blueprint-border text-blueprint-text-secondary">
                    HACKATHON
                  </span>
                  <span className="font-mono text-[10px] text-blueprint-text-secondary">Aug 2025</span>
                </div>
                <h3 className="text-base font-display font-bold text-blueprint-text-primary group-hover:text-blueprint-amber transition-colors">
                  Bharatiya Antariksh Hackathon
                </h3>
                <p className="text-xs text-blueprint-text-secondary mt-1">
                  ISRO (Indian Space Research Organisation)
                </p>
                <p className="text-[11px] text-blueprint-text-secondary/70 mt-3 leading-relaxed">
                  Successfully submitted a space-innovation project idea for the **Bharatiya Antariksh Hackathon 2025**, addressing real-world space engineering and software challenges.
                </p>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex justify-between items-center">
                <span className="font-mono text-[9px] text-blueprint-text-secondary">IDEA CERTIFICATE</span>
                <span className="text-[11px] font-mono text-blueprint-text-secondary/60">Verified H2S</span>
              </div>
            </div>
          </FadeInWhenInView>

          {/* Certificate 4: Software Testing Workshop */}
          <FadeInWhenInView delay={0.2}>
            <div className="bg-blueprint-surface border border-blueprint-border rounded p-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-blueprint-amber transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-blueprint-text-secondary/20 border border-blueprint-border text-blueprint-text-secondary">
                    WORKSHOP
                  </span>
                  <span className="font-mono text-[10px] text-blueprint-text-secondary">Sep 5, 2025</span>
                </div>
                <h3 className="text-base font-display font-bold text-blueprint-text-primary group-hover:text-blueprint-amber transition-colors">
                  Software Testing Workshop
                </h3>
                <p className="text-xs text-blueprint-text-secondary mt-1">
                  LDRP-ITR & PerfectQA
                </p>
                <p className="text-[11px] text-blueprint-text-secondary/70 mt-3 leading-relaxed">
                  Participated in the One-Day Manual & Automation Software Testing Workshop organized by the Computer Engineering Dept in association with IEEE KSV Student Branch.
                </p>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex justify-between items-center">
                <span className="font-mono text-[9px] text-blueprint-text-secondary">PARTICIPATION</span>
                <span className="text-[11px] font-mono text-blueprint-text-secondary/60">IEEE KSV</span>
              </div>
            </div>
          </FadeInWhenInView>

          {/* Certificate 5: React JS Session */}
          <FadeInWhenInView delay={0.25}>
            <div className="bg-blueprint-surface border border-blueprint-border rounded p-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-blueprint-amber transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-blueprint-text-secondary/20 border border-blueprint-border text-blueprint-text-secondary">
                    WORKSHOP
                  </span>
                  <span className="font-mono text-[10px] text-blueprint-text-secondary">Apr 9, 2025</span>
                </div>
                <h3 className="text-base font-display font-bold text-blueprint-text-primary group-hover:text-blueprint-amber transition-colors">
                  React-JS Hands-on Session
                </h3>
                <p className="text-xs text-blueprint-text-secondary mt-1">
                  Computer Engineering Dept, LDRP-ITR
                </p>
                <p className="text-[11px] text-blueprint-text-secondary/70 mt-3 leading-relaxed">
                  Completed the practical hands-on session focusing on UI components, state management, and modern responsive styling layouts in React.js.
                </p>
              </div>

              <div className="border-t border-blueprint-border/60 mt-6 pt-4 flex justify-between items-center">
                <span className="font-mono text-[9px] text-blueprint-text-secondary">PARTICIPATION</span>
                <span className="text-[11px] font-mono text-blueprint-text-secondary/60">LDRP-ITR</span>
              </div>
            </div>
          </FadeInWhenInView>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-28 space-y-12">
        <FadeInWhenInView>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-blueprint-amber tracking-widest uppercase">// 04 ABOUT</div>
            <div className="flex-grow h-[1px] bg-blueprint-border/60" />
          </div>
        </FadeInWhenInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-display font-bold tracking-tight">
              Engineering Mindset
            </h2>
            <div className="text-base text-blueprint-text-secondary space-y-4 leading-relaxed">
              <p>
                I am a Computer Engineering student at **LDRP Institute of Technology and Research (GTU)**, Gandhinagar. Currently, I hold a **CPI of 7.81/10** (August 2023 &ndash; May 2027).
              </p>
              <p>
                Unlike developers who start from the frontend UI and build backward, I start at the core pipeline. I am driven by the engineering details: optimizing SQL queries, implementing cache invalidation schemas, securing APIs through HTTP-only credentials, and verifying infrastructure performance.
              </p>
              <p>
                My work centers on writing reliable, type-safe Java code, maintaining clean architectural layers (SOLID, MVC), and leveraging robust infrastructure configurations to prevent downtime and race conditions.
              </p>
            </div>
            
            {/* Education Info Table */}
            <div className="border border-blueprint-border bg-blueprint-surface/40 p-4 rounded font-mono text-xs max-w-xl">
              <div className="grid grid-cols-3 gap-2 py-1 border-b border-blueprint-border/60 text-blueprint-text-secondary">
                <span>DEGREE</span>
                <span className="col-span-2 text-blueprint-text-primary">B.E. Computer Engineering</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-1 border-b border-blueprint-border/60 text-blueprint-text-secondary">
                <span>INSTITUTION</span>
                <span className="col-span-2 text-blueprint-text-primary">LDRP-ITR (GTU), Gandhinagar</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-1 border-b border-blueprint-border/60 text-blueprint-text-secondary">
                <span>DURATION</span>
                <span className="col-span-2 text-blueprint-text-primary">Aug 2023 &mdash; May 2027</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-1 text-blueprint-text-secondary">
                <span>ACADEMIC CPI</span>
                <span className="col-span-2 text-blueprint-teal font-semibold">7.81 / 10.0</span>
              </div>
            </div>
          </div>

          {/* Interactive Neofetch Profile Terminal */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <AboutTerminal />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-28 space-y-12">
        <FadeInWhenInView>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-blueprint-amber tracking-widest uppercase">// 05 CONTACT</div>
            <div className="flex-grow h-[1px] bg-blueprint-border/60" />
          </div>
        </FadeInWhenInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Details */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-display font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-base text-blueprint-text-secondary leading-relaxed max-w-lg">
              I am open to backend developer roles, internships, and collaboration opportunities. Reach out via email, phone, or connect on LinkedIn.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blueprint-amber" />
                <span className="text-blueprint-text-secondary">Location:</span>
                <span className="text-blueprint-text-primary">Gandhinagar, Gujarat, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blueprint-amber" />
                <span className="text-blueprint-text-secondary">Phone:</span>
                <a href="tel:+918866582133" className="text-blueprint-text-primary hover:text-blueprint-amber transition-colors">
                  +91 88665 82133
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Panel */}
          <div className="lg:col-span-6 bg-blueprint-surface border border-blueprint-border rounded p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blueprint-amber/5 to-transparent pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="font-mono text-xs text-blueprint-text-secondary">// PREFERRED CHANNEL:</div>
              <div className="flex flex-col gap-1">
                <div className="text-[10px] font-mono text-blueprint-text-secondary uppercase">Direct Email</div>
                <div className="flex items-center justify-between gap-4 p-3 bg-blueprint-bg border border-blueprint-border rounded">
                  <span className="font-mono text-sm text-blueprint-text-primary select-all break-all">
                    niravmathukiya8@gmail.com
                  </span>
                  <button 
                    onClick={copyEmail}
                    className="p-1.5 text-blueprint-text-secondary hover:text-blueprint-amber hover:bg-blueprint-surface border border-transparent hover:border-blueprint-border rounded transition-all flex items-center justify-center"
                    title="Copy Email Address"
                  >
                    {copied ? <Check size={16} className="text-blueprint-teal" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blueprint-border/60 flex flex-wrap gap-4 items-center justify-between relative z-10">
              <a
                href="mailto:niravmathukiya8@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 font-display font-semibold uppercase tracking-wider text-xs text-blueprint-bg bg-blueprint-amber hover:bg-blueprint-amber/90 rounded border border-blueprint-amber transition-all shadow-[0_0_15px_rgba(232,163,61,0.2)]"
              >
                Send Direct Email
                <ExternalLink size={14} />
              </a>

              <div className="flex gap-4 text-xs font-mono text-blueprint-text-secondary">
                <a href="https://github.com/nirav-dev-04" target="_blank" rel="noopener noreferrer" className="hover:text-blueprint-amber transition-colors flex items-center gap-1">
                  GitHub <ExternalLink size={10} />
                </a>
                <a href="https://linkedin.com/in/nirav-mathukiya-47b1752b3" target="_blank" rel="noopener noreferrer" className="hover:text-blueprint-amber transition-colors flex items-center gap-1">
                  LinkedIn <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
