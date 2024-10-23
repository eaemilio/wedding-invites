import { playfair } from '@/constants';
import React from 'react';
import { Button } from './ui/button';

export default function Gifts() {
  const goToRegistry = () => {
    // window.open('http://registry.emilioandyeraldy.com', '_blank');
  };
  return (
    <div className="w-full max-w-5xl">
      <h2 className="font-lejour-serif text-9xl">"</h2>
      <p className={`${playfair.className} -mt-24`}>
        El mejor regalo para nosotros es que puedas acompañarnos en este día tan
        especial. Sin embargo, si deseas tener un detalle especial con nosotros,
        hemos preparado un sistema de regalos que nos servirán para tener la
        aventura de nuestros sueños.
      </p>
      <Button
        className={`hover:bg-white hover:opacity-70 mt-10 w-56 text-zinc-900 bg-white`}
        onClick={goToRegistry}
      >
        Quiero Ser Parte
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
      </Button>
    </div>
  );
}
