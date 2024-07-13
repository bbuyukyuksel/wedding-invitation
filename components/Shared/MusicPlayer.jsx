"use client";
import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center">
      <audio ref={audioRef} src="/assets/music/bg_music.mp3" loop />
      <button
        className="p-2 bg-blue-500 text-white rounded-full shadow-lg"
        onClick={togglePlayPause}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
