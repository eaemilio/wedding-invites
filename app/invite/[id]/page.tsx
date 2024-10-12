'use client';

import { useEffect, useRef, useState } from 'react';
import DressCode from '@/components/DressCode';
import WelcomeMessage from '@/components/WelcomeMessage';
import TheDate from '@/components/TheDate';
import Schedule from '@/components/Schedule';
import Venue from '@/components/Venue';
import Countdown from '@/components/Countdown';
import Rsvp from '@/components/Rsvp';
import { once } from '@/utils/utils';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import imagesloaded from 'imagesloaded';
import Loader from '@/components/ui/loader';
import { useGSAP } from '@gsap/react';

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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (!mainContainerRef.current) {
      return;
    }

    const imgLoad = imagesloaded(mainContainerRef.current, {
      background: true,
    });

    imgLoad.on('done', () => setImagesLoaded(true));
    imgLoad.on('fail', () => setImagesLoaded(true));
  }, 1000);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    initSmoothScrolling();

    if (!video) {
      return;
    }

    video.addEventListener('loadeddata', () => {
      video.currentTime = 0;
      video.pause();
      setVideoLoaded(true);
    });

    once(document.documentElement, 'touchstart', function () {
      video.play();
      video.pause();
    });

    setTimeout(() => {
      const src = video.currentSrc || video.src;
      fetch(src)
        .then((response) => response.blob())
        .then((blob) => {
          const blobURL = URL.createObjectURL(blob);
          video.setAttribute('src', blobURL);
          video.currentTime = 0.01;
        });
    }, 1000);

    const handleScroll = () => {
      if (!container || !video) {
        return;
      }

      const scrollTop = window.scrollY;
      const scrollHeight = container.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / scrollHeight;
      video.currentTime = scrollFraction * video.duration;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(
    () => {
      if (imagesLoaded && videoLoaded) {
        gsap.to('.main-loader', {
          duration: 2,
          opacity: 0,
          ease: 'circ.out',
        });
      }
    },
    { dependencies: [imagesLoaded, videoLoaded] }
  );

  return (
    <div className="relative" ref={mainContainerRef}>
      <div
        className={`main-loader z-50 fixed w-screen h-screen flex items-center justify-center bg-zinc-950 text-xl text-white`}
      >
        <Loader />
      </div>
      <video
        ref={videoRef}
        src="../videos/output.mp4"
        playsInline={true}
        preload="auto"
        autoPlay
        muted
        className="video-background"
      />
      <div ref={containerRef} id="container">
        <div className="fixed z-20 top-2/3 left-5">
          <h3 className="font-lejour-script text-lg text-white">La boda de</h3>
          <h1 className="font-lejour-serif text-7xl text-white">
            EMILIO & YERALDY
          </h1>
        </div>
        <div className="z-10 fixed w-full h-full main-gradient"></div>
      </div>
      <div className="main-container relative z-20 snap-mandatory snap-y">
        <section className="w-full shrink-0 snap-start flex flex-col px-10 py-16 text-zinc-900">
          <WelcomeMessage />
        </section>
        <section className="relative w-full shrink-0 snap-start">
          <TheDate />
        </section>
        <section className="w-full shrink-0 snap-start px-10 py-16 text-zinc-900">
          <Schedule />
        </section>
        <section className="w-full shrink-0 snap-start bg-zinc-900 p-0 m-0">
          <DressCode />
        </section>
        <section className="w-full shrink-0 snap-start pb-16">
          <Venue />
        </section>
        <section className="w-full shrink-0 snap-start h-[350px] relative flex flex-col justify-center items-center">
          <Countdown />
        </section>
        <section className="w-full shrink-0 snap-start px-10 py-24 flex flex-col justify-center items-center">
          <Rsvp />
        </section>
      </div>

      <style jsx>{`
        .video-background {
          position: fixed;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
        }

        #container {
          height: 500vh;
        }
      `}</style>
    </div>
  );
}
