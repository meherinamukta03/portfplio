import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaGithub className={className} />;
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaLinkedinIn className={className} />;
}

export function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaXTwitter className={className} />;
}

export function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaEnvelope className={className} />;
}
