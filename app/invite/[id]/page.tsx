'use client';

import Image from 'next/image';
import { Marcellus, Playfair_Display } from 'next/font/google';
import MapButton from '@/components/MapButton';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const playfair = Playfair_Display({ subsets: [] });
const marcellus = Marcellus({ weight: '400', subsets: [] });

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Helper function for once event listener
  const once = (
    el: HTMLElement,
    event: string,
    fn: (e: Event) => void,
    opts?: AddEventListenerOptions
  ) => {
    const onceFn = (e: Event) => {
      el.removeEventListener(event, onceFn);
      fn(e);
    };
    el.addEventListener(event, onceFn, opts);
  };

  useEffect(() => {
    const video = videoRef.current;

    console.log(video);
    if (video) {
      const src = video.currentSrc || video.src;

      // Handle iOS video activation
      once(document.documentElement, 'touchstart', () => {
        video.play();
        video.pause();
      });

      // Scroll-triggered video scrub using GSAP
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '#container', // Adjust the container trigger as per your layout
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      once(video, 'loadedmetadata', () => {
        tl.fromTo(
          video,
          { currentTime: 0 },
          { currentTime: video.duration || 1 }
        );
      });

      // Fetch the video as a Blob for better performance (especially for iOS)
      setTimeout(() => {
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            const currentTime = video.currentTime;

            once(document.documentElement, 'touchstart', () => {
              video.play();
              video.pause();
            });

            video.setAttribute('src', blobURL);
            video.currentTime = currentTime + 0.01;
          });
      }, 1000);
    }
  }, []);

  return (
    <>
      <main className="flex-1 flex flex-col">
        <div
          id="container"
          className="relative h-dvh flex-col gap-6 overflow-y-auto"
        >
          <section className="h-full w-full shrink-0 snap-start">
            <div className="absolute z-20 top-2/3 left-5">
              <h3 className="font-lejour-script text-lg text-white">
                La boda de
              </h3>
              <h1 className="font-lejour-serif text-7xl text-white">
                Emilio & Yeraldy
              </h1>
            </div>
            <div className="z-10 absolute w-full h-full main-gradient"></div>
            <video
              ref={videoRef}
              src="/videos/master.mp4"
              className="object-cover w-full h-full"
              playsInline
              muted
            />
          </section>
          <section className="w-full shrink-0 snap-start flex flex-col px-10 py-16 text-zinc-900">
            <h2 className="font-lejour-serif w-full text-left text-5xl">
              Familia Barrientos
            </h2>
            <h2 className="-mt-4 mx-10 font-lejour-script w-full text-left text-xl opacity-25">
              Los invitamos a celebrar con nosotros
            </h2>
            <p className={`mt-10 ${playfair.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="relative w-full shrink-0 snap-start">
            <Image
              src="/images/SDYERALDYEMILIO-5.jpg"
              alt="wedding"
              className="object-cover"
              fill={true}
              unoptimized
            />
            <div className="z-10 absolute w-full h-full main-gradient"></div>
            <div className="w-full px-10 py-16">
              <h2 className="relative z-10 font-lejour-serif w-full text-5xl text-white">
                La fecha
              </h2>
              <h2 className="relative z-10 -mt-2 mx-10 font-lejour-script w-full text-xl text-white opacity-25">
                Que nunca olvidaremos
              </h2>
              <div className="relative z-10 mt-40 flex flex-col mb-20">
                <h2 className="font-lejour-serif w-full text-center text-7xl text-white tracking-tightest">
                  24
                </h2>
                <h2 className="font-lejour-script w-full text-center text-5xl text-white tracking-tightest">
                  Nov
                </h2>
                <h2 className="font-lejour-serif w-full text-center text-7xl text-white tracking-tightest">
                  24
                </h2>
              </div>
            </div>
          </section>
          <section className="w-full shrink-0 snap-start px-10 py-16 text-zinc-900">
            <h2 className="font-lejour-serif w-full text-5xl">Itinerario</h2>
            <h2 className="-mt-4 mx-10 font-lejour-script w-full text-xl opacity-25">
              Lleno de momentos especiales
            </h2>
            <div className="flex flex-col justify-center items-center my-6">
              <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
                    4 : 30
                  </h2>
                  <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
                    Pm
                  </h2>
                  <h2
                    className={`${marcellus.className} w-full text-center mt-2 tracking-widest`}
                  >
                    CEREMONIA
                  </h2>
                </div>
                <div>
                  <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
                    5 : 30
                  </h2>
                  <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
                    Pm
                  </h2>
                  <h2
                    className={`${marcellus.className} w-full text-center mt-2 tracking-widest`}
                  >
                    COCTEL
                  </h2>
                </div>
                <div>
                  <h2 className="font-lejour-serif w-full text-center text-6xl tracking-tightest">
                    6 : 30
                  </h2>
                  <h2 className="font-lejour-script w-full text-center text-3xl tracking-tightest -mt-4">
                    Pm
                  </h2>
                  <h2
                    className={`${marcellus.className} w-full text-center mt-2 tracking-widest`}
                  >
                    RECEPCIÓN
                  </h2>
                </div>
              </div>
              <div className="mt-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
            </div>
          </section>
          <section className="w-full shrink-0 snap-start bg-zinc-900 px-10 py-16">
            <h2 className="font-lejour-serif w-full text-5xl text-white">
              Dress Code
            </h2>
            <h2 className="-mt-3 mx-10 font-lejour-script w-full text-xl text-white opacity-25">
              Full black
            </h2>
            <div className="flex my-10">
              <div className="w-full h-[550px] relative">
                <Image
                  src="/images/dress-code.jpg"
                  alt="Dress code"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
          <section className="w-full shrink-0 snap-start">
            <div className="px-10 pt-16">
              <h2 className="font-lejour-serif w-full text-5xl text-zinc-900">
                Ubicación
              </h2>
              <h2 className="-mt-4 mx-10 font-lejour-script w-full text-xl opacity-25 text-zinc-900">
                El lago más hermoso del mundo
              </h2>
            </div>
            <div className="w-full h-72 relative flex flex-col justify-center items-center gap-2">
              <Image
                className="object-cover"
                src="/images/map.png"
                alt="map"
                fill={true}
                unoptimized
              />
              <MapButton map="maps" />
              <MapButton map="waze" />
            </div>

            <div className="w-full flex flex-col justify-center items-center mb-10">
              <label
                className={`font-lejour-serif z-10 w-full text-center mt-2 tracking-widest text-zinc-900 opacity-75`}
              >
                HOTEL JARDINES DEL LAGO
              </label>
              <label
                className={`${playfair.className} text-xs z-10 w-full text-center mt-2 tracking-widest text-zinc-900 opacity-75`}
              >
                Calle Monterrey, Panajachel
              </label>
              <label
                className={`${playfair.className} text-xs z-10 w-full text-center mt-2 tracking-widest text-zinc-900 opacity-75`}
              >
                7762 6114
              </label>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
