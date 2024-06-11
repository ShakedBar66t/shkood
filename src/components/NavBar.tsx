"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "@/components/Icons"; // Assuming Icons is correctly imported

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000); // Adjust this delay as needed
  };

  useEffect(() => {
    const handleScroll = () => {
      if (clicked) return;

      const reviewsSection = document.getElementById('reviews');
      const gallerySection = document.getElementById('gallery');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveLink('contact');
      } else if (gallerySection && scrollPosition >= gallerySection.offsetTop) {
        setActiveLink('gallery');
      } else if (reviewsSection && scrollPosition >= reviewsSection.offsetTop) {
        setActiveLink('reviews');
      } else {
        setActiveLink('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [clicked]);

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Shko<span className="text-green-600">od!</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            <Link href="#reviews" onClick={() => handleSetActiveLink('reviews')} className={`font-semibold relative ${activeLink === 'reviews' ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
              Rev<span className="text-green-600">iews</span>
              {activeLink === 'reviews' && <Icons.underline className="absolute bottom-0 w-full text-green-600" />}
            </Link>
            <Link href="#gallery" onClick={() => handleSetActiveLink('gallery')} className={`font-semibold relative ${activeLink === 'gallery' ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
            Gal<span className="text-green-600">lery</span>
              {activeLink === 'gallery' && <Icons.underline className="absolute bottom-0 w-full text-green-600" />}
            </Link>
            <Link href="#contact" onClick={() => handleSetActiveLink('contact')} className={`font-semibold relative ${activeLink === 'contact' ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>
            Contact<span className="text-green-600"> us</span>
              {activeLink === 'contact' && <Icons.underline className="absolute bottom-0 w-full text-green-600" />}
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
