'use client';

import { Guest } from '@/types/Guest';
import { Playfair_Display } from 'next/font/google';
import React, { useRef } from 'react';

interface Props {
  guest: Guest;
}

const playfair = Playfair_Display({ subsets: [] });

export default function WelcomeMessage({ guest }: Props) {
  const section = useRef<HTMLDivElement>(null);

  return (
    <div className="welcome-section" ref={section}>
      <h2 className="content__title w-full" data-splitting data-effect>
        <span className="font-lejour-serif text-5xl">
          {guest?.first_name} {guest?.last_name}
        </span>
      </h2>
      <h3 className="-mt-4 mx-10 font-lejour-script w-full text-left text-xl">
        Los invitamos a celebrar con nosotros
      </h3>
      <p className={`mt-10 ${playfair.className}`}>{guest?.welcome_message}</p>
    </div>
  );
}
