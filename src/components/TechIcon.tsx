import React from "react";
import {
  SiC,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbServer2 } from "react-icons/tb";

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-10 h-10" }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // C Language
  if (normalized === "c" || normalized === "c language") {
    return <SiC className={`${className} text-[#A8B9CC]`} />;
  }

  // C++
  if (normalized.includes("c++")) {
    return <SiCplusplus className={`${className} text-[#00599C]`} />;
  }

  // Python
  if (normalized.includes("python")) {
    return <SiPython className={`${className} text-[#3776AB]`} />;
  }

  // Java
  if (normalized === "java" || (normalized.includes("java") && !normalized.includes("javascript"))) {
    return <FaJava className={`${className} text-[#E76F00]`} />;
  }

  // TypeScript
  if (normalized.includes("typescript")) {
    return <SiTypescript className={`${className} text-[#3178C6]`} />;
  }

  // JavaScript: Yellow JS badge
  if (normalized.includes("javascript") || normalized === "js") {
    return <SiJavascript className={`${className} text-[#F7DF1E] bg-black rounded`} />;
  }

  // SQL / MySQL: Dolphin blue
  if (normalized.includes("mysql") || normalized === "sql") {
    return <SiMysql className={`${className} text-[#4479A1]`} />;
  }

  // PostgreSQL
  if (normalized.includes("postgresql")) {
    return <SiPostgresql className={`${className} text-[#4169E1]`} />;
  }

  // React
  if (normalized.includes("react")) {
    return <SiReact className={`${className} text-[#61DAFB]`} />;
  }

  // Next.js
  if (normalized.includes("next")) {
    return <SiNextdotjs className={`${className} text-white`} />;
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
  }

  // HTML5
  if (normalized.includes("html")) {
    return <SiHtml5 className={`${className} text-[#E34F26]`} />;
  }

  // CSS3
  if (normalized.includes("css")) {
    return <SiCss className={`${className} text-[#1572B6]`} />;
  }

  // Node.js
  if (normalized.includes("node")) {
    return <SiNodedotjs className={`${className} text-[#339933]`} />;
  }

  // Express
  if (normalized.includes("express")) {
    return <SiExpress className={`${className} text-slate-200`} />;
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return <SiMongodb className={`${className} text-[#47A248]`} />;
  }

  // Git / GitHub
  if (normalized === "git") {
    return <SiGit className={`${className} text-[#F05032]`} />;
  }
  if (normalized.includes("github") || normalized.includes("git")) {
    return <SiGithub className={`${className} text-white`} />;
  }

  // VS Code
  if (normalized.includes("vs code") || normalized.includes("vscode")) {
    return <VscVscode className={`${className} text-[#007ACC]`} />;
  }

  // Vercel
  if (normalized.includes("vercel")) {
    return <SiVercel className={`${className} text-white`} />;
  }

  // Netlify
  if (normalized.includes("netlify")) {
    return <SiNetlify className={`${className} text-[#00C7B7]`} />;
  }

  // Default fallback icon
  return <TbServer2 className={`${className} text-cyan-400`} />;
}
