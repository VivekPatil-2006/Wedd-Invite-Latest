"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/assets/audio/background.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
        fixed
        bottom-6
        right-6
        z-[9999]

        w-16
        h-16

        rounded-full

        bg-[#8B1E2D]
        text-white

        shadow-xl

        flex
        items-center
        justify-center

        text-2xl

        hover:scale-110
        transition
        "
      >
        {playing ? "🔊" : "🎵"}
      </button>
    </>
  );
}
