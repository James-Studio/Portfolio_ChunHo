'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { SOCIALS } from '@/constans/common';
import { FaGithub, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


export const dynamic = 'force-dynamic';

export default function HomePage() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: [
        'NYU Courant MSCS',
        'Fullstack Software Engineer',
        'Machine Learning Engineer'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center">
      <div className="relative flex items-center justify-center py-3">
        <h1 className="relative flex-1">
          <span className="grid grid-cols-2">
            <span className="block text-center text-1xl opacity-90">I AM</span>
          </span>{' '}
          <span className="pl-[10vw] z-10 block text-[calc(1.825rem+6.9vw)] font-bold leading-none">James Hung</span>{' '}
          <span className="block"></span>{' '}
          
          {/* Only for the spaces between the name and the short intro */}
          <h1><br/></h1>
          <h1><br/></h1>

          <span className="grid grid-cols-3 justify-items-end gap-x-16">
            <span className="block"></span>
            <div className="w-[25rem] overflow-hidden whitespace-nowrap">
              <span ref={el}  className="text-center inline-block text-1xl md:text-2xl"/>
            </div>
        
          </span>
          
        </h1>
        

        <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 flex space-x-6 pl-4">
          <a href={SOCIALS.GH} aria-label="GitHub" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaGithub size={40} />
          </a>
          <a href={SOCIALS.IN} aria-label="Linkedin" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaLinkedin size={40} />
          </a>
          <a href={SOCIALS.GM} aria-label="Gmail" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </div>
  )
}

