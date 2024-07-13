import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isOk, setOk] = useState(true);

  const timeoutIdRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const playMusic = () => {
      let ok = true;
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Autoplay was prevented:", error);
              ok = false;
              timeoutIdRef.current = setTimeout(playMusic, 1000); // 1 saniye sonra müziği çalmayı dene
            });
        }
        if (ok === true) {
          clearTimeout(timeoutIdRef.current);
        }
      }
    };

    timeoutIdRef.current = setTimeout(playMusic, 1000); // 1 saniye sonra müziği çalmayı dene

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleInteraction = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 flex items-center">
      <audio ref={audioRef} src="/assets/music/bg_music.mp3" loop />
      <button
        className="p-2 bg-gray-700 text-white rounded-full shadow-lg"
        onClick={togglePlayPause}
        onMouseDown={handleInteraction} // Kullanıcı fare ile butona tıkladığında etkileşime geçildi olarak kabul edilir.
        onTouchStart={handleInteraction} // Kullanıcı dokunmatik ekran ile butona tıkladığında etkileşime geçildi olarak kabul edilir.
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
