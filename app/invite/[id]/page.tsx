'use client';

import Image from 'next/image';
import { Marcellus, Playfair_Display } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import MapButton from '@/components/MapButton';
import { calculateTimeLeft } from '@/utils/time.utils';
import { Button } from '@/components/ui/button';
import DressCode from '@/components/DressCode';

const playfair = Playfair_Display({ subsets: [] });
const marcellus = Marcellus({ weight: '400', subsets: [] });

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    function once(
      el: HTMLElement,
      event: string,
      fn: (...args: any[]) => void
    ) {
      const onceFn = function (this: any, ...args: any[]) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, args);
      };
      el.addEventListener(event, onceFn);
      return onceFn;
    }

    const forcePause = () => {
      if (!video) return;
      video.currentTime = 0;
      video.pause();
    };

    video?.addEventListener('loadeddata', forcePause);

    if (video) {
      once(document.documentElement, 'touchstart', function () {
        video.play();
        video.pause();
      });

      const fetchVideo = () => {
        const src = video.currentSrc || video.src;
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            video.setAttribute('src', blobURL);
            video.currentTime = 0.01;
          });
      };

      setTimeout(fetchVideo, 1000);

      const handleScroll = () => {
        if (container && video) {
          const scrollTop = window.scrollY;
          const scrollHeight = container.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / scrollHeight;
          video.currentTime = scrollFraction * video.duration;
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative">
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
          <h2 className="font-lejour-serif w-full text-left text-5xl">
            Familia Barrientos
          </h2>
          <h2 className="-mt-4 mx-10 font-lejour-script w-full text-left text-xl opacity-25">
            Los invitamos a celebrar con nosotros
          </h2>
          <p className={`mt-10 ${playfair.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <DressCode />
        <section className="w-full shrink-0 snap-start pb-16">
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

          <div className="w-full flex flex-col justify-center items-center">
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
        {hasMounted && (
          <section className="w-full shrink-0 snap-start h-[350px] relative flex flex-col justify-center items-center">
            <Image
              src="/images/SDYERALDYEMILIO-23.jpg"
              alt="Cuenta Regresiva"
              fill={true}
              className="object-cover"
            />
            <div className="absolute w-full h-full main-gradient"></div>
            <div className="z-10">
              <h2 className={`font-lejour-script w-full text-xl text-white`}>
                Cuenta Regresiva
              </h2>
              <div className="flex w-full justify-center mt-6 gap-4 opacity-90">
                <div className="flex flex-col items-center w-[54px]">
                  <span
                    className={`${playfair.className} text-white text-5xl mb-4`}
                  >
                    {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                  </span>
                  <span className={`${playfair.className} text-white text-xs`}>
                    Días
                  </span>
                </div>
                <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
                <div className="flex flex-col items-center w-[54px]">
                  <span
                    className={`${playfair.className} text-white text-5xl mb-4`}
                  >
                    {timeLeft.hours < 10
                      ? `0${timeLeft.hours}`
                      : timeLeft.hours}
                  </span>
                  <span className={`${playfair.className} text-white text-xs`}>
                    Horas
                  </span>
                </div>
                <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
                <div className="flex flex-col items-center w-[54px]">
                  <span
                    className={`${playfair.className} text-white text-5xl mb-4`}
                  >
                    {timeLeft.minutes < 10
                      ? `0${timeLeft.minutes}`
                      : timeLeft.minutes}
                  </span>
                  <span className={`${playfair.className} text-white text-xs`}>
                    Minutos
                  </span>
                </div>
                <div className="mb-8 h-[75px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
                <div className="flex flex-col items-center w-[54px]">
                  <span
                    className={`${playfair.className} text-white text-5xl mb-4`}
                  >
                    {timeLeft.seconds < 10
                      ? `0${timeLeft.seconds}`
                      : timeLeft.seconds}
                  </span>
                  <span className={`${playfair.className} text-white text-xs`}>
                    Segundos
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="w-full shrink-0 snap-start px-10 py-24 flex flex-col justify-center items-center">
          <h2 className="font-lejour-serif text-9xl text-zinc-900">RS</h2>
          <h2 className="font-lejour-serif text-9xl text-zinc-900">VP</h2>
          <h2 className="font-lejour-script text-sm text-zinc-900">
            Confirma tu asistencia
          </h2>
          <Button className="mt-10 w-44" variant={'outline'}>
            Sí, asistiré
          </Button>
          <Button className="mt-2 w-44" variant={'outline'}>
            No asistiré
          </Button>
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
