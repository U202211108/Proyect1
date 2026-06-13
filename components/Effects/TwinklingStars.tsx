"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function TwinklingStars() {

    const [stars, setStars] = useState<any[]>([]);

    useEffect(() => {

        const generatedStars =
            Array.from({ length: 25 }).map(
                (_, index) => ({

                    id: index,

                    left:
                        `${Math.random() * 100}%`,

                    top:
                        `${Math.random() * 100}%`,

                    size:
                        2 + Math.random() * 3,

                    duration:
                        2 + Math.random() * 4,

                    delay:
                        Math.random() * 5,
                })
            );

        setStars(generatedStars);

    }, []);

    return (
        <div
            className="
                absolute
                inset-0
                overflow-hidden
                pointer-events-none
                z-0
            "
        >
            {
                stars.map((star) => (

                    <motion.div
                        key={star.id}

                        initial={{
                            opacity: 0.2,
                            scale: 0.8,
                        }}

                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}

                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}

                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}

                        className="
                            absolute
                            rounded-full
                            bg-white

                            shadow-[0_0_10px_rgba(255,255,255,0.8)]
                        "
                    />
                ))
            }
        </div>
    );
}