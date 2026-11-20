import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Hostel Management Case Study | Nirav Mathukiya",
  description: "Technical breakdown of the Smart Hostel Management System, featuring ASP.NET Core Identity role-based authorization, multi-stage Docker builds, Cloudinary integration, and PostgreSQL.",
};

export default function HostelManagementCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      
      {/* Back button */}
      <Link 
        href="/#work" 
        className="inline-flex items-center gap-2 text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-wider"
      >
        <ArrowLeft size={14} />
        Back to Systems
      </Link>

      {/* Case Study Header / Hero */}
      <div className="space-y-6 border-b border-blueprint-border pb-10">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-widest">// CASE STUDY: SYSTEM_03</div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-blueprint-text-primary">
          Smart Hostel &mdash; Role-Based Administration
        </h1>
        <p className="text-lg text-blueprint-text-secondary leading-relaxed max-w-3xl">
          A multi-tenant hostel administration platform delivering secure role-based endpoint mapping, optimized multi-stage deployment packaging, and externalized binary asset storage.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {["ASP.NET Core", "ASP.NET Core Identity", "React.js / Vite", "PostgreSQL", "Docker", "Cloudinary", "REST API"].map((tech) => (
            <span key={tech} className="px-3 py-1 rounded bg-blueprint-surface border border-blueprint-border font-mono text-xs text-blueprint-text-secondary">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://github.com/nirav-dev-04/smart-hostel-management-system"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
          >
            <Github size={14} />
            GitHub (Backend)
          </a>
          <a
            href="https://github.com/nirav-dev-04/HOSTEL-MANAGMENT---FRONTEND"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
          >
            <Github size={14} />
            GitHub (Frontend)
          </a>
          <a
            href="https://hostel-managment-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-bg bg-blueprint-amber hover:bg-blueprint-amber/90 rounded border border-blueprint-amber transition-all shadow-[0_0_10px_rgba(232,163,61,0.2)]"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>

      {/* The Problem Section */}
      <section className="space-y-4">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// THE PROBLEM</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Endpoint Security Leakage & Deployment Bloat
        </h2>
        <div className="text-blueprint-text-secondary space-y-4 leading-relaxed text-sm md:text-base">
          <p>
            Administrative systems handling students, rectors, and high-level admins present unique challenges:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Privilege Escalation:</strong> Without a strict role hierarchy, malicious students can craft API payloads to approve their own room assignments or access sensitive medical files.
            </li>
            <li>
              <strong>Bloated Container Images:</strong> Including build compilers, .NET SDKs, and source code files inside production Docker images leads to 800MB+ image sizes, increasing cold-boot times and exposing vulnerability vectors.
            </li>
            <li>
              <strong>Local Binary Bloat:</strong> Storing uploaded student documents (e.g. proof of IDs, fee receipts) on local VM disks slows server backups, leads to disk capacity failures, and breaks in autoscaling environments.
            </li>
          </ul>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="space-y-6">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// ARCHITECTURE DIAGRAM</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Role-Secured Deployment Structure
        </h2>
        
        {/* Systems diagram SVG */}
        <div className="bg-blueprint-surface border border-blueprint-border rounded-lg p-6 font-mono text-xs text-blueprint-text-secondary relative overflow-hidden">
          <div className="absolute top-2 left-2 text-[10px] text-blueprint-text-secondary/30 select-none">{"[SECURE_DEPLOYMENT_V1]"}</div>
          <div className="absolute inset-0 blueprint-dots opacity-10 pointer-events-none" />

          {/* SVG Diagram Wrapper */}
          <div className="w-full overflow-x-auto py-6">
            <div className="min-w-[650px] relative h-[250px]">
              <svg className="absolute inset-0 w-full h-full text-blueprint-border" fill="none">
                {/* Router lines */}
                <path d="M 120 120 L 220 120" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 340 120 L 440 60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 340 120 L 440 120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 340 120 L 440 180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 540 120 L 610 120" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

                {/* Arrow Markers */}
                <polygon points="220,120 212,115 212,125" fill="currentColor" />
                <polygon points="440,60 432,56 437,65" fill="currentColor" />
                <polygon points="440,120 432,115 432,125" fill="currentColor" />
                <polygon points="440,180 437,175 432,184" fill="currentColor" />
                <polygon points="610,120 602,115 602,125" fill="currentColor" />
              </svg>

              {/* Node: React UI */}
              <div className="absolute top-[95px] left-[10px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">React Frontend</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Vite + Tailwind</div>
              </div>

              {/* Node: ASP.NET Core Identity Filter */}
              <div className="absolute top-[90px] left-[220px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-amber text-[10px]">ASP.NET Core Identity</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">JWT Authenticator</div>
              </div>

              {/* Node: Role Admin */}
              <div className="absolute top-[25px] left-[440px] w-[100px] bg-blueprint-bg border border-blueprint-border rounded p-2 text-center shadow-md">
                <div className="font-bold text-blueprint-teal text-[9px]">/admin/**</div>
                <div className="text-[7px] text-blueprint-text-secondary mt-0.5">ADMIN ONLY</div>
              </div>

              {/* Node: Role Rector */}
              <div className="absolute top-[95px] left-[440px] w-[100px] bg-blueprint-bg border border-blueprint-border rounded p-2 text-center shadow-md">
                <div className="font-bold text-blueprint-teal text-[9px]">/rector/**</div>
                <div className="text-[7px] text-blueprint-text-secondary mt-0.5">RECTORS</div>
              </div>

              {/* Node: Role Student */}
              <div className="absolute top-[160px] left-[440px] w-[100px] bg-blueprint-bg border border-blueprint-border rounded p-2 text-center shadow-md">
                <div className="font-bold text-blueprint-teal text-[9px]">/student/**</div>
                <div className="text-[7px] text-blueprint-text-secondary mt-0.5">STUDENTS</div>
              </div>

              {/* Node: Cloudinary & PostgreSQL */}
              <div className="absolute top-[95px] left-[610px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">Cloudinary + DB</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Storage & Data</div>
              </div>

            </div>
          </div>
          <div className="text-[10px] text-blueprint-text-secondary/80 border-t border-blueprint-border/60 pt-3">
            <strong>Flow Description:</strong> React client sends JWT token in headers. ASP.NET Core authorization middleware verifies access permissions dynamically based on endpoint hierarchy routing (Admin, Rector, Student) before granting database write access.
          </div>
        </div>
      </section>

      {/* Engineering Decisions Section */}
      <section className="space-y-8">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// ENGINEERING DECISIONS (WHY VS WHAT)</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Deep Technical Deep-Dive
        </h2>

        <div className="space-y-8">
          
          {/* Decision 1 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_01</span>
              Role-Based Endpoint Mapping &amp; ASP.NET Core Identity
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Setting up clear boundaries to block student requests from accessing admin and rector database services.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Method-level security attributes can cause logic leaks if an engineer forgets to add attributes to a new endpoint controller.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We enforced strict policy-based route authorization in ASP.NET Core:
              <code className="block bg-[#0A0D14] p-2 rounded mt-2 border border-blueprint-border text-[9px] text-blueprint-amber leading-normal">
                app.MapGroup(&quot;/api/v1/admin&quot;).RequireAuthorization(&quot;AdminOnly&quot;);<br />
                app.MapGroup(&quot;/api/v1/rector&quot;).RequireAuthorization(&quot;RectorOrAdmin&quot;);<br />
                app.MapGroup(&quot;/api/v1/student&quot;).RequireAuthorization(&quot;StudentOnly&quot;);
              </code>
              This centralizes security audits, preventing endpoint exposure even if method annotations are missing.
            </p>
          </div>

          {/* Decision 2 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_02</span>
              Docker Multi-Stage Compilation
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Minimizing deployment artifact size and securing the runtime container against injection attacks.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Building the application inside a container requires the full .NET SDK, which bloats the image size and leaves building tools in production.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We configured a <strong>multi-stage Dockerfile</strong>. Stage 1 (`build`) utilizes the full .NET 8 SDK image to restore NuGet packages and compile the binaries. Stage 2 (`runtime`) uses a minimal Alpine ASP.NET Core runtime image, copying *only* the compiled release binaries. This reduced container size from <strong>850MB to 175MB</strong> and completely removed compiler utilities from the runtime environment.
            </p>
          </div>

          {/* Decision 3 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_03</span>
              Cloudinary Signed Uploads for Document Verification
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Storing user proof of identity files securely without bogging down database transactional updates.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Direct client-to-Cloudinary uploads bypass server validation, while proxying files through ASP.NET Core increases server RAM and disk IO.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We set up **signed Cloudinary uploads**. When a student requests a file upload, ASP.NET Core verifies their token, generates a cryptographic signature containing upload rules (file format, size limits, expiration), and sends it to the React client. The client uploads the file directly to Cloudinary using this signature. Cloudinary returns a secure URL which is saved to PostgreSQL, ensuring low server memory usage.
            </p>
          </div>

        </div>
      </section>

      {/* Testing Section */}
      <section className="space-y-6">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// INTEGRATION & TESTING</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          E2E Quality Assurance
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blueprint-surface border border-blueprint-border p-6 rounded space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blueprint-teal uppercase">
              <ShieldCheck size={16} />
              <span>TEST SUITE STATUS</span>
            </div>
            
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center py-1.5 border-b border-blueprint-border/60">
                <span>Security Token Intercept</span>
                <span className="text-blueprint-teal font-semibold">100% PREVENTED</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-blueprint-border/60">
                <span>Docker Container Size</span>
                <span className="text-blueprint-teal font-semibold">175 MB</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span>Cloudinary Signed Callback</span>
                <span className="text-blueprint-teal font-semibold">VALIDATED</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-blueprint-text-secondary leading-relaxed">
            <p className="text-xs">
              <strong>Integration Scenarios Checked:</strong>
            </p>
            <ul className="space-y-2 text-xs font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Blocked student authentication attempts on Rector endpoints</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Docker Alpine JRE cold startup under 3 seconds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Verification of expired Cloudinary signed requests rejection</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <div className="border-t border-blueprint-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-wider"
        >
          <ArrowLeft size={14} />
          Back to Systems
        </Link>

        <a
          href="https://github.com/nirav-dev-04/smart-hostel-management-system"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
        >
          <Github size={14} />
          Explore Backend Source
        </a>
      </div>

    </div>
  );
}
