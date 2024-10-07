'use client';

import { BlurScrollEffect } from '@/utils/BlurScrollEffect';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const textContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textContainer.current) {
      return;
    }

    new BlurScrollEffect(textContainer.current);
  });

  return (
    <>
      <header className="frame frame--header type-small">
        <h1 className="frame__title">Blurry Text Reveal on Scroll</h1>
        <a className="frame__back" href="https://tympanus.net/codrops/?p=76992">
          Article
        </a>
        <a
          className="frame__archive"
          href="https://tympanus.net/codrops/demos/"
        >
          All demos
        </a>
        <a
          className="frame__github"
          href="https://github.com/codrops/ScrollBlurTypography/"
        >
          GitHub
        </a>
      </header>
      <section className="intro h-screen">
        <div className="intro__heading">
          <nav className="tags type-small">
            <a href="https://tympanus.net/codrops/demos/?tag=scroll">#scroll</a>
            <a href="https://tympanus.net/codrops/demos/?tag=typography">
              #typography
            </a>
          </nav>
          <h2>On-Scroll </h2>
          <p className="type-small">
            Howdy, cowboy! Before you go scrollin', simmer down and savor the
            ride. Yeehaw, but easy now!
          </p>
        </div>
      </section>
      <section className="content">
        <span className="content__number type-small">2</span>
        <div className="blur-text" ref={textContainer}>
          The mental equipment of the average individual consists of a mass of
          judgments on most of the subjects which touch his daily physical or
          mental life.
        </div>
      </section>
    </>
  );
}
