'use client';

import Link from 'next/link';
import { useState } from 'react';
import '@/public/styles/globals.css';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md md:h-[10vh]">
      <div className="h-[10vh] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex max-h-[10vh]">
              <Link href="/" legacyBehavior>
                <Image
                  src='/logo.png'
                  alt='logo'
                  className='pt-1 max-h-[10vh] w-auto'
                  width={0} 
                  height={0} 
                  sizes="(max-width: 768px) 100vw, 10vh"
                />
              </Link>
            </div>
            <div className="hidden md:block md:float-right relative">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="relative">
                  <Link href="/" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href="" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Education Info</a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href="" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href="" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Certificates</a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href="" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href="" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href="" legacyBehavior>
                    <a className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden flex-row">
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
        <div className="md:hidden flex-col">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex-col">
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Education Info</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Certificates</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
