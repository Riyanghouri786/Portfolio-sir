"use client";

import Link from "next/link";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const navigationLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Process", href: "#process" },
  { id: 4, name: "Portfolio", href: "#portfolio" },
  { id: 5, name: "Blog", href: "#blog" },
  { id: 6, name: "Services", href: "#services" },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`w-full bg-white shadow-sm ${geistSans.variable} antialiased [font-smooth:always] [-webkit-font-smoothing:antialiased] [text-rendering:optimizeLegibility]`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#3852d9] to-[#6c5dd3] text-white flex items-center justify-center font-bold text-lg shadow-md">
            B
          </div>
          <span className="font-semibold text-xl tracking-wide text-gray-800">Brooklyn</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[17px] font-semibold text-gray-600">
          {navigationLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="relative group hover:text-[#3852d9] transition-all duration-300"
            >
              {link.name}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#3852d9] transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            href="#contact"
            className="ml-4 bg-[#3852d9] text-white px-5 py-2 rounded-md text-lg font-medium hover:bg-[#0c35ff] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3852d9] hover:bg-gray-100 transition"
          >
            <span className="sr-only">Open menu</span>
            <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white z-40 shadow-sm">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 font-medium text-lg hover:text-[#3852d9] transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="bg-[#3852d9] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#0c35ff] transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
