"use client";

import Link from "next/link";

export type NavLink = {
  href: string;
  label: string;
};

type NavProps = {
  logoText: string;
  links: NavLink[];
};

export default function Nav({ logoText, links }: NavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-grid-line bg-void/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tightest"
        >
          {logoText}
        </Link>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest2 text-cloud/70 transition-colors duration-fast ease-standard hover:text-reflex"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
