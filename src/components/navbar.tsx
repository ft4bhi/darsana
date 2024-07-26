"use client";
import Link from "next/link";
import { useState, ReactNode, useRef, useEffect } from "react";
import Image from "next/image";
import darsanaLogo from "@/assets/home/darsanaLogo.png";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavLink = ({ href, children, className, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className={`navbar__link ${className} ${isActive ? "text-blue-700 dark:text-blue-500" : "text-gray-900 dark:text-white"}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

interface DropdownProps {
  items: string[];
  handleLinkClick: (href: string) => void;
}

const Dropdown = ({ items, handleLinkClick }: DropdownProps) => (
  <ul className="absolute left-0 mt-2 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600">
    {items.map((item, index) => (
      <li key={index}>
        <NavLink
          href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() =>
            handleLinkClick(`/${item.replace(/\s+/g, "-").toLowerCase()}`)
          }
        >
          {item}
        </NavLink>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const keyInitiativesRef = useRef<HTMLLIElement>(null);
  const initiativesRef = useRef<HTMLLIElement>(null);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (keyInitiativesRef.current && !keyInitiativesRef.current.contains(event.target as Node)) &&
        (initiativesRef.current && !initiativesRef.current.contains(event.target as Node))
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const keyInitiatives = [
    "Prabkaran Memorial",
    "Skill Development",
    "IGNITE",
    "Bridge",
    "Biju Cheriyan Endowment",
    "House Construction",
    "Course Explorer",
  ];

  const initiatives = [
    "Covid Care Support",
    "Ambulance to Palliative Care Unit",
    "Job Fair",
    "Technology Corner",
    "Seminar on Restructuring Engineering Education",
    "Sholayur Educational Support Program",
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => handleLinkClick("/")}
        >
          <Image src={darsanaLogo} height={32} alt="Darsana Logo" />
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${isMobileMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                href="/"
                isActive={activeLink === "/"}
                className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => handleLinkClick("/")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/aboutus"
                isActive={activeLink === "/aboutus"}
                className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => handleLinkClick("/aboutus")}
              >
                About us
              </NavLink>
            </li>
            <li className="relative" ref={keyInitiativesRef}>
              <button
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={() => toggleDropdown('keyInitiatives')}
              >
                Key initiatives
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {openDropdown === 'keyInitiatives' && (
                <Dropdown
                  items={keyInitiatives}
                  handleLinkClick={handleLinkClick}
                />
              )}
            </li>
            <li className="relative" ref={initiativesRef}>
              <button
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={() => toggleDropdown('initiatives')}
              >
                Initiatives
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {openDropdown === 'initiatives' && (
                <Dropdown
                  items={initiatives}
                  handleLinkClick={handleLinkClick}
                />
              )}
            </li>
            <li>
              <NavLink
                href="/product"
                isActive={activeLink === "/product"}
                className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => handleLinkClick("/product")}
              >
                Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;