import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import audioTrack from "../assets/audios/SoundHelix-Song-8.mp3";

const AudioController: React.FC<{ active: boolean }> = ({ active }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Thème orchestral épique puissant pour l'immersion (style Pirates / Cinematic)
  const audioUrl = audioTrack;

  useEffect(() => {
    if (!audioRef.current) return;

    const handleEnded = () => {
      if (!isPlaying) return;
      audioRef.current
        ?.play()
        .catch(() => null);
    };

    const audioEl = audioRef.current;
    audioEl.addEventListener("ended", handleEnded);

    return () => {
      audioEl.removeEventListener("ended", handleEnded);
    };
  }, [active, isPlaying]);

  const toggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.4;
        audioRef.current
          .play()
          .catch((e) =>
            console.log("Audio play blocked by browser interaction policy"),
          );
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-12 left-12 z-[70] flex items-center gap-6 group">
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        onClick={toggle}
        className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all shadow-2xl group-active:scale-95 backdrop-blur-xl"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-white" />
        ) : (
          <VolumeX className="w-6 h-6 text-slate-500" />
        )}
      </button>
      <div className="flex flex-col">
        <div className="mono text-[10px] uppercase font-black tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
          {isPlaying ? "AUDIO_LINK: ESTABLISHED" : "AUDIO_LINK: MUTED"}
        </div>
        <div className="mono text-[8px] uppercase tracking-widest text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
          {isPlaying
            ? "PLAYING_THEME: EPIC_COMMANDER"
            : "CLICK TO ENABLE SOUNDSCAPE"}
        </div>
      </div>
    </div>
  );
};

export default AudioController;
