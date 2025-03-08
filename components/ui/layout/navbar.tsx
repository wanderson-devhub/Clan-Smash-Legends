"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 border-b border-[#4D4B80] bg-[#1D1E4D] bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="images/Wolfgang.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8 text-[#F3F9FE] animate-pulse-slow"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
              <span className="font-bold italic w-[120px] text-2xl bg-gradient-to-b from-[#F3F9FE] to-[#BCB099] text-transparent bg-clip-text">
                TeenWolf
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#achievements"
              className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            >
              Conquistas
            </a>
            <a
              href="#members"
              className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            >
              Membros
            </a>
            <a
              href="#join"
              className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            >
              Junte-se
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden border-t border-[#4D4B80] bg-[#1D1E4D] bg-opacity-95 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#about"
            className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#achievements"
            className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Conquistas
          </a>
          <a
            href="#members"
            className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Membros
          </a>
          <a
            href="#join"
            className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Junte-se
          </a>
        </div>
      </div>
    </nav>
  );
}
