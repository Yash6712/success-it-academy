"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Placements", href: "#placements" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1F3A] shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" onClick={closeMenu}>
          <h1 className="text-xl font-extrabold text-yellow-400 sm:text-2xl">
            Success IT Academy
          </h1>
          <p className="text-xs text-gray-300">
            Skills Today. Success Tomorrow.
          </p>
        </a>

        <div className="hidden items-center gap-7 font-medium text-white lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#demo"
          className="hidden rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300 sm:inline-flex"
        >
          Book Free Demo
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1F3A] px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#demo"
              onClick={closeMenu}
              className="mt-3 rounded-lg bg-yellow-400 px-5 py-3 text-center font-bold text-[#0B1F3A]"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}