"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t('nav.about'), href: "/#about" },
    { label: t('nav.skills'), href: "/#skills" },
    { label: t('nav.projects'), href: "/#projects" },
    { label: t('nav.contact'), href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/5"
          : ""
      }`}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/#hero" className="font-semibold text-white tracking-tight">
          {personal.name}
          <span className="text-indigo-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
        </div>

        <button
          className="md:hidden text-neutral-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-neutral-950 border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4 mb-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      )}
    </header>
  );
}
