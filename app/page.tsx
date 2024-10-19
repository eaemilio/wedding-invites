'use client';

import { Button } from '@/components/ui/button';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const playfair = Playfair_Display({ subsets: [] });

export default function Index() {
  const codeInput = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsButtonEnabled(value.length === 6);
  };

  useEffect(() => {
    if (codeInput.current) {
      codeInput.current.focus();
    }
  }, [codeInput]);

  const submit = () => {
    if (inputValue) {
      window.location.href = `/invite/${inputValue.toUpperCase()}`;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="z-10 fixed w-full h-full main-gradient"></div>
      <Image
        src="/images/12.jpg"
        alt="wedding"
        className="object-cover"
        fill={true}
        unoptimized
        style={{ filter: 'blur(3px)', transform: 'scale(1.1)' }}
      />
      <div className="relative z-30 p-10 flex flex-col items-center justify-center">
        <svg
          width="100"
          height="125"
          viewBox="0 0 172 277"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 opacity-70"
        >
          <g>
            <path
              d="M170.54 30.62C170.54 30.62 170.54 30.6 170.54 30.59C170.02 29.25 169.31 27.95 168.35 26.75C166.24 24.11 161.56 20.13 157.38 21.91C148.87 26.34 154.02 40.4 163.9 39.34C165.63 39.34 168.02 38.77 169.76 36.1C168.87 42.91 168.69 46.3 168.54 47.05C159.06 81.52 141.54 166.87 134.6 194.04C131.38 208.46 110.36 235.43 95.98 217.13C91.14 210.33 90.97 201.72 96.48 195.83C107.73 181.86 133.44 176.75 135.77 156.89C136.38 151.75 134.83 147.22 132.82 142.99C129.77 136.22 133.8 122.25 124.72 101.22L105.83 57.39C105.01 55.48 106.41 53.35 108.49 53.35H112.88V51.49H72.67V53.35H76.92C79.79 53.35 82.38 55.04 83.55 57.65C84.41 59.56 85.51 61.88 86.86 64.68C80.4 79.36 51.59 76.21 40.95 70.71C32.25 65.52 29.87 57.24 29.91 48.91V0.83H64.57C76.91 1.51 104.24 17.32 110.97 27.66L106.77 0.84L0 0C1.87 0.75 4.72 2.16 7.55 4.75C10.56 7.51 12.25 10.44 13.14 12.3V49.2C14.87 61.01 31.77 75.22 43.17 76.93C15.75 86 1.81 122.06 19.57 150.38C41.45 181.01 103.4 183.61 113.84 136.42L113.91 134.47C113.65 126.87 103.68 124.56 101.61 131.52C98.85 137.07 105.61 144.79 111.55 141.43C98.92 172.97 51.7 176.45 36.33 149.26C21.63 127.17 24.06 91.38 51.7 77.42C66.41 73.59 80.71 75.59 96.2 84.37C107.49 107.59 121.35 134.57 127.2 144.4C131.94 151.6 134.41 160.31 128.63 168.58C118.59 181.13 100.47 186.52 90.35 199.36C84.34 206.26 84.33 217.3 92.13 222.72C111.74 234 133.65 210.06 136.65 191.71C142.53 165.87 164.94 70.57 170.74 44.36C170.99 42.84 171.33 41.82 171.26 41.27C171.88 38.13 171.91 34.21 170.53 30.6L170.54 30.62Z"
              fill="#020202"
            />
          </g>
        </svg>

        <h1 className={`${playfair.className} text-white text-center mb-4`}>
          Ingresa tu codigo de invitación
        </h1>
        <input
          ref={codeInput}
          type="text"
          placeholder="DH3KL0"
          maxLength={6}
          onChange={handleInputChange}
          className={`${playfair.className} w-56 text-center text-white uppercase backdrop-blur-xl bg-transparent px-4 py-2 rounded-sm active:border-none focus:border-none active:outline-none focus:outline-none`}
        />
        <Button
          className="w-56 text-white mt-2 bg-zinc-900"
          onClick={submit}
          disabled={!isButtonEnabled}
        >
          Acceder
        </Button>
      </div>
    </div>
  );
}
