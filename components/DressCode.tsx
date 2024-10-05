'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import { Playfair_Display } from 'next/font/google';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const playfair = Playfair_Display({ subsets: [] });

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

export default function DressCode() {
  const component = useRef<HTMLDivElement>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null);

  const [flipState, setFlipState] = useState<Flip.FlipState | null>(null);

  useGSAP(
    () => {
      const galleryEl = gallery.current;
      if (!galleryEl) {
        return;
      }

      const galleryItemsInner = Array.from(
        galleryEl.querySelectorAll('.gallery__item')
      )
        .map((item) => (item.children.length > 0 ? [...item.children] : []))
        .flat();

      if (!flipState) {
        return;
      }

      const tl = Flip.to(flipState, {
        ease: 'none',
        absoluteOnLeave: false,
        absolute: false,
        scale: true,
        simple: true,
        scrollTrigger: {
          trigger: galleryEl,
          start: 'center center',
          end: '+=300%',
          pin: galleryEl.parentElement,
          scrub: true,
        },
        stagger: 0,
      }).fromTo(
        galleryItemsInner,
        {
          scale: 2,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: galleryEl,
            start: 'center center',
            end: '+=300%',
            scrub: true,
          },
        },
        0
      );
    },
    { scope: component, dependencies: [flipState] }
  );

  useEffect(() => {
    const galleryEl = gallery.current;
    initSmoothScrolling();

    if (!galleryEl) {
      return;
    }

    galleryEl.classList.add('gallery--switch');

    const galleryCaption = caption.current;
    const galleryItems = galleryEl.querySelectorAll('.gallery__item');
    const flipstate = Flip.getState([...galleryItems, galleryCaption], {
      props: 'filter, opacity',
    });

    galleryEl.classList.remove('gallery--switch');

    setFlipState(flipstate);
  }, []);

  return (
    <div className="gallery-wrap gallery-wrap--large" ref={component}>
      <div
        className="gallery gallery--grid gallery--breakout"
        id="gallery"
        ref={gallery}
      >
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/1.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/2.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/3.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/4.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/7.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/5.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/6.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/8.jpg)' }}
          ></div>
        </div>
        <div className="gallery__item gallery__item-cut">
          <div
            className="gallery__item-inner"
            style={{ backgroundImage: 'url(/images/9.jpg)' }}
          ></div>
        </div>
        <div className="caption flex flex-col px-10" ref={caption}>
          <h2 className="font-lejour-serif w-full text-left text-5xl text-white">
            Dress Code
          </h2>
          <h2 className="-mt-4 mx-10 font-lejour-script w-full text-left text-white text-xl opacity-55">
            Full Black
          </h2>
          <p className={`${playfair.className} text-white my-8`}>
            Hemos elegido el negro como color principal para reflejar elegancia
            y asegurar que las fotografías tengan un aspecto espectacular.
          </p>
        </div>
      </div>
    </div>
  );
}
