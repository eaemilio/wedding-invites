'use client';

import { Playfair_Display } from 'next/font/google';
import React from 'react';
const playfair = Playfair_Display({ subsets: [] });

export default function MapButton() {
  const goToLocation = () => {
    const now = new Date().valueOf();
    window.location.href =
      'waze://?ll=14.7405099%2C-91.1648109&navigate=yes&zoom=17';

    setTimeout(function () {
      if (new Date().valueOf() - now > 100) {
        window.open(
          'https://www.google.com/maps/place/Hotel+y+Centro+de+Convenciones+Jardines+del+Lago/@14.7405099,-91.1648109,17z/data=!3m1!4b1!4m9!3m8!1s0x85894b8fa76d3cbf:0x1c3db4c0e4b055eb!5m2!4m1!1i2!8m2!3d14.7405099!4d-91.162236!16s%2Fg%2F1hc1wk9tz?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D',
          '_blank'
        );
      }
    }, 100);
  };

  return (
    <button
      className={`${playfair.className} z-10 bg-zinc-900 text-white pl-12 pr-11 py-2 flex text-sm justify-center items-center`}
      onClick={() => goToLocation()}
    >
      Abrir Mapa
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4 ml-1 mt-1"
      >
        <path
          fillRule="evenodd"
          d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
