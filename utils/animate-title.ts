import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import gsap from 'gsap';

export const animateTitle = (container: HTMLDivElement) => {
  Splitting();

  const elements = [
    ...container.querySelectorAll(
      '.content__title[data-splitting][data-effect]'
    ),
  ];

  elements.forEach((title) => {
    const words = [...title.querySelectorAll('.word')];

    for (const word of words) {
      const chars = word.querySelectorAll('.char');
      const charsTotal = chars.length;

      gsap.fromTo(
        chars,
        {
          'will-change': 'transform, filter',
          transformOrigin: '50% 100%',
          scale: (position) => {
            const factor =
              position < Math.ceil(charsTotal / 2)
                ? position
                : Math.ceil(charsTotal / 2) -
                  Math.abs(Math.floor(charsTotal / 2) - position) -
                  1;
            return gsap.utils.mapRange(
              0,
              Math.ceil(charsTotal / 2),
              0.5,
              2.1,
              factor
            );
          },
          y: (position) => {
            const factor =
              position < Math.ceil(charsTotal / 2)
                ? position
                : Math.ceil(charsTotal / 2) -
                  Math.abs(Math.floor(charsTotal / 2) - position) -
                  1;
            return gsap.utils.mapRange(
              0,
              Math.ceil(charsTotal / 2),
              0,
              60,
              factor
            );
          },
          rotation: (position) => {
            const factor =
              position < Math.ceil(charsTotal / 2)
                ? position
                : Math.ceil(charsTotal / 2) -
                  Math.abs(Math.floor(charsTotal / 2) - position) -
                  1;
            return position < charsTotal / 2
              ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor)
              : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
          },
          filter: 'blur(12px) opacity(0)',
        },
        {
          ease: 'power2.inOut',
          y: 0,
          rotation: 0,
          scale: 1,
          filter: 'blur(0px) opacity(1)',
          scrollTrigger: {
            trigger: word,
            start: 'top bottom+=40%',
            end: 'top top+=15%',
            scrub: true,
          },
          stagger: {
            amount: 0.15,
            from: 'center',
          },
        }
      );
    }
  });
};
