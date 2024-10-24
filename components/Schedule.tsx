'use client';

import { BlurScrollEffect } from '@/utils/BlurScrollEffect';
import { useGSAP } from '@gsap/react';
import { Playfair } from 'next/font/google';
import React, { useRef } from 'react';

const playfair = Playfair({ weight: '400', subsets: [] });

export default function Schedule() {
  const text = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!text.current) {
      return;
    }

    new BlurScrollEffect(text.current, {
      start: 'top bottom-=30%',
      end: 'center center+=5%',
    });
  });

  return (
    <div>
      <h2 className="content__title w-full" data-splitting data-effect>
        <span className="font-lejour-serif text-5xl">Itinerario</span>
      </h2>
      <h3 className="-mt-4 mx-10 font-lejour-script w-full text-xl">
        Lleno de momentos especiales
      </h3>
      <div className="flex flex-col justify-center items-center my-6">
        <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 md:hidden"></div>
        <div
          className="flex flex-col gap-10 md:flex-row mt-2 md:mt-10"
          ref={text}
        >
          <div>
            <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
              4 : 00
            </h2>
            <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
              Pm
            </h2>
            <h2
              className={`${playfair.className} w-full text-center mt-2 tracking-widest`}
            >
              CEREMONIA
            </h2>
          </div>
          <div>
            <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
              5 : 00
            </h2>
            <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
              Pm
            </h2>
            <h2
              className={`${playfair.className} w-full text-center mt-2 tracking-widest`}
            >
              COCTEL
            </h2>
          </div>
          <div>
            <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
              6 : 00
            </h2>
            <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
              Pm
            </h2>
            <h2
              className={`${playfair.className} w-full text-center mt-2 tracking-widest`}
            >
              CENA Y FIESTA
            </h2>
          </div>
        </div>
        <div className="mt-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 md:hidden"></div>
      </div>
    </div>
  );
}
