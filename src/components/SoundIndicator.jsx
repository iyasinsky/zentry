import { useState, useRef } from 'react';

const SoundIndicator = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePlay} className="flex gap-0.5">
      <audio ref={audioRef} src="/audio/loop.mp3" preload="auto" loop />
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={`h-1 w-px rounded-full bg-white transition-transform duration-200 ease-in-out ${
            isPlaying ? 'animate-sound' : ''
          }`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </button>
  );
};

export default SoundIndicator;
