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
  }, []);

  const submit = () => {
    if (inputValue) {
      window.location.href = `/invite/${inputValue}`;
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
        <Image
          src="/images/logo.svg"
          alt="wedding"
          className="object-cover mb-2 opacity-40"
          width={75}
          height={125}
          unoptimized
        />
        <h1 className={`${playfair.className} text-white text-center mb-10`}>
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
