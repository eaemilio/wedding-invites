'use client';

import { useEffect, useRef } from 'react';

const VideoScroll = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    // Ensure the video is activated on iOS
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

    if (video) {
      // Play and pause video on first touch
      once(document.documentElement, 'touchstart', function () {
        video.play();
        video.pause();
      });

      // Fetch video for blob URL
      const fetchVideo = () => {
        const src = video.currentSrc || video.src;
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            video.setAttribute('src', blobURL);
            video.currentTime = 0.01; // Avoids playback issue
          });
      };

      setTimeout(fetchVideo, 1000); // Fetch video after 1 second

      // Handle scroll event to play video based on scroll position
      const handleScroll = () => {
        if (container && video) {
          const scrollTop = window.scrollY;
          const scrollHeight = container.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / scrollHeight;
          video.currentTime = scrollFraction * video.duration; // Update video currentTime
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src="videos/output.mp4"
        playsInline={true}
        preload="auto"
        muted
        className="video-background"
      />
      <div ref={containerRef} id="container"></div>

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
};

export default VideoScroll;
