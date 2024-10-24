'use client';

import { BlurScrollEffect } from '@/utils/BlurScrollEffect';
import { animateTitle } from '@/utils/animate-title';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React, { useRef } from 'react';

export default function TheDate() {
  const dateElement = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!dateElement.current) {
      return;
    }

    new BlurScrollEffect(dateElement.current);
  });

  return (
    <div ref={section} className="relative w-full flex flex-col items-center">
      <Image
        src="/images/SDYERALDYEMILIO-5.jpg"
        alt="wedding"
        className="object-cover"
        fill={true}
        unoptimized
        priority
      />
      <div className="z-10 absolute w-full h-full main-gradient"></div>
      <div className="w-full px-10 py-16 max-w-5xl md:py-40">
        <h2 className="content__title w-full" data-splitting data-effect>
          <span className="font-lejour-serif text-5xl text-white">
            La Fecha
          </span>
        </h2>
        <h3 className="relative z-10 -mt-2 mx-10 font-lejour-script w-full text-xl text-white">
          Que nunca olvidaremos
        </h3>
        <div
          className="relative z-10 mt-40 flex flex-col mb-20"
          ref={dateElement}
        >
          <h2 className="font-lejour-serif w-full text-center text-7xl text-white tracking-tightest">
            24
          </h2>
          <h2 className="font-lejour-script w-full text-center text-5xl text-white tracking-tightest">
            Nov
          </h2>
          <h2 className="font-lejour-serif w-full text-center text-7xl text-white tracking-tightest">
            24
          </h2>
        </div>
      </div>
    </div>
  );
}
