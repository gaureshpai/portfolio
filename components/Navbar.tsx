'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaGraduationCap, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '@/public/styles/globals.css';
import Image from 'next/image';

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType;
  popoutText: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [popoutStates, setPopoutStates] = useState<Record<string, boolean>>({
    About: false,
    'Education Info': false,
    Skills: false,
    Certificates: false,
    Projects: false,
    Experience: false,
    Contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setOpacity(Math.max(0.8, 1 - currentScrollY / 500));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'About', href: '/#about', icon: FaHome, popoutText: 'Learn more about me.' },
    { name: 'Education Info', href: '/#education', icon: FaGraduationCap, popoutText: 'My educational background.' },
    { name: 'Skills', href: '/#skills', icon: FaInfoCircle, popoutText: 'My skills and expertise.' },
    { name: 'Certificates', href: '/#certificates', icon: FaCertificate, popoutText: 'Certifications I have achieved.' },
    { name: 'Projects', href: '/#projects', icon: FaProjectDiagram, popoutText: 'Projects I have worked on.' },
    { name: 'Experience', href: '/#experience', icon: FaBriefcase, popoutText: 'My work experience.' },
    { name: 'Contact', href: '/#contact', icon: FaEnvelope, popoutText: 'Get in touch with me.' },
  ];

  const handleMouseEnter = (name: string) => {
    setPopoutStates((prev) => ({ ...prev, [name]: true }));
  };

  const handleMouseLeave = (name: string) => {
    setPopoutStates((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-md md:h-[15vh] transition-opacity duration-300 z-50" style={{ opacity }}>
        <div className="h-[15vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <div className="md:ml-10 flex max-h-[10vh]">
                <Link href="/" legacyBehavior>
                  <Image
                    src='/logo.png'
                    alt='logo'
                    className='pt-4 max-h-[10vh] w-auto cursor-pointer'
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 10vh"
                  />
                </Link>
              </div>
              <div className="hidden md:block md:float-right relative">
                <div className="ml-10 flex items-center space-x-4">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={() => handleMouseLeave(item.name)}
                    >
                      <Link href={item.href} className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center">
                        {item.name}
                      </Link>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      {popoutStates[item.name] && (
                        <div className="absolute top-full mt-2 w-60 bg-white border border-gray-200 rounded shadow-lg p-2">
                          <p className="text-gray-700">{item.popoutText}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                title="Menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden items-center">
            <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-row items-center">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-3xl font-medium flex items-center">
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-[15vh]"></div>
    </>
  );
};

export default Navbar;
