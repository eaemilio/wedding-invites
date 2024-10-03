import Image from 'next/image';
import { Marcellus, Playfair, Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: [] });
const marcellus = Marcellus({ weight: '400', subsets: [] });

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col">
        <div className="relative h-screen snap-y snap-mandatory flex-col gap-6 overflow-y-auto">
          <section className="h-full w-full shrink-0 snap-start">
            <div className="absolute z-20 top-3/4 left-5">
              <h3 className="font-lejour-script text-lg text-white">
                La boda de
              </h3>
              <h1 className="font-lejour-serif text-7xl text-white">
                Emilio & Yeraldy
              </h1>
            </div>
            <div className="z-10 absolute w-full h-full main-gradient"></div>
            <Image
              src="/images/SDYERALDYEMILIO-40.jpg"
              alt="wedding"
              className="object-cover"
              fill={true}
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
          <section className="w-full shrink-0 snap-start bg-zinc-900 px-10 py-16"></section>
        </div>
      </main>
    </>
  );
}
