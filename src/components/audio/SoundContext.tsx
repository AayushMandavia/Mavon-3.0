"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSfx: (type: "beep" | "spark" | "shatter") => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playSfx: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/work-listing.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (soundEnabled) {
      audioRef.current.pause();
      setSoundEnabled(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setSoundEnabled(true);
        })
        .catch((e) => {
          console.warn("Audio playback blocked by browser:", e);
        });
    }
  };

  const playSfx = (type: "beep" | "spark" | "shatter") => {
    if (!soundEnabled) return;
    const fileMap: Record<string, string> = {
      beep: "/assets/hover-beep.mp3",
      spark: "/assets/hero-spark.mp3",
      shatter: "/assets/glass-shatter.mp3",
    };
    const src = fileMap[type];
    if (src) {
      const sfx = new Audio(src);
      sfx.volume = 0.25;
      sfx.play().catch(() => {});
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSfx }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSiteSound() {
  return useContext(SoundContext);
}
