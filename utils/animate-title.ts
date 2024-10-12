import gsap from 'gsap';

export const animateTitle = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: 'h2',
        start: 'top bottom-=30%',
        end: 'center center+=5%',
        scrub: true,
      },
    })
    .to('h2', { opacity: 1, marginLeft: 0 })
    .to('h3', { opacity: 0.4, marginLeft: 20 }, '<');
};
