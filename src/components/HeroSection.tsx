"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FileDown,
  Mail,
  ArrowRight,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profileData } from "@/data/portfolioData";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] sm:w-[700px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-teal-500/10 to-emerald-500/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content (Cols 7) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs sm:text-sm text-emerald-300 shadow-sm shadow-emerald-950/40 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Internship &amp; Junior Developer Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-cyan-400 tracking-wide">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
                {profileData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {profileData.designation}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {profileData.shortIntro}
            </p>

            {/* Education & Location Mini Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Green University of Bangladesh</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Dhaka, Bangladesh</span>
              </span>
            </div>

            {/* Call to Actions (Resume & Projects) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
              <a
                href={profileData.resumeUrl}
                download="Meherina_Mukta_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base"
                title="Download Meherina's Resume PDF"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all transform hover:-translate-y-0.5 text-sm sm:text-base group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-colors text-sm sm:text-base"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Social Links (Email, GitHub, LinkedIn) */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3.5">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500 mr-1 hidden sm:inline">
                Connect:
              </span>
              <a
                href={profileData.socialLinks.email}
                aria-label="Email Meherina Mukta"
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-emerald-800/50 transition-all hover:scale-110 shadow-sm"
                title="Email: meherinamukta03@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-110 shadow-sm"
                title="GitHub: meherinamukta03"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-800/50 transition-all hover:scale-110 shadow-sm"
                title="LinkedIn: meherina-mukta"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo Frame / Avatar Showcase (Cols 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-72 sm:w-80 md:w-96">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-slate-900 border border-slate-700/80 p-4 shadow-2xl overflow-hidden">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src={profileData.avatarUrl}
                      alt={profileData.name}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    // Fallback sleek initials avatar if image fails to load
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-center p-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-4">
                        <span className="text-3xl font-black text-slate-950 font-mono">MM</span>
                      </div>
                      <p className="font-bold text-white text-lg">{profileData.name}</p>
                      <p className="text-xs text-cyan-400 mt-1 font-mono">Full-Stack Web Developer</p>
                    </div>
                  )}

                  {/* Gradient bottom overlay on photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end p-4">
                    <div className="w-full bg-slate-900/80 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-medium text-slate-200">Passionate Problem Solver</span>
                      </div>
                      <span className="text-xs font-mono text-cyan-400">Green Univ. CSE</span>
                    </div>
                  </div>
                </div>

                {/* Floating mini stats cards around frame */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-lg font-bold text-cyan-400 font-mono">3+</div>
                    <div className="text-[11px] text-slate-400">Full-Stack Projects</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-lg font-bold text-emerald-400 font-mono">CSE</div>
                    <div className="text-[11px] text-slate-400">Green University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
