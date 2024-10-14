import React, { useState } from 'react';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/client';
import { Guest } from '@/types/Guest';
import confetti from 'canvas-confetti';

interface Props {
  guest: Guest;
}

export default function Rsvp({ guest }: Props) {
  const [rsvp, setRsvp] = useState(guest.rsvp);

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

  return (
    <>
      <h2 className="font-lejour-serif text-9xl text-zinc-900">RS</h2>
      <h2 className="font-lejour-serif text-9xl text-zinc-900">VP</h2>
      <h2 className="font-lejour-script text-sm text-zinc-900">
        Confirma tu asistencia
      </h2>
      <Button
        className={`hover:text-white hover:bg-zinc-900 mt-10 w-44 ${rsvp === true ? 'text-white bg-zinc-900' : 'text-zinc-900'}`}
        variant={rsvp === true ? 'default' : 'outline'}
        onClick={() => submitAnswer(true)}
      >
        Sí, asistiré
      </Button>
      <Button
        className={`hover:text-white hover:bg-zinc-900 mt-2 w-44 ${rsvp === false ? 'text-white bg-zinc-900' : 'text-zinc-900'}`}
        variant={rsvp === false ? 'default' : 'outline'}
        onClick={() => submitAnswer(false)}
      >
        No asistiré
      </Button>
    </>
  );
}
