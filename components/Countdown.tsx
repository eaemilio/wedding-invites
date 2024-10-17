'use client';

import { calculateTimeLeft } from '@/utils/time.utils';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const playfair = Playfair_Display({ subsets: [] });

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <Image
        src="/images/SDYERALDYEMILIO-23.jpg"
        alt="Cuenta Regresiva"
        fill={true}
        className="object-cover"
      />
      <div className="absolute w-full h-full main-gradient"></div>
      <div className="z-10">
        <h2 className={`font-lejour-script w-full text-xl text-white`}>
          Cuenta Regresiva
        </h2>
        <div className="flex w-full justify-center mt-6 gap-4 opacity-90">
          <div className="flex flex-col items-center w-[54px]">
            <span className={`${playfair.className} text-white text-5xl mb-4`}>
              {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
            </span>
            <span className={`${playfair.className} text-white text-xs`}>
              Días
            </span>
          </div>
          <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
          <div className="flex flex-col items-center w-[54px]">
            <span className={`${playfair.className} text-white text-5xl mb-4`}>
              {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
            </span>
            <span className={`${playfair.className} text-white text-xs`}>
              Horas
            </span>
          </div>
          <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
          <div className="flex flex-col items-center w-[54px]">
            <span className={`${playfair.className} text-white text-5xl mb-4`}>
              {timeLeft.minutes < 10
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes}
            </span>
            <span className={`${playfair.className} text-white text-xs`}>
              Minutos
            </span>
          </div>
          <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
          <div className="flex flex-col items-center w-[54px]">
            <span className={`${playfair.className} text-white text-5xl mb-4`}>
              {timeLeft.seconds < 10
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}
            </span>
            <span className={`${playfair.className} text-white text-xs`}>
              Segundos
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
