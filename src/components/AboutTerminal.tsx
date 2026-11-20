"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Network } from "lucide-react";

export default function AboutTerminal() {
  const [activeTab, setActiveTab] = useState<"system" | "stats" | "network">("system");

  const asciiArt = `
WWWWWWWWMMWWWWWMWWWWMMMMMMWWWWMMWWWWMMWWWWWWWW
WWMMWWMMMMMWWMMMMMMB*MMMMMMMMWMMMMMMWWWWMMWWWW
MMMMMMMMMMMMBo****BBBako*M***BMMMMMMMMWWMMMWWW
MMMMMMMMMBokaBMMWMBo*BMBBB*aBoooMMMMMMMMWWWWWW
MMMMMMMMBaa*WMBMBooB*MMM\$##B*B**MWWMMMMMWWWWWW
MMMMMMM**akBBM*k**MW\$\$W\$#\$#\$#\$\$*\$\$#\$MMMMMMWMWM
MMMMMBkB\$WoaakhoBMW\$WWWWM*BMW###@#\$#\$WMMMMMMWM
MMMMBkdWWWMMoqdkaoahkdmCXXLpoB\$\$#@####WMMMMWWM
MMMBaaB@\$BqJxf[+~-}1)){{{)\\jYp*BW#@##@#MMMMWWW
MMMBh*BBoJ/[?_<I:;!i<+-?-[)\\juJaW\$##@##MMMWWWW
MMMBBahwn1(jt/juvx)?~+{(fvLpbqqbhao\$@@\$MMMWWMW
MMMMab0x}}(?+>_(fxuf}>1uQpmUrfjnzZZmW@MMMMMMMM
MMMBoqU{-?])frzLCCc|?I[UpZYuU00Z0UUJ*\$MMMMMMMM
BBBBBqL[_<]\\r)vUxn)?+i]nmOutJJYZZCXJaWMMMMMMMW
BBBJfUL}->!!><+_+!i<<>-/UJf|\\tffncXUobpMMMWMMW
BBMU}<{t[>:\`.\`^,,:<~!">)XJY)+++?)rcJ0LpMMMWMMM
BBBQ-l}/1<:^. "i~i-(|](zOCLJ1_-[|xuCXJoMMMMMMM
BBBo/_?_)[~ili?}l:l~>{uQmmLCCt|/xuXUUQBMMMMMMM
BBBBa|_~{{{]-}\\]+>><+((jvzJLmLnvczYJChMMMMMMMM
BBBBBh)<\\{}{[}|f///f\\xczCZppdOnzYzXnqBMBMMMMMM
MBBBBB*oo/][)()_<+?1\\ruXLZmZ0JUUXcdkBBBMMMMMMM
MBBBBB**ow|{{)}?__--1/cYXUL0QQLUcCBBBBBMMMMMMM
MBBBBB***oJrt\\({?+<!i_{(jcJLLQQLCqBBBBBMMMMMMM
BBBBB*****L[rCCzj()|fvzXQZmZmmZQUpBBBBBBMMMMMM
BBBBB****oZ[[\\vXCOwqpbkkbddddpmLYp*BBBBMMMMMMM
MBBBB*****d{-_]1}}fYObhahhhhkpwQYbaoBBBMMMMMMM
`;

  return (
    <div className="w-full bg-[#080B11] border border-blueprint-border rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs select-none">
      {/* Terminal Title Bar */}
      <div className="bg-blueprint-surface border-b border-blueprint-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8615D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#4FD1C5]" />
        </div>
        <div className="text-[10px] text-blueprint-text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <Terminal size={12} className="text-blueprint-amber" />
          <span>nirav@ldrp-itr: ~ (neofetch)</span>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Terminal Nav Tabs */}
      <div className="flex bg-blueprint-bg border-b border-blueprint-border text-[10px] uppercase tracking-wider">
        <button
          onClick={() => setActiveTab("system")}
          className={`flex items-center gap-1 px-4 py-2 border-r border-blueprint-border transition-colors ${
            activeTab === "system"
              ? "bg-[#0C101A] text-blueprint-amber font-semibold border-b-2 border-b-blueprint-amber"
              : "text-blueprint-text-secondary hover:text-blueprint-text-primary"
          }`}
        >
          <Cpu size={10} />
          SYSTEM_SPEC
        </button>
        <button
          onClick={() => setActiveTab("stats")}
          className={`flex items-center gap-1 px-4 py-2 border-r border-blueprint-border transition-colors ${
            activeTab === "stats"
              ? "bg-[#0C101A] text-blueprint-amber font-semibold border-b-2 border-b-blueprint-amber"
              : "text-blueprint-text-secondary hover:text-blueprint-text-primary"
          }`}
        >
          <Database size={10} />
          GIT_METRICS
        </button>
        <button
          onClick={() => setActiveTab("network")}
          className={`flex items-center gap-1 transition-colors ${
            activeTab === "network"
              ? "bg-[#0C101A] text-blueprint-amber font-semibold border-b-2 border-b-blueprint-amber"
              : "text-blueprint-text-secondary hover:text-blueprint-text-primary"
          }`}
        >
          <Network size={10} className="ml-4" />
          <span className="pr-4">NET_CREDENTIALS</span>
        </button>
      </div>

      {/* Terminal Content Screen */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column: ASCII Profile */}
        <div className="md:col-span-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-blueprint-border/60 pb-6 md:pb-0 md:pr-6">
          <pre className="text-[6.5px] leading-[1.0] text-blueprint-amber/80 font-bold overflow-x-auto whitespace-pre font-mono">
            {asciiArt.trim()}
          </pre>
          <div className="text-[9px] text-blueprint-text-secondary/60 mt-3 text-center">
            [SYS_SHADOW_MAP: NIRAV.SYS]
          </div>
        </div>

        {/* Right Column: Dynamic Tabs Info */}
        <div className="md:col-span-7 space-y-4">
          {activeTab === "system" && (
            <div className="space-y-2 text-[11px] leading-relaxed">
              <div>
                <span className="text-blueprint-amber font-bold">OS:</span>
                <span className="text-blueprint-text-primary ml-2">Windows 11 x86_64, Android 14</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Uptime:</span>
                <span className="text-blueprint-text-primary ml-2">21 years, 2 months, 7 days</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Host:</span>
                <span className="text-blueprint-text-primary ml-2">LDRP-ITR, GTU Gandhinagar</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Kernel:</span>
                <span className="text-blueprint-text-primary ml-2">Computer Engineering (B.E. 2023-2027)</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">CPI:</span>
                <span className="text-blueprint-teal font-semibold ml-2">7.81 / 10.0</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">IDE:</span>
                <span className="text-blueprint-text-primary ml-2">Visual Studio 2022, VS Code 1.96</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Shell:</span>
                <span className="text-blueprint-text-primary ml-2">C#, ASP.NET Core</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Foundations:</span>
                <span className="text-blueprint-text-primary ml-2">OOP, DSA, SOLID, MVC</span>
              </div>
            </div>
          )}

          {activeTab === "stats" && (
            <div className="space-y-2 text-[11px] leading-relaxed">
              <div>
                <span className="text-blueprint-amber font-bold">GitHub Account:</span>
                <a href="https://github.com/nirav-dev-04" target="_blank" rel="noopener noreferrer" className="text-blueprint-text-primary hover:text-blueprint-amber ml-2 transition-colors underline">
                  nirav-dev-04
                </a>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">DSA Solved:</span>
                <span className="text-blueprint-teal font-semibold ml-2">100+ Problems (LeetCode &amp; GFG)</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Primary Repos:</span>
                <span className="text-blueprint-text-primary ml-2">
                  <a href="#work" className="hover:text-blueprint-amber underline transition-colors">Coursify</a>,{" "}
                  <a href="#work" className="hover:text-blueprint-amber underline transition-colors">SmartHostel</a>
                </span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Docker Packaging:</span>
                <span className="text-blueprint-text-primary ml-2">Multi-stage Containerized (175MB)</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">CI/CD Engine:</span>
                <span className="text-blueprint-text-primary ml-2">GitHub Actions Pipeline</span>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Testing Frame:</span>
                <span className="text-blueprint-text-primary ml-2">xUnit, Moq, Playwright</span>
              </div>
            </div>
          )}

          {activeTab === "network" && (
            <div className="space-y-2 text-[11px] leading-relaxed">
              <div>
                <span className="text-blueprint-amber font-bold">Email.Personal:</span>
                <a href="mailto:niravmathukiya8@gmail.com" className="text-blueprint-text-primary hover:text-blueprint-amber ml-2 transition-colors underline">
                  niravmathukiya8@gmail.com
                </a>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">GitHub:</span>
                <a href="https://github.com/nirav-dev-04" target="_blank" rel="noopener noreferrer" className="text-blueprint-text-primary hover:text-blueprint-amber ml-2 transition-colors underline">
                  github.com/nirav-dev-04
                </a>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">LinkedIn:</span>
                <a href="https://linkedin.com/in/nirav-mathukiya-47b1752b3" target="_blank" rel="noopener noreferrer" className="text-blueprint-text-primary hover:text-blueprint-amber ml-2 transition-colors underline">
                  linkedin.com/in/nirav-mathukiya-47b1752b3
                </a>
              </div>
              <div>
                <span className="text-blueprint-amber font-bold">Cell.Channel:</span>
                <a href="tel:+918866582133" className="text-blueprint-text-primary hover:text-blueprint-amber ml-2 transition-colors">
                  +91 88665 82133
                </a>
              </div>
              <div className="pt-2 border-t border-blueprint-border/60 text-[9px] text-blueprint-text-secondary/70">
                // SECURED ACCESS VIA JWT HTTPONLY COOKIES
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
