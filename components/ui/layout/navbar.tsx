"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 border-b border-[#4D4B80] bg-[#1D1E4D] bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <a
              href="#home"
              className="flex items-center space-x-1 transition-all duration-400"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const element = document.getElementById('home');
                const navHeight = 80; // altura do nav
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }}
            >
              <div className="relative">
                <Image
                  src="images/Wolfgang.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 text-[#F3F9FE] animate-pulse-slow hover:animate-spin-slow"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full blur opacity-20 group-hover:opacity-70 transition duration-300"></div>
              </div>
              <span className="w-[197px] font-bold italic text-3xl bg-gradient-to-r from-[#F3F9FE] via-[#BCB099] to-purple-500 bg-[length:200%_auto] text-transparent bg-clip-text hover:bg-[position:_100%] transition-[background-position] duration-400 ease-in-out">
                Killer Wolves
              </span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-[#2A2B5F] text-[#F3F9FE] hover:bg-[#3D3E7A] hover:text-[#BCB099] transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <MenuIcon
                  className={`absolute transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <svg
                  className={`absolute w-6 h-6 transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="group relative px-4 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                const navHeight = 80;
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }}
            >
              <span className="relative z-10">Sobre</span>
              <div className="absolute inset-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-pink-600 bottom-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#achievements"
              className="group relative px-4 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('achievements');
                const navHeight = 80;
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }}
            >
              <span className="relative z-10">Conquistas</span>
              <div className="absolute inset-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-pink-600 bottom-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#members"
              className="group relative px-4 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('members');
                const navHeight = 80;
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }}
            >
              <span className="relative z-10">Membros</span>
              <div className="absolute inset-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-pink-600 bottom-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#join"
              className="px-6 py-2 text-[#F3F9FE] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('join');
                const navHeight = 80;
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }}
            >
              Junte-se
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden border-t border-[#4D4B80] bg-[#1D1E4D] bg-opacity-95 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="#about"
            className="block px-4 py-3 text-[#F3F9FE] hover:text-[#BCB099] rounded-lg hover:bg-[#2A2B5F] transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              const element = document.getElementById('about');
              const navHeight = 80;
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - navHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }}
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Sobre</span>
            </div>
          </a>
          <a
            href="#achievements"
            className="block px-4 py-3 text-[#F3F9FE] hover:text-[#BCB099] rounded-lg hover:bg-[#2A2B5F] transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              const element = document.getElementById('achievements');
              const navHeight = 80;
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - navHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }}
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
              <span>Conquistas</span>
            </div>
          </a>
          <a
            href="#members"
            className="block px-4 py-3 text-[#F3F9FE] hover:text-[#BCB099] rounded-lg hover:bg-[#2A2B5F] transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              const element = document.getElementById('members');
              const navHeight = 80;
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - navHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }}
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <span>Membros</span>
            </div>
          </a>
          <a
            href="#join"
            className="block px-4 py-3 text-center text-[#F3F9FE] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform duration-300"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              const element = document.getElementById('join');
              const navHeight = 80;
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - navHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }}
          >
            <div className="flex items-center justify-center space-x-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                ></path>
              </svg>
              <span>Junte-se</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
