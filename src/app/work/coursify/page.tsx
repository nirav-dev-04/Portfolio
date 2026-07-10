import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Coursify Case Study | Nirav Mathukiya",
  description: "Systems architectural deep-dive into Coursify, a secure HLS video delivery and payment platform built with Next.js, Spring Boot, Redis, PostgreSQL, and AWS.",
};

export default function CoursifyCaseStudy() {
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
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-widest">// CASE STUDY: SYSTEM_01</div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-blueprint-text-primary">
          Coursify &mdash; Scalable EdTech Media Platform
        </h1>
        <p className="text-lg text-blueprint-text-secondary leading-relaxed max-w-3xl">
          A high-performance online learning platform addressing secure video segmented HLS streaming, write-back transaction logging, and payment idempotency.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {["Spring Boot", "Next.js", "PostgreSQL", "Redis", "AWS (S3, Lambda, MediaConvert, CloudFront)", "Razorpay"].map((tech) => (
            <span key={tech} className="px-3 py-1 rounded bg-blueprint-surface border border-blueprint-border font-mono text-xs text-blueprint-text-secondary">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://github.com/nirav-dev-04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
          >
            <Github size={14} />
            GitHub Repository
          </a>
          <a
            href="https://coursify-learn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-bg bg-blueprint-amber hover:bg-blueprint-amber/90 rounded border border-blueprint-amber transition-all shadow-[0_0_10px_rgba(232,163,61,0.2)]"
          >
            <ExternalLink size={14} />
            Live Deployment
          </a>
        </div>
      </div>

      {/* The Problem Section */}
      <section className="space-y-4">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// THE PROBLEM</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Streaming Overheads & Transaction Race Conditions
        </h2>
        <div className="text-blueprint-text-secondary space-y-4 leading-relaxed text-sm md:text-base">
          <p>
            EdTech platforms face significant engineering challenges:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Video Piracy:</strong> Traditional MP4 links are easily intercepted and downloaded. The platform required secure, access-controlled video streaming.
            </li>
            <li>
              <strong>Database Bottleneck:</strong> Frequent progress pings from the client player (every 5-10 seconds of playback) to update user progress would choke the main transactional database under load.
            </li>
            <li>
              <strong>Financial Inconsistencies:</strong> Slow payment callbacks from Razorpay could cause race conditions (e.g. double-purchases or missed access provision) if a user clicked twice or refreshed during checkout.
            </li>
          </ul>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="space-y-6">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// ARCHITECTURE DIAGRAM</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Distributed System Topography
        </h2>
        
        {/* Systems diagram SVG */}
        <div className="bg-blueprint-surface border border-blueprint-border rounded-lg p-6 font-mono text-xs text-blueprint-text-secondary relative overflow-hidden">
          <div className="absolute top-2 left-2 text-[10px] text-blueprint-text-secondary/30 select-none">{"[ARCH_LAYOUT_V1]"}</div>
          <div className="absolute inset-0 blueprint-dots opacity-10 pointer-events-none" />

          {/* SVG Diagram Wrapper */}
          <div className="w-full overflow-x-auto py-6">
            <div className="min-w-[650px] relative h-[280px]">
              <svg className="absolute inset-0 w-full h-full text-blueprint-border" fill="none">
                {/* Horizontal flow lines */}
                <path d="M 120 70 L 220 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 340 70 L 440 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 340 100 L 440 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 120 70 L 220 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 340 200 L 440 200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 540 200 L 610 200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

                {/* Arrow Markers */}
                <polygon points="220,70 212,65 212,75" fill="currentColor" />
                <polygon points="440,70 432,65 432,75" fill="currentColor" />
                <polygon points="220,200 213,194 219,206" fill="currentColor" />
                <polygon points="440,200 432,195 432,205" fill="currentColor" />
                <polygon points="610,200 602,195 602,205" fill="currentColor" />
              </svg>

              {/* Node: Next.js Client */}
              <div className="absolute top-[35px] left-[10px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">Next.js Client</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Segment Player</div>
              </div>

              {/* Node: Spring Boot API */}
              <div className="absolute top-[35px] left-[220px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-amber text-[10px]">Spring Boot API</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Core Business Logic</div>
              </div>

              {/* Node: PostgreSQL / Redis */}
              <div className="absolute top-[35px] left-[440px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-teal text-[10px]">Redis & Postgres</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Transient Cache + DB</div>
              </div>

              {/* Node: AWS S3 */}
              <div className="absolute top-[165px] left-[10px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">AWS S3</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Raw Video Storage</div>
              </div>

              {/* Node: AWS Lambda */}
              <div className="absolute top-[165px] left-[220px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">Lambda Trigger</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Video Job Init</div>
              </div>

              {/* Node: AWS MediaConvert */}
              <div className="absolute top-[165px] left-[440px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">MediaConvert</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">HLS Transcoding</div>
              </div>

              {/* Node: CloudFront CDN */}
              <div className="absolute top-[165px] left-[610px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-teal text-[10px]">CloudFront CDN</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Signed Cookies segment</div>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-blueprint-text-secondary/80 border-t border-blueprint-border/60 pt-3">
            <strong>Flow Description:</strong> Client requests videos through authenticated CloudFront distribution via HTTP-only Cookies. User updates and video progress writes pass through Spring Boot to Redis for cache buffering before flushing to PostgreSQL.
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
              Redis Write-Back Cache for Video Progress
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Next.js client sends video progress updates every 5 seconds to track accurate student course completion.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Directly updating PostgreSQL (write-through) results in thousands of concurrent SQL `UPDATE` operations, degrading database transaction throughput.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We implemented a <strong>write-back cache strategy</strong> using Redis. Progress data is written to Redis hashes (`HSET progress:userId:videoId timestamp progress_seconds`). A scheduled backend task runs every 10 seconds, batching the Redis data and writing it to PostgreSQL in a single database round-trip. This decreased write IOPS on PostgreSQL by <strong>90%</strong> under peak load.
            </p>
          </div>

          {/* Decision 2 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_02</span>
              Razorpay Idempotency & Pessimistic Locking
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> A student buying a course must not be charged twice nor should they receive double access claims due to slow web callbacks.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Optimistic locking fails when transaction rates are high, returning generic errors and leaving requests in a half-written state.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We utilized Razorpay&apos;s API <strong>Idempotency Keys</strong> linked to generated unique order UUIDs. In the Spring Boot layer, we enforce a database <strong>pessimistic lock</strong> (`SELECT FOR UPDATE`) on the transaction log row during webhook verification. This prevents race conditions, ensuring that identical webhook triggers block safely until the first processor completes successfully.
            </p>
          </div>

          {/* Decision 3 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_03</span>
              CloudFront Signed Cookies over Signed URLs
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> HLS streams partition a video file into hundreds of `.ts` segments (each 2-6 seconds long) fetched asynchronously by the browser player.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Using CloudFront Signed URLs would require generating a unique signed URL for every single segment chunk. This creates extreme CPU load on the auth server and breaks HTML5 players that parse `.m3u8` manifests.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We implemented <strong>CloudFront Signed Cookies</strong>. When a user requests course material, the Spring Boot API verifies their enrollment and issues secure HTTP-only cookies defining wildcard access path permissions (`/video/courseId/*`). The browser player automatically sends these cookies with every `.ts` segment request, allowing low-overhead native streaming.
            </p>
          </div>

          {/* Decision 4 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_04</span>
              JWT httpOnly Cookie Token Rotation
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Authenticating SPA clients without exposing JWT tokens to XSS (Cross-Site Scripting) local storage theft.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Storing JWT in memory makes it volatile on browser refreshes, while storing in localStorage exposes it to malicious scripts.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> Tokens are stored in secure, `httpOnly`, `SameSite=Strict`, `Secure` cookies. To prevent replay attacks, we implemented <strong>token rotation</strong>. Every API request generates a short-lived access cookie, and a refresh token database table invalidates old sessions if a refresh token is reused, indicating potential theft.
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
                <span>Playwright E2E Suite</span>
                <span className="text-blueprint-teal font-semibold">100% PASSING</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-blueprint-border/60">
                <span>JUnit 5 Coverage</span>
                <span className="text-blueprint-teal font-semibold">82% LINE COVER</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span>API Contract Tests</span>
                <span className="text-blueprint-teal font-semibold">14/14 VALID</span>
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
                <span>Simultaneous video segment streaming under session boundaries</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Razorpay double checkout click prevention</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Token refresh validity during segment transitions</span>
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
          href="https://github.com/nirav-dev-04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
        >
          <Github size={14} />
          Explore Source Code
        </a>
      </div>

    </div>
  );
}
