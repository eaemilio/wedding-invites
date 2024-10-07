import SplitType from 'split-type';

// Defines a debounce function to limit the rate at which a function can fire.
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>; // Holds a reference to the timeout between calls.
  return (...args: any[]) => {
    clearTimeout(timerId); // Clears the current timeout, if any, to reset the debounce timer.
    timerId = setTimeout(() => {
      func.apply(this, args); // Calls the passed function after the specified delay with the correct context and arguments.
    }, delay);
  };
};

// Defines a class to split text into lines, words, and characters for animation.
export class TextSplitter {
  private textElement: HTMLElement;
  private onResize: (() => void) | null;
  private splitText: SplitType;
  private previousContainerWidth: number | null;

  // Constructor for TextScrollEffect which sets up the text animation.
  // Parameters:
  //   textElement: HTMLElement - The DOM element that contains the text to be animated.
  //   options: Object (optional) - Configuration options for the text splitting and callbacks.
  //     options.resizeCallback: Function - A function to call on window resize events.
  //     options.splitTypeTypes: String - Specifies the types of splits to perform on the text.
  //         Possible values are based on SplitType's configuration, such as 'lines', 'words', 'chars'.
  //         See SplitType documentation for more details: https://github.com/lukePeavey/SplitType
  constructor(
    textElement: HTMLElement,
    options: { resizeCallback?: () => void } = {}
  ) {
    // Ensure the textElement is a valid HTMLElement.
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    const { resizeCallback } = options;

    this.textElement = textElement;
    this.onResize =
      typeof resizeCallback === 'function' ? resizeCallback : null;

    this.splitText = new SplitType(this.textElement, { types: 'chars,words' });

    // Initialize ResizeObserver to re-split text on resize events, if a resize callback is provided.
    if (this.onResize) {
      this.initResizeObserver(); // Set up observer to detect resize events.
    }

    this.previousContainerWidth = null;
  }

  // Sets up ResizeObserver to re-split text on element resize.
  private initResizeObserver() {
    let resizeObserver = new ResizeObserver(
      debounce(
        (entries: ResizeObserverEntry[]) => this.handleResize(entries),
        100
      )
    );
    resizeObserver.observe(this.textElement); // Start observing the text element.
  }

  // Handles element resize, re-splitting text if width changes.
  private handleResize(entries: ResizeObserverEntry[]) {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);

    // If element width changed, re-split text and call resize callback.
    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split({}); // Re-split text for new width.
      if (this.onResize) this.onResize(); // Execute the callback function.
    }
    this.previousContainerWidth = width; // Update stored width.
  }

  // Returns the lines created by splitting the text element.
  getLines(): HTMLElement[] {
    return this.splitText.lines ?? [];
  }

  // Returns the words created by splitting the text element.
  getWords(): HTMLElement[] {
    return this.splitText.words ?? [];
  }

  // Returns the chars created by splitting the text element.
  getChars(): HTMLElement[] {
    return this.splitText.chars ?? [];
  }
}
