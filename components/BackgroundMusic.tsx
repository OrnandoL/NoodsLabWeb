"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const storageKey = "noods_lab_music_enabled";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
        localStorage.setItem(storageKey, "1");
      } catch {
        setPlaying(false);
      }
    };

    const savedPreference = localStorage.getItem(storageKey);
    if (savedPreference !== "0") {
      void tryPlay();
    }

    const resumeOnFirstInteraction = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setPlaying(true);
        localStorage.setItem(storageKey, "1");
      } catch {
        setPlaying(false);
      }
    };

    window.addEventListener("click", resumeOnFirstInteraction, { once: true });
    window.addEventListener("touchstart", resumeOnFirstInteraction, { once: true });
    window.addEventListener("keydown", resumeOnFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", resumeOnFirstInteraction);
      window.removeEventListener("touchstart", resumeOnFirstInteraction);
      window.removeEventListener("keydown", resumeOnFirstInteraction);
    };
  }, [storageKey]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
        localStorage.setItem(storageKey, "1");
      } catch {
        setPlaying(false);
      }
      return;
    }

    audio.pause();
    setPlaying(false);
    localStorage.setItem(storageKey, "0");
  };

  return (
    <>
      <audio ref={audioRef} autoPlay loop preload="auto" playsInline>
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
