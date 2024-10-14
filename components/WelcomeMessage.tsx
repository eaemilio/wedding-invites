import { Guest } from '@/types/Guest';
import { animateTitle } from '@/utils/animate-title';
import { useGSAP } from '@gsap/react';
import { Playfair_Display } from 'next/font/google';
import React, { useRef } from 'react';

interface Props {
  guest: Guest;
}

const playfair = Playfair_Display({ subsets: [] });

export default function WelcomeMessage({ guest }: Props) {
  const section = useRef<HTMLDivElement>(null);
  useGSAP(() => animateTitle(), { scope: section });

  return (
    <div className="welcome-section" ref={section}>
      <h2 className="font-lejour-serif w-full text-left text-5xl opacity-0 -ml-4">
        {guest?.first_name} {guest?.last_name}
      </h2>
      <h3 className="-mt-4 mx-10 font-lejour-script w-full text-left text-xl opacity-0">
        Los invitamos a celebrar con nosotros
      </h3>
      <p className={`mt-10 ${playfair.className}`}>{guest?.welcome_message}</p>
    </div>
  );
}
