"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profileData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Info (Cols 5) */}
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/#hero"
              className="inline-flex items-center gap-2.5 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    MM
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-white">Meherina Mukta</span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Full-Stack Web Developer &amp; CSE Student at Green University of Bangladesh. Dedicated to crafting elegant, high-impact web software.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={profileData.socialLinks.email}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
                aria-label="Email Meherina Mukta"
                title="Email: meherinamukta03@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub: meherinamukta03"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn: meherina-mukta"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (Cols 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <li>
                <Link href="/#hero" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-cyan-400 transition-colors">
                  Skills &amp; Stack
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-cyan-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Education & Status Summary (Cols 3) */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Current Academic Status
            </h4>
            <p className="text-slate-400">
              Department of Computer Science &amp; Engineering
            </p>
            <p className="text-cyan-300 font-medium">
              Green University of Bangladesh
            </p>
            <p className="text-[11px] text-slate-500">
              Dhaka, Bangladesh
            </p>
          </div>

        </div>

        {/* Bottom footer row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; 2026 Meherina Mukta. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline">
              Built with Next.js, TypeScript &amp; Tailwind CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
