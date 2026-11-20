"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RequestLifecycle() {
  const [activeNode, setActiveNode] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setActiveNode(-1); // No active node loop if reduced motion is requested
      return;
    }

    // Sequence loop: 0 -> 1 -> 2 -> 3 -> 4 -> 0...
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const nodes = [
    { id: 0, label: "Client", detail: "Browser Request", port: "HTTPS:443" },
    { id: 1, label: "API Gateway", detail: "Rate Limiting & Auth", port: "Gateway" },
    { id: 2, label: "Cache (Redis)", detail: "Progress & Session Lookup", port: "PORT:6379" },
    { id: 3, label: "Database", detail: "PostgreSQL / Persistence", port: "PORT:5432" },
    { id: 4, label: "Response", detail: "200 OK (Payload)", port: "JSON" },
  ];

  return (
    <div className="w-full bg-blueprint-surface border border-blueprint-border rounded-lg p-6 font-mono relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      {/* Decorative Grid Corners */}
      <div className="absolute top-2 left-2 text-[10px] text-blueprint-amber/30 select-none">{"[SYS_LIFECYCLE_DIAG]"}</div>
      <div className="absolute top-2 right-2 text-[10px] text-blueprint-text-secondary/30 select-none">v1.2.0</div>
      <div className="absolute bottom-2 left-2 text-[8px] text-blueprint-text-secondary/20 select-none">BASED ON REDIS WRITE-BACK CACHING</div>

      {/* Grid Overlay inside the panel */}
      <div className="absolute inset-0 blueprint-dots opacity-20 pointer-events-none" />

      {/* Main Flow Title */}
      <div className="text-xs uppercase tracking-wider text-blueprint-text-secondary mb-8 border-b border-blueprint-border/60 pb-2 flex justify-between items-center relative z-10">
        <span>// PIPELINE DIAGRAM: GET /api/v1/video/progress</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blueprint-teal animate-ping" />
          <span className="text-[10px] text-blueprint-teal uppercase">SYS_ACTIVE</span>
        </span>
      </div>

      {/* Horizontal Layout of Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 items-center justify-between relative z-10 py-4">
        {nodes.map((node, index) => {
          const isActive = index === activeNode;
          
          return (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <div 
                className={`relative flex flex-col p-4 rounded border transition-all duration-300 ${
                  isActive 
                    ? "border-blueprint-amber bg-blueprint-amber/5 shadow-[0_0_15px_rgba(232,163,61,0.15)] scale-[1.03]" 
                    : "border-blueprint-border bg-blueprint-bg/60"
                }`}
              >
                {/* Port annotation */}
                <div className={`text-[9px] font-semibold mb-1 uppercase tracking-tight ${
                  isActive ? "text-blueprint-amber" : "text-blueprint-text-secondary/50"
                }`}>
                  {node.port}
                </div>
                
                {/* Node Label */}
                <div className={`text-sm font-bold tracking-tight ${
                  isActive ? "text-blueprint-amber" : "text-blueprint-text-primary"
                }`}>
                  {node.label}
                </div>

                {/* Node Detail */}
                <div className="text-[10px] text-blueprint-text-secondary mt-1 leading-tight min-h-[30px]">
                  {node.detail}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isActive 
                      ? "bg-blueprint-amber animate-pulse shadow-[0_0_8px_rgba(232,163,61,1)]" 
                      : "bg-blueprint-border"
                  }`} />
                </div>
              </div>

              {/* Connector line for mobile (hidden on lg) */}
              {index < 4 && (
                <div className="lg:hidden flex flex-col items-center py-1">
                  <svg className="w-6 h-8 text-blueprint-border" fill="none" viewBox="0 0 24 32">
                    <path 
                      d="M12 0 L12 32" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                    />
                    {isActive && !reducedMotion && (
                      <motion.path 
                        d="M12 0 L12 32" 
                        stroke="#E8A33D" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                    <polygon points="12,32 8,26 16,26" fill="currentColor" className="text-blueprint-border" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* SVG Connecting Overlay for Desktop (visible on lg) */}
      <div className="hidden lg:block absolute left-0 right-0 top-0 bottom-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg className="w-full h-full" fill="none">
          {/* We draw connector paths between the card boundaries */}
          {/* Path 1: Client -> API Gateway */}
          <path d="M 18% 55% L 21% 55%" stroke="#1F2733" strokeWidth="2" strokeDasharray="4 4" />
          {activeNode === 0 && !reducedMotion && (
            <circle cx="18%" cy="55%" r="4" fill="#E8A33D" className="shadow-lg">
              <animate attributeName="cx" from="18%" to="21%" dur="2s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Path 2: API Gateway -> Cache */}
          <path d="M 38% 55% L 41% 55%" stroke="#1F2733" strokeWidth="2" strokeDasharray="4 4" />
          {activeNode === 1 && !reducedMotion && (
            <circle cx="38%" cy="55%" r="4" fill="#E8A33D">
              <animate attributeName="cx" from="38%" to="41%" dur="2s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Path 3: Cache -> DB */}
          <path d="M 58% 55% L 61% 55%" stroke="#1F2733" strokeWidth="2" strokeDasharray="4 4" />
          {activeNode === 2 && !reducedMotion && (
            <circle cx="58%" cy="55%" r="4" fill="#E8A33D">
              <animate attributeName="cx" from="58%" to="61%" dur="2s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Path 4: DB -> Response */}
          <path d="M 78% 55% L 81% 55%" stroke="#1F2733" strokeWidth="2" strokeDasharray="4 4" />
          {activeNode === 3 && !reducedMotion && (
            <circle cx="78%" cy="55%" r="4" fill="#E8A33D">
              <animate attributeName="cx" from="78%" to="81%" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
      </div>

      {/* Terminal log output overlay */}
      <div className="mt-8 bg-blueprint-bg/85 border border-blueprint-border p-4 rounded font-mono text-[10px] text-blueprint-text-secondary leading-normal relative z-10 max-h-[120px] overflow-hidden select-none">
        <div className="text-[10px] font-bold text-blueprint-teal mb-1 uppercase tracking-tight">// RUNTIME LOGS:</div>
        <div className="space-y-1">
          <p className="flex justify-between">
            <span>[2026-07-03 17:54:12] DEBUG RequestPipeline - Initializing request handler</span>
            <span className="text-blueprint-teal">[INIT]</span>
          </p>
          <p className={`flex justify-between transition-colors duration-300 ${activeNode === 1 ? "text-blueprint-amber font-semibold" : ""}`}>
            <span>[2026-07-03 17:54:13] INFO  RateLimitFilter - Request from 192.168.1.100 - Tokens available: 9/10</span>
            <span className={activeNode === 1 ? "text-blueprint-amber animate-pulse" : ""}>[GATEWAY]</span>
          </p>
          <p className={`flex justify-between transition-colors duration-300 ${activeNode === 2 ? "text-blueprint-amber font-semibold" : ""}`}>
            <span>[2026-07-03 17:54:13] DEBUG CacheService - Fetching progress for userId: 104 - Redis HIT</span>
            <span className={activeNode === 2 ? "text-blueprint-amber animate-pulse" : ""}>[REDIS_HIT]</span>
          </p>
          <p className={`flex justify-between transition-colors duration-300 ${activeNode === 3 ? "text-blueprint-amber font-semibold" : ""}`}>
            <span>[2026-07-03 17:54:13] DEBUG ProgressRepo - Flushing transaction logs to persistent DB</span>
            <span className={activeNode === 3 ? "text-blueprint-amber animate-pulse" : ""}>[POSTGRES]</span>
          </p>
          <p className={`flex justify-between transition-colors duration-300 ${activeNode === 4 ? "text-blueprint-teal font-semibold" : ""}`}>
            <span>[2026-07-03 17:54:13] INFO  RequestPipeline - Completed 200 OK in 42ms</span>
            <span className={activeNode === 4 ? "text-blueprint-teal animate-pulse" : ""}>[HTTP_200]</span>
          </p>
        </div>
      </div>
    </div>
  );
}
