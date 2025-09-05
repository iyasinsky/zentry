import { useRef, useState } from 'react';

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
    <button onClick={togglePlay} className="flex items-end space-x-0.5">
      <audio ref={audioRef} src="/audio/loop.mp3" preload="auto" loop />
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={`indicator-line ${isPlaying ? 'active' : ''}`}
          style={{ '--order': i }}
        />
      ))}
    </button>
  );
};

export default SoundIndicator;
