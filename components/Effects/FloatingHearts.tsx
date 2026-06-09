"use client";

import { motion } from "framer-motion";

import {
    useEffect,
    useState,
} from "react";

interface Heart {
    id: number;
    left: string;
    size: number;
    duration: number;
    delay: number;
}

export default function FloatingHearts() {

    const [hearts, setHearts] =
        useState<Heart[]>([]);

    useEffect(() => {

        const generatedHearts =
            Array.from({ length: 15 }).map(
                (_, index) => ({
                    id: index,

                    left:
                        `${Math.random() * 100}%`,

                    size:
                        18 + Math.random() * 28,

                    duration:
                        10 + Math.random() * 10,

                    delay:
                        Math.random() * 10,
                })
            );

        setHearts(generatedHearts);

    }, []);

    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                overflow-hidden
                -z-30
            "
        >
            {
                hearts.map((heart) => (
                    <motion.div
                        key={heart.id}

                        initial={{
                            y: "110vh",
                            opacity: 0,
                        }}

                        animate={{
                            y: "-20vh",

                            opacity: [
                                0,
                                0.15,
                                0.25,
                                0.15,
                                0,
                            ],
                        }}

                        transition={{
                            duration:
                                heart.duration,

                            repeat: Infinity,

                            delay:
                                heart.delay,

                            ease: "linear",
                        }}

                        style={{
                            left: heart.left,

                            fontSize:
                                `${heart.size}px`,
                        }}

                        className="
                            absolute
                            text-pink-300/30

                            blur-[0.3px]
                        "
                    >
                        💜
                    </motion.div>
                ))
            }
        </div>
    );
}