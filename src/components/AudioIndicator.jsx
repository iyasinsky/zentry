import { useState, useRef } from 'react';

export default function AudioIndicator() {
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
    <button onClick={togglePlay} className="flex gap-1 items-center transition mr-10">
      <audio ref={audioRef} src="/audio/loop.mp3" preload="auto" loop />
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={`rounded-sm ${isPlaying ? 'animate-sound' : ''} h-1 w-0.5 bg-white`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      rounded-full transition-all duration-200 ease-in-out
    </button>
  );
}
