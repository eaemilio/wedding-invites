declare module 'imagesloaded' {
  type ImagesLoadedCallback = (instance: ImagesLoaded) => void;

  type ProgressCallback = (instance: ImagesLoaded, image: LoadedImage) => void;

  interface ImagesLoaded {
    on(event: 'always' | 'done' | 'fail', callback: ImagesLoadedCallback): void;
    on(event: 'progress', callback: ProgressCallback): void;
    images: Array<{ isLoaded: boolean }>;
  }

  function imagesLoaded(
    elem: Element | Element[],
    options?: { background: boolean },
    callback?: ImagesLoadedCallback
  ): ImagesLoaded;

  export = imagesLoaded;
}
