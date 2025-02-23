import { useState } from "react";
//import ApplicationLogo from '@/Components/ApplicationLogo';
//import Link from 'next/link'; // Ensure you import Link if using Next.js

export default function Navbar() {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  // Navigation items table
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Me", href: "/about" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "Skills", href: "/skills" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-black/70 backdrop-blur-sm sticky top-0 z-50 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-[#007ced] md:text-2xl">
          ABDELILLAH CHIKH
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="hover:text-[#007ced] transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {showingNavigationDropdown && (
          <ul className="md:hidden absolute top-16 right-4 bg-black/70 backdrop-blur-sm w-48 rounded-lg shadow-lg p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block text-white hover:text-[#007ced] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}