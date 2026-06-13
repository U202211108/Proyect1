"use client";

import { motion } from "framer-motion";

import RomanticParticles from "../Particles/RomanticParticles";

import LightRays
    from "@/components/Effects/LightRays";

import TwinklingStars
    from "@/components/Effects/TwinklingStars";

export default function HeroSection() {

    const scrollToLetter = () => {
        const section = document.getElementById("love-letter");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section style={{ minHeight: "100vh" }}

            className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        text-center
      "
        >

            <TwinklingStars />

            <LightRays />

            <RomanticParticles />

            {/* Glow Background */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
            />

            <div
                className="
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-500/20
          blur-3xl
        "
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                }}
                className="relative z-20 max-w-4xl"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="
            mb-4
            text-sm
            uppercase
            tracking-[0.3em]
            text-cyan-100/80
            md:text-base
          "
                >
                    Para Nicole, el Amor de mi Vida 💜
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                    }}
                    className="
            gradient-text animated-gradient
            glow-text
            text-5xl
            font-bold
            leading-tight
            md:text-7xl
            drop-shadow-[0_0_35px_rgba(0,212,255,0.35)]
          "
                >
                    Nuestra Historia de Amor
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 3,
                        repeat: Infinity,
                    }}
                    className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-gray-300
            md:text-2xl
          "
                >
                    Hace un mes comenzó la historia
                    más hermosa de mi vida...
                </motion.p>

                <motion.button
                    onClick={scrollToLetter}

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: [0, -8, 0],
                    }}

                    transition={{
                        opacity: {
                            delay: 1.5,
                            duration: 0.8,
                        },

                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}

                    whileHover={{
                        scale: 1.05,
                    }}

                    whileTap={{
                        scale: 0.95,
                    }}

                    className="
        mt-10
        rounded-full
        border
        border-cyan-300/30

        bg-white/10

        px-10
        py-4

        text-lg
        font-semibold
        text-white

        backdrop-blur-md

        transition-all
        duration-300

        hover:border-cyan-200
        hover:bg-cyan-400/20

        hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]

        shadow-[0_0_20px_rgba(0,212,255,0.25)]
    "
                >
                    Comenzar ✨
                </motion.button>
            </motion.div>

            {/* Bottom Gradient */}
            <div
                className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-black
          to-transparent
        "
            />
        </section>
    );
}