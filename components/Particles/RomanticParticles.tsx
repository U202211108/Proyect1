"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

type Particle = {
    id: number;
    size: number;
    left: number;
    top: number;
    duration: number;
    color: string;
    glow: string;
};

export default function RomanticParticles() {

    const [particles, setParticles] =
        useState<Particle[]>([]);

    useEffect(() => {

        const generatedParticles =
            Array.from({ length: 40 }).map(
                (_, index) => ({
                    id: index,

                    size:
                        Math.random() * 6 + 2,

                    left:
                        Math.random() * 100,

                    top:
                        Math.random() * 100,

                    duration:
                        Math.random() * 4 + 3,

                    color:
                        index % 2 === 0
                            ? "#00D4FF"
                            : "#9D4EDD",

                    glow:
                        index % 2 === 0
                            ? "0 0 15px #00D4FF"
                            : "0 0 15px #9D4EDD",
                })
            );

        setParticles(generatedParticles);

    }, []);

    return (
        <div
            className="
                absolute
                inset-0
                overflow-hidden
                z-0
            "
        >
            {
                particles.map((particle) => (
                    <motion.div
                        key={particle.id}

                        className="
                            absolute
                            rounded-full
                        "

                        style={{
                            width: particle.size,
                            height: particle.size,

                            background:
                                particle.color,

                            left:
                                `${particle.left}%`,

                            top:
                                `${particle.top}%`,

                            boxShadow:
                                particle.glow,
                        }}

                        animate={{
                            y: [0, -30, 0],

                            opacity:
                                [0.3, 1, 0.3],
                        }}

                        transition={{
                            duration:
                                particle.duration,

                            repeat: Infinity,

                            ease: "easeInOut",
                        }}
                    />
                ))
            }
        </div>
    );
}