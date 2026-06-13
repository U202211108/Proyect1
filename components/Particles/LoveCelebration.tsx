"use client";

import { motion } from "framer-motion";

const hearts = [
    { left: "5%", delay: 0, size: "text-3xl" },
    { left: "15%", delay: 1, size: "text-5xl" },
    { left: "25%", delay: 2, size: "text-4xl" },
    { left: "35%", delay: 0.5, size: "text-6xl" },
    { left: "45%", delay: 1.5, size: "text-4xl" },
    { left: "55%", delay: 2.5, size: "text-5xl" },
    { left: "65%", delay: 1, size: "text-3xl" },
    { left: "75%", delay: 3, size: "text-6xl" },
    { left: "85%", delay: 2, size: "text-4xl" },
    { left: "95%", delay: 0.8, size: "text-5xl" },
];

export default function LoveCelebration() {

    return (
        <div
            className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
                z-0
            "
        >
            {
                hearts.map((heart, index) => (

                    <motion.div
                        key={index}

                        initial={{
                            y: "120%",
                            opacity: 0,
                            rotate: -15,
                            scale: 0.8,
                        }}

                        animate={{
                            y: "-120%",

                            x: [0, -20, 20, -10, 0],

                            rotate: [-15, 15, -10, 10],

                            scale: [0.8, 1.1, 1],

                            opacity: [
                                0,
                                0.7,
                                0.9,
                                0.7,
                                0,
                            ],
                        }}

                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            delay: heart.delay,
                            ease: "easeInOut",
                        }}

                        style={{
                            left: heart.left,
                        }}

                        className={`
                            absolute
                            bottom-[-60px]

                            ${heart.size}

                            blur-[0.4px]

                            drop-shadow-[0_0_20px_rgba(255,0,150,0.5)]
                        `}
                    >
                        💜
                    </motion.div>
                ))
            }
        </div>
    );
}