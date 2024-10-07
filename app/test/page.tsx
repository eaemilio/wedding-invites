'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const initSmoothScrolling = () => {
  // Instantiate the Lenis object with specified properties
  const lenis = new Lenis({
    lerp: 0.1, // Lower values create a smoother scroll effect
    smoothWheel: true, // Enables smooth scrolling for mouse wheel events
  });

  // Update ScrollTrigger each time the user scrolls
  lenis.on('scroll', () => ScrollTrigger.update());

  // Define a function to run at each animation frame
  const scrollFn = (time: number) => {
    lenis.raf(time); // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  };
  // Start the animation frame loop
  requestAnimationFrame(scrollFn);
};

export default function Index() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const contentElements = [
        ...document.querySelectorAll('.content--sticky'),
      ];
      const totalContentElements = contentElements.length;
      contentElements.forEach((el, position) => {
        const isLast = position === totalContentElements - 1;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top top',
              end: '+=100%',
              scrub: true,
            },
          })
          .to(
            el,
            {
              ease: 'none',
              startAt: { filter: 'brightness(100%) contrast(100%)' },
              filter: isLast ? 'none' : 'brightness(60%) contrast(135%)',
              yPercent: isLast ? 0 : -15,
            },
            0
          )
          // Animate the content inner image
          .to(
            el.querySelector('.content__img'),
            {
              ease: 'power1.in',
              yPercent: -40,
              rotation: -20,
            },
            0
          );
      });
    },
    { scope: container }
  );

  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <div className="wrap" ref={container}>
      <div className="content content--sticky content--grid bg-1">
        <h2 className="content__title">
          <i>The</i> Algorithm
        </h2>
        <p className="content__text content__text--left text-meta">
          The algorithm's workings are shrouded in complexity, and its
          decision-making processes are inscrutable to the general populace.
        </p>
      </div>
      <div className="content content--sticky content--grid bg-2">
        <h2 className="content__title">
          <i>The</i> Dogma
        </h2>
        <p className="content__text content__text--left text-meta">
          The digital gospel etched into the very code of the algorithmic
          society, served as the bedrock of the cognitive regime.
        </p>
      </div>
      <div className="content content--sticky content--grid bg-3">
        <h2 className="content__title">
          <i>The</i> Architects
        </h2>
        <p className="content__text content__text--left text-meta">
          The elusive entities, lacking human form, operate in the shadows,
          skillfully shaping societal norms through the complex interplay of
          algorithms and Dogmas.
        </p>
      </div>
      <div className="content content--sticky content--grid bg-4">
        <h2 className="content__title">
          <i>The</i> Wasteland
        </h2>
        <p className="content__text content__text--left text-meta">
          This overlooked realm, a consequence of algorithmic judgments, is a
          haunting landscape filled with the echoes of untold stories and
          uncharted thoughts.
        </p>
      </div>
      <div className="content content--sticky content--grid bg-5">
        <h2 className="content__title">
          <i>The</i> Narrative
        </h2>
        <p className="content__text content__text--left text-meta">
          "The Narrative" unfolds as the omnipresent thread weaving through the
          fabric of the algorithmic society.
        </p>
      </div>
      <div className="content content--sticky content--grid bg-6">
        <h2 className="content__title">
          <i>The</i> Opulence
        </h2>
        <p className="content__text content__text--left text-meta">
          "The Opulence" epitomizes the cognitive elite's wealth in the
          algorithmic society, where opulent thoughts and experiences shape the
          societal narrative.
        </p>
      </div>
    </div>
  );
}
