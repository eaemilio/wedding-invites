import React from 'react';
import { Button } from './ui/button';

export default function Rsvp() {
  return (
    <>
      <h2 className="font-lejour-serif text-9xl text-zinc-900">RS</h2>
      <h2 className="font-lejour-serif text-9xl text-zinc-900">VP</h2>
      <h2 className="font-lejour-script text-sm text-zinc-900">
        Confirma tu asistencia
      </h2>
      <Button className="mt-10 w-44 text-zinc-900" variant={'outline'}>
        Sí, asistiré
      </Button>
      <Button className="mt-2 w-44 text-zinc-900" variant={'outline'}>
        No asistiré
      </Button>
    </>
  );
}
