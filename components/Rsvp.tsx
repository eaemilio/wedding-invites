'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/client';
import { Guest } from '@/types/Guest';
import confetti from 'canvas-confetti';
import { playfair } from '@/constants';
import Loader from './ui/loader';

interface Props {
  guest: Guest;
}

export default function Rsvp({ guest }: Props) {
  const [rsvp, setRsvp] = useState(guest.rsvp);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState<number | null>(
    guest.confirmed_count ?? null
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target?.value || '0', 10);
    if (!value) {
      setInputValue(null);
      return;
    }
    setInputValue(value);
  };

  const submitAnswer = async (rsvp: boolean) => {
    const client = createClient();

    await client.from('guests').update({ rsvp }).eq('id', guest.id);
    setRsvp(rsvp);

    if (rsvp) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.8 },
        colors: ['#000000', '#555555', '#888888', '#CCCCCC'], // Black and gray tones
      });
    }
  };

  const updateCount = async () => {
    try {
      setIsLoading(true);
      const client = createClient();
      await client
        .from('guests')
        .update({ confirmed_count: inputValue ?? 0 })
        .eq('id', guest.id);
    } finally {
      setIsLoading(false);
    }
  };

  const assistance = guest.guests_count === 1 ? 'asistiré' : 'asistiremos';

  return (
    <>
      <h2 className="font-lejour-serif text-9xl text-zinc-900">RS</h2>
      <h2 className="font-lejour-serif text-9xl text-zinc-900">VP</h2>
      <h2 className="font-lejour-script text-sm text-zinc-900">
        Confirma tu asistencia
      </h2>
      <div className="flex flex-col gap-2 mt-10 w-56">
        <Button
          className={`hover:text-white hover:bg-zinc-900 w-full ${rsvp === true ? 'text-white bg-zinc-900' : 'text-zinc-900'}`}
          variant={rsvp === true ? 'default' : 'outline'}
          onClick={() => submitAnswer(true)}
        >
          Sí, {assistance}
        </Button>
        <Button
          className={`hover:text-white hover:bg-zinc-900 w-full ${rsvp === false ? 'text-white bg-zinc-900' : 'text-zinc-900'}`}
          variant={rsvp === false ? 'default' : 'outline'}
          onClick={() => submitAnswer(false)}
        >
          No {assistance}
        </Button>
      </div>

      {guest.guests_count > 1 && rsvp && (
        <div className="mt-10 w-56 flex flex-col gap-2 text-zinc-900">
          <p className={`${playfair.className} w-full text-center`}>
            ¿Cuántos asistirán?{' '}
            <span className="text-xs">(Máximo {guest.guests_count})</span>
          </p>
          <input
            type="number"
            placeholder="0"
            min={0}
            max={guest.guests_count}
            value={inputValue ?? ''}
            onChange={handleInputChange}
            className={`${playfair.className} bg-white mt-4 w-full text-center uppercase backdrop-blur-xl px-4 py-2 rounded-sm active:border-none focus:border-none active:outline-none focus:outline-none`}
          />
          <Button
            className="w-full text-white mt-2 bg-zinc-900"
            onClick={updateCount}
            disabled={
              isLoading ||
              !inputValue ||
              inputValue > guest.guests_count ||
              inputValue <= 0
            }
          >
            {isLoading ? <Loader size={30} /> : 'Confirmar'}
          </Button>
        </div>
      )}
    </>
  );
}
