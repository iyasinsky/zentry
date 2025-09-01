import { useRef, useState } from 'react';

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(3);

  const totalVideos = 3;
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
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
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
            autoPlay
            loop
            muted
          />
        </div>
        <h1 className="hero-heading special-font absolute bottom-5 right-5 z-40 text-moonlit-veil">
          G<span className="font-feature">a</span>ming
        </h1>
      </div>
    </div>
  );
};

export default Hero;
