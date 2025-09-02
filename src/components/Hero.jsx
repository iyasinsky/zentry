import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Loader from './Loader';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(3);

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const getVideoPath = (idx) => `videos/hero-${idx}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIdx = (currentIdx % totalVideos) + 1;

  const handleMiniVideoPlayerClick = () => {
    setHasClicked(true);
    setCurrentIdx(upcomingVideoIdx);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set('#next-video', { visibility: 'visible' });
        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from('#current-video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        });
      }
    },
    {
      dependencies: [currentIdx],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
      borderRadius: '0% 0% 40% 10%',
    });
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0% 0% 0% 0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && <Loader />}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-moonlit-veil"
      >
        <div>
          <div className="absolute-center z-50 mask-clip-path size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVideoPlayerClick}
            >
              <video
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                ref={nextVideoRef}
                src={getVideoPath(upcomingVideoIdx)}
                loop
                muted
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            id="next-video"
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoPath(currentIdx)}
            loop
            muted
          />

          <video
            className="absolute left-0 top-0 size-full object-cover object-center"
            src={getVideoPath(currentIdx === totalVideos - 1 ? 1 : currentIdx)}
            onLoadedData={handleVideoLoad}
            // autoPlay
            loop
            muted
          />
        </div>
        <h2 className="hero-heading special-font absolute bottom-5 right-5 z-40 text-moonlit-veil">
          G<span className="font-feature">a</span>ming
        </h2>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h2 className="hero-heading text-celestial-fog">
              Redefi<span className="font-feature">n</span>e
            </h2>
            <p className="mb-5 max-w-64 font-robert font-medium text-celestial-fog">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              icon={<TiLocationArrow />}
              externalClasses="bg-luminous-spark"
            />
          </div>
        </div>
      </div>
      <h2 className="hero-heading special-font absolute bottom-5 right-5 text-black">
        G<span className="font-feature">a</span>ming
      </h2>
    </div>
  );
};

export default Hero;
