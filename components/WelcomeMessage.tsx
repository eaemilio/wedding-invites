import { animateTitle } from '@/utils/animate-title';
import { useGSAP } from '@gsap/react';
import { Playfair_Display } from 'next/font/google';
import React, { useRef } from 'react';

const playfair = Playfair_Display({ subsets: [] });

export default function WelcomeMessage() {
  const section = useRef<HTMLDivElement>(null);
  useGSAP(() => animateTitle(), { scope: section });

  return (
    <div className="welcome-section" ref={section}>
      <h2 className="font-lejour-serif w-full text-left text-5xl opacity-0 -ml-4">
        Familia Barrientos
      </h2>
      <h3 className="-mt-4 mx-10 font-lejour-script w-full text-left text-xl opacity-0">
        Los invitamos a celebrar con nosotros
      </h3>
      <p className={`mt-10 ${playfair.className}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
