import { Marcellus } from 'next/font/google';
import React from 'react';

const marcellus = Marcellus({ weight: '400', subsets: [] });

export default function Schedule() {
  return (
    <>
      <h2 className="font-lejour-serif w-full text-5xl">Itinerario</h2>
      <h2 className="-mt-4 mx-10 font-lejour-script w-full text-xl opacity-25">
        Lleno de momentos especiales
      </h2>
      <div className="flex flex-col justify-center items-center my-6">
        <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
        <div className="flex flex-col gap-10">
          <div>
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
          <div>
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
          <div>
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
