"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

export default function MusicPlayer() {
    const audioRef =
        useRef<HTMLAudioElement | null>(null);

    const [playing, setPlaying] =
        useState(false);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.volume = 0.4;

        const playAudio = async () => {
            try {
                await audio.play();

                setPlaying(true);
            } catch {
                console.log(
                    "Autoplay bloqueado por navegador"
                );
            }
        };

        playAudio();
    }, []);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (playing) {
            audio.pause();

            setPlaying(false);
        } else {
            await audio.play();

            setPlaying(true);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                src="/music/our-song.mp3"
            />

            <motion.button
                onClick={toggleMusic}

                whileHover={{
                    scale: 1.1,
                }}

                whileTap={{
                    scale: 0.95,
                }}

                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                    rounded-full
                    border
                    border-cyan-300/30
                    bg-white/10
                    p-4
                    text-2xl
                    text-white
                    backdrop-blur-xl
                    shadow-[0_0_30px_rgba(0,212,255,0.25)]
                "
            >
                {playing ? "🎵" : "🔇"}
            </motion.button>
        </>
    );
}