import { BlurScrollEffect } from '@/utils/BlurScrollEffect';
import { useGSAP } from '@gsap/react';
import { Playfair_Display } from 'next/font/google';
import React, { useRef } from 'react';

const playfair = Playfair_Display({ subsets: [] });

export default function WelcomeMessage() {
  const welcome = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!welcome.current) {
      return;
    }

    new BlurScrollEffect(welcome.current, { start: 'top bottom-=10%' });
  });

  return (
    <>
      <h2 className="font-lejour-serif w-full text-left text-5xl">
        Familia Barrientos
      </h2>
      <h2 className="-mt-4 mx-10 font-lejour-script w-full text-left text-xl opacity-25">
        Los invitamos a celebrar con nosotros
      </h2>
      <p className={`mt-10 ${playfair.className}`} ref={welcome}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </>
  );
}
