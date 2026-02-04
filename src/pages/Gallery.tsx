// src/pages/GalleryPage.tsx
import TimelessHeritage from '../component/gallery/TimelessHeritage';
import DiscoverHighlights from '../component/gallery/DiscoverHighlights';
import GalleryGrid from '../component/gallery/GalleryGrid';
import Hero from '../component/gallery/Hero';

import NavBar1 from '../component/common/NavBar1';
import Footer from '../component/common/Footer';
import { useEffect } from 'react';
import FooterBottomLogo from '../assets/logos/footer-logo-white.png'

export default function Gallery() {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <main>
      <NavBar1 page="gallery"/>
      <Hero />
      <TimelessHeritage />
      <DiscoverHighlights />
      <GalleryGrid />
    </main>

    {/* footer section */ }
    <div className="mt-30">
      <footer className="bg-[#222222] py-10">
        <Footer />
      </footer>
      {/* copyrights */}
      <div
        className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
        <a
            href="https://www.allinoneholdings.com/"
            className="hover:cursor-pointer hover:text-white flex justify-center items-center"
          >
            <p className="flex items-center justify-center">
              © 2025 Aluvihara Temple All rights reserved | Developed by
              <img src={FooterBottomLogo} alt="" className="w-8 lg:w-15 ml-1 mt-0 lg:-mt-1" />
            </p>
          </a>
      </div>
    </div>
  </>
  );
}
