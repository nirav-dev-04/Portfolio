import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "ExamShield Case Study | Nirav Mathukiya",
  description: "Technical breakdown of ExamShield, a real-time exam proctoring system using WebSockets, STOMP protocol, PostgreSQL, Flyway database migrations, and Bucket4j rate limiting.",
};

export default function ExamShieldCaseStudy() {
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
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-widest">// CASE STUDY: SYSTEM_02</div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-blueprint-text-primary">
          ExamShield &mdash; Real-Time Exam Proctoring System
        </h1>
        <p className="text-lg text-blueprint-text-secondary leading-relaxed max-w-3xl">
          A secure, high-integrity proctoring pipeline delivering sub-100ms connection latency, version-controlled relational schemas, and robust API abuse protection.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {["Spring Boot", "WebSockets / STOMP", "Flyway DB", "PostgreSQL", "Bucket4j", "Redis"].map((tech) => (
            <span key={tech} className="px-3 py-1 rounded bg-blueprint-surface border border-blueprint-border font-mono text-xs text-blueprint-text-secondary">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          {/* TODO: Confirm specific repo link. For now, fallback to general GitHub profile as requested */}
          <a
            href="https://github.com/nirav-dev-04" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
          >
            <Github size={14} />
            GitHub Profile (Temporary Link)
          </a>
        </div>
      </div>

      {/* The Problem Section */}
      <section className="space-y-4">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// THE PROBLEM</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Low Latency Telemetry & Web API Security
        </h2>
        <div className="text-blueprint-text-secondary space-y-4 leading-relaxed text-sm md:text-base">
          <p>
            Online examination platforms require continuous surveillance to maintain test integrity:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>High Polling Overheads:</strong> Traditional HTTP polling for active state checks (such as window focus losses, camera feeds, and browser tab switches) creates heavy HTTP header overhead, consuming server memory and slowing page response.
            </li>
            <li>
              <strong>WebSocket Connection Flooding:</strong> Malicious clients can open multiple WebSocket threads concurrently to disrupt exam monitors or execute DDoS attacks, exhausting available TCP socket file descriptors.
            </li>
            <li>
              <strong>Schema Desynchronization:</strong> Deploying database updates across testing clusters without schema versioning leads to script errors, broken constraints, and manual database rollbacks during critical exams.
            </li>
          </ul>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="space-y-6">
        <div className="font-mono text-xs text-blueprint-amber uppercase tracking-wider">// ARCHITECTURE DIAGRAM</div>
        <h2 className="text-2xl font-display font-bold text-blueprint-text-primary">
          Real-Time Streaming Topography
        </h2>
        
        {/* Systems diagram SVG */}
        <div className="bg-blueprint-surface border border-blueprint-border rounded-lg p-6 font-mono text-xs text-blueprint-text-secondary relative overflow-hidden">
          <div className="absolute top-2 left-2 text-[10px] text-blueprint-text-secondary/30 select-none">{"[WEBSOCKET_FLOW_V1]"}</div>
          <div className="absolute inset-0 blueprint-dots opacity-10 pointer-events-none" />

          {/* SVG Diagram Wrapper */}
          <div className="w-full overflow-x-auto py-6">
            <div className="min-w-[650px] relative h-[240px]">
              <svg className="absolute inset-0 w-full h-full text-blueprint-border" fill="none">
                {/* Connection lines */}
                <path d="M 120 70 L 220 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 340 70 L 440 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 340 70 L 440 170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 540 70 L 610 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

                {/* Arrow Markers */}
                <polygon points="220,70 212,65 212,75" fill="currentColor" />
                <polygon points="440,70 432,65 432,75" fill="currentColor" />
                <polygon points="440,170 433,164 439,176" fill="currentColor" />
                <polygon points="610,70 602,65 602,75" fill="currentColor" />
              </svg>

              {/* Node: Student Browser */}
              <div className="absolute top-[35px] left-[10px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">Student Client</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">SockJS Telemetry</div>
              </div>

              {/* Node: Spring WebSocket / Bucket4j */}
              <div className="absolute top-[35px] left-[220px] w-[120px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-amber text-[10px]">STOMP Broker</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Bucket4j Rate Limiting</div>
              </div>

              {/* Node: Redis Broker Relay */}
              <div className="absolute top-[35px] left-[440px] w-[100px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-teal text-[10px]">Redis Pub/Sub</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Topic Fan-out</div>
              </div>

              {/* Node: Rector Console */}
              <div className="absolute top-[35px] left-[610px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">Rector Panel</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">Live Alert Grid</div>
              </div>

              {/* Node: Flyway schema + PostgreSQL */}
              <div className="absolute top-[135px] left-[440px] w-[110px] bg-blueprint-bg border border-blueprint-border rounded p-3 text-center shadow-md">
                <div className="font-bold text-blueprint-text-primary text-[10px]">Flyway Migrations</div>
                <div className="text-[8px] text-blueprint-text-secondary/70 mt-1">PostgreSQL db</div>
              </div>

            </div>
          </div>
          <div className="text-[10px] text-blueprint-text-secondary/80 border-t border-blueprint-border/60 pt-3">
            <strong>Flow Description:</strong> Student actions trigger event packets sent via WebSockets (SockJS client) using STOMP broker. Connections are throttled by Bucket4j interceptors. Events propagate through Redis pub/sub to the rector dashboard instantly.
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
              WebSockets + STOMP over HTTP Polling
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Continuous, low-overhead transmission of client events (tab focus switches, clipboard copies) to detect candidate cheating.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> HTTP polling forces full request-response renegotiation (TCP handshake + headers). For 100+ active candidates, this creates massive server load.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We set up a persistent <strong>WebSocket (SockJS) protocol</strong> with **STOMP (Simple Text Oriented Messaging Protocol)** routing. By using STOMP destination mapping ({"/topic/exam.{id}"}), we route client events directly to a centralized Redis broker relay. This reduced message latency to **under 50ms**, ensuring examiners receive real-time notices without server pool degradation.
            </p>
          </div>

          {/* Decision 2 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_02</span>
              Bucket4j Token-Bucket Rate Limiting
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Throttling API endpoints to prevent malicious automated scripts or misconfigured client-side event loops from overwhelming the backend.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> IP-based firewall filtering can block complete testing centers that share a single public IP proxy.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We integrated <strong>Bucket4j with Redis caching</strong> for distributed token-bucket rate limiting. Rate limiting is applied dynamically per authenticated user token. Each user session is allocated a bucket of 60 tokens (refilled at 10 tokens/sec). If a script tries to flood the telemetry API, Spring Boot rejects the connection at the filter level with HTTP `429 Too Many Requests`, safeguarding central CPU threads.
            </p>
          </div>

          {/* Decision 3 */}
          <div className="border border-blueprint-border bg-blueprint-surface/20 rounded p-6 space-y-3">
            <h3 className="text-base font-mono font-bold text-blueprint-amber flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-blueprint-amber/10 border border-blueprint-amber/30 text-blueprint-amber font-mono font-normal">DECISION_03</span>
              Flyway SQL Schema Versioning
            </h3>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Context:</strong> Ensuring database schema safety and consistency across local, testing, and production environments.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Trade-off:</strong> Using Hibernate `ddl-auto=update` is extremely dangerous for live environments, as it can accidentally drop columns or create incorrect indices during application boots.
            </p>
            <p className="text-xs text-blueprint-text-secondary leading-normal">
              <strong>Solution:</strong> We disabled automatic DDL creation and configured <strong>Flyway migrations</strong>. Every database modification is stored in a versioned script (`V1__init_schema.sql`, `V2__add_websocket_logs.sql`). During server start, Flyway checks the `schema_version` history, applies pending scripts, and maintains a strict cryptographic checksum validation of previous updates. This guarantees 100% database schema reproducibility.
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
                <span>WebSocket Ping Latency</span>
                <span className="text-blueprint-teal font-semibold">&lt; 30MS</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-blueprint-border/60">
                <span>Concurrency Limit</span>
                <span className="text-blueprint-teal font-semibold">1000+ CONCURRENT</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span>Flyway Checksum Validation</span>
                <span className="text-blueprint-teal font-semibold">PASSED</span>
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
                <span>Rector console updates within 100ms of user focus loss</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Bucket4j token refilling under sustained payload bursts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blueprint-teal" />
                <span>Flyway clean migrations replay on blank test containers</span>
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

        {/* TODO: Confirmation needed to point to specific ExamShield repository instead of general GitHub profile */}
        <a
          href="https://github.com/nirav-dev-04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-blueprint-text-primary hover:text-blueprint-amber rounded border border-blueprint-border hover:border-blueprint-amber/80 bg-blueprint-surface/40 hover:bg-blueprint-surface/80 transition-all"
        >
          <Github size={14} />
          Explore Profile
        </a>
      </div>

    </div>
  );
}
