import { BlurScrollEffect } from '@/utils/BlurScrollEffect';
import { useGSAP } from '@gsap/react';
import { Marcellus } from 'next/font/google';
import React, { useRef } from 'react';

const marcellus = Marcellus({ weight: '400', subsets: [] });

export default function Schedule() {
  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const text3 = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!text1.current || !text2.current || !text3.current) {
      return;
    }

    new BlurScrollEffect(text1.current, {
      start: 'top bottom-=30%',
      end: 'bottom center-=10%',
    });
    new BlurScrollEffect(text2.current, {
      start: 'top bottom-=30%',
      end: 'bottom center-=10%',
    });
    new BlurScrollEffect(text3.current, {
      start: 'top bottom-=10%',
      end: 'bottom center+=25%',
    });
  });

  return (
    <>
      <h2 className="font-lejour-serif w-full text-5xl">Itinerario</h2>
      <h2 className="-mt-4 mx-10 font-lejour-script w-full text-xl opacity-25">
        Lleno de momentos especiales
      </h2>
      <div className="flex flex-col justify-center items-center my-6">
        <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
        <div className="flex flex-col gap-10">
          <div ref={text1}>
            <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
              4 : 30
            </h2>
            <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
              Pm
            </h2>
            <h2
              className={`${marcellus.className} w-full text-center mt-2 tracking-widest`}
            >
              CEREMONIA
            </h2>
          </div>
          <div ref={text2}>
            <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
              5 : 30
            </h2>
            <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
              Pm
            </h2>
            <h2
              className={`${marcellus.className} w-full text-center mt-2 tracking-widest`}
            >
              COCTEL
            </h2>
          </div>
          <div ref={text3}>
            <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
              6 : 30
            </h2>
            <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
              Pm
            </h2>
            <h2
              className={`${marcellus.className} w-full text-center mt-2 tracking-widest`}
            >
              RECEPCIÓN
            </h2>
          </div>
        </div>
        <div className="mt-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
      </div>
    </>
  );
}
