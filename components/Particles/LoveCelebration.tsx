"use client";

import { motion } from "framer-motion";

const hearts = [
    { left: "5%", delay: 0 },
    { left: "15%", delay: 1 },
    { left: "25%", delay: 2 },
    { left: "35%", delay: 0.5 },
    { left: "45%", delay: 1.5 },
    { left: "55%", delay: 2.5 },
    { left: "65%", delay: 1 },
    { left: "75%", delay: 3 },
    { left: "85%", delay: 2 },
    { left: "95%", delay: 0.8 },
];

export default function LoveCelebration() {
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
            {hearts.map((heart, index) => (
                <motion.div
                    key={index}

                    initial={{
                        y: "100%",
                        opacity: 0,
                    }}

                    animate={{
                        y: "-120%",
                        opacity: [0, 1, 1, 0],
                        x: [0, -15, 15, 0],
                    }}

                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}

                    style={{
                        left: heart.left,
                    }}

                    className="
                        absolute
                        bottom-[-40px]
                        text-3xl
                        md:text-5xl
                    "
                >
                    💜
                </motion.div>
            ))}
        </div>
    );
}