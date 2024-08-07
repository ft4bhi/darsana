// components/Navbar.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'About Program', href: '/about-program' },
  { title: 'Eligibility', href: '/eligibility' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Contact us', href: '/contact' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row flex-wrap items-start justify-start text-center text-[0.938rem]">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <div 
            className={`w-[19.456rem] relative h-[4.375rem] cursor-pointer ${
              pathname === item.href ? 'bg-[#0e5b8a] text-white' : 'bg-[#1186c9] text-black hover:bg-[#1187c9]'
            }`}
          >
            <div className="absolute top-[1.063rem] left-[6.313rem] tracking-[0.16px] leading-[2.16rem] font-medium">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;