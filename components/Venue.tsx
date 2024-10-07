import Image from 'next/image';
import React from 'react';
import MapButton from './MapButton';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: [] });

export default function Venue() {
  return (
    <>
      <div className="px-10 pt-16">
        <h2 className="font-lejour-serif w-full text-5xl text-zinc-900">
          Ubicación
        </h2>
        <h2 className="-mt-4 mx-10 font-lejour-script w-full text-xl opacity-25 text-zinc-900">
          El lago más hermoso del mundo
        </h2>
      </div>
      <div className="w-full h-72 relative flex flex-col justify-center items-center gap-2">
        <Image
          className="object-cover"
          src="/images/map.png"
          alt="map"
          fill={true}
          unoptimized
        />
        <MapButton map="maps" />
        <MapButton map="waze" />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <label
          className={`font-lejour-serif z-10 w-full text-center mt-2 tracking-widest text-zinc-900 opacity-75`}
        >
          HOTEL JARDINES DEL LAGO
        </label>
        <label
          className={`${playfair.className} text-xs z-10 w-full text-center mt-2 tracking-widest text-zinc-900 opacity-75`}
        >
          Calle Monterrey, Panajachel
        </label>
        <label
          className={`${playfair.className} text-xs z-10 w-full text-center mt-2 tracking-widest text-zinc-900 opacity-75`}
        >
          7762 6114
        </label>
      </div>
    </>
  );
}