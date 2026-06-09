"use client";

import { motion } from "framer-motion";

import {
    useEffect,
    useState,
} from "react";

interface Star {
    id: number;
    left: string;
    top: string;
    size: number;
    duration: number;
}

export default function SpaceBackground() {

    const [stars, setStars] =
        useState<Star[]>([]);

    useEffect(() => {

        const generatedStars =
            Array.from({ length: 120 }).map(
                (_, index) => ({
                    id: index,

                    left:
                        `${Math.random() * 100}%`,

                    top:
                        `${Math.random() * 100}%`,

                    size:
                        Math.random() * 3 + 1,

                    duration:
                        Math.random() * 5 + 3,
                })
            );

        setStars(generatedStars);

    }, []);

    return (
        <div
            className="
                fixed
                inset-0
                -z-50
                overflow-hidden

                bg-[#050816]
            "
        >
            {/* Stars */}
            {
                stars.map((star) => (
                    <motion.div
                        key={star.id}

                        className="
                            absolute
                            rounded-full
                            bg-white
                        "

                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                        }}

                        animate={{
                            opacity: [0.2, 1, 0.2],
                        }}

                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))
            }

            {/* Nebula Glow */}
            <div
                className="
                    absolute
                    left-[-10%]
                    top-[10%]

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-cyan-500/10

                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    bottom-[-10%]
                    right-[-10%]

                    h-[600px]
                    w-[600px]

                    rounded-full

                    bg-violet-500/10

                    blur-3xl
                "
            />
        </div>
    );
}