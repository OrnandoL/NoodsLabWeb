"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    void tryPlay();

    const resumeOnFirstInteraction = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    window.addEventListener("click", resumeOnFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("click", resumeOnFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }

    audio.pause();
    setPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/background-theme.mp3" type="audio/mpeg" />
      </audio>
      <button
        type="button"
        className="music-toggle-btn"
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? "Music: On" : "Music: Off"}
      </button>
    </>
  );
}
