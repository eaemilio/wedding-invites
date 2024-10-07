import gsap from 'gsap';
import { TextSplitter } from './textSplitter';

interface BlurScrollOptions {
  start: string;
  end: string;
}
const DEFAULT_OPTIONS = { start: 'top bottom', end: 'bottom center+=15%' };

// Defines a class to create scroll-triggered animation effects on text.
export class BlurScrollEffect {
  public textElement: HTMLDivElement;
  public splitter?: TextSplitter;
  public options: BlurScrollOptions;

  constructor(
    textElement: HTMLDivElement,
    options?: Partial<BlurScrollOptions>
  ) {
    // Check if the provided element is valid.
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    this.textElement = textElement;
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    // Set up the effect for the provided text element.
    this.initializeEffect();
  }

  // Sets up the initial text effect on the provided element.
  initializeEffect() {
    // Callback to re-trigger animations on resize.
    const textResizeCallback = () => this.scroll();

    // Split text for animation and store the reference.
    this.splitter = new TextSplitter(this.textElement, {
      resizeCallback: textResizeCallback,
    });

    // Trigger the initial scroll effect.
    this.scroll();
  }

  // Animates text based on the scroll position.
  scroll() {
    if (!this.splitter) {
      return;
    }
    // Query all individual characters in the line for animation.
    const chars = this.splitter.getChars();
    gsap.fromTo(
      chars,
      {
        filter: 'blur(10px) brightness(30%)',
        willChange: 'filter',
      },
      {
        ease: 'none', // Animation easing.
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.05, // Delay between starting animations for each character.
        scrollTrigger: {
          trigger: this.textElement, // Element that triggers the animation.
          start: this.options.start, // Animation starts when element hits bottom of viewport.
          end: this.options.end, // Animation ends in the center of the viewport.
          scrub: true, // Animation progress tied to scroll position.
        },
      }
    );
  }
}
