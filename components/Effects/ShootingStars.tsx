"use client";

import { motion } from "framer-motion";

const stars = [
    {
        id: 1,
        top: "10%",
        delay: 0,
        duration: 2.5,
    },

    {
        id: 2,
        top: "25%",
        delay: 1.5,
        duration: 3,
    },

    {
        id: 3,
        top: "40%",
        delay: 3,
        duration: 2.8,
    },

    {
        id: 4,
        top: "55%",
        delay: 4.5,
        duration: 3.2,
    },

    {
        id: 5,
        top: "70%",
        delay: 6,
        duration: 2.7,
    },

    {
        id: 6,
        top: "85%",
        delay: 7.5,
        duration: 3,
    },
];

export default function ShootingStars() {
    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                overflow-hidden
                z-0
            "
        >
            {
                stars.map((star) => (
                    <motion.div
                        key={star.id}

                        initial={{
                            x: -300,
                            y: 0,
                            opacity: 0,
                        }}

                        animate={{
                            x: 2200,
                            y: 800,

                            opacity: [
                                0,
                                1,
                                1,
                                0,
                            ],
                        }}

                        transition={{
                            duration:
                                star.duration,

                            repeat: Infinity,

                            repeatDelay: 2,

                            delay:
                                star.delay,

                            ease: "linear",
                        }}

                        style={{
                            top: star.top,
                            left: "-10%",
                        }}

                        className="
                            absolute
                            h-[3px]
                            w-[220px]

                            rotate-[25deg]

                            rounded-full

                            bg-gradient-to-r
                            from-white
                            via-cyan-300
                            to-transparent

                            shadow-[0_0_30px_rgba(255,255,255,1)]
                        "
                    />
                ))
            }
        </div>
    );
}