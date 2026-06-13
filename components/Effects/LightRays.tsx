"use client";

import { motion } from "framer-motion";

export default function LightRays() {

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
                Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                        key={index}

                        animate={{
                            opacity: [0.08, 0.18, 0.08],
                            rotate: [-12, -8, -12],
                        }}

                        transition={{
                            duration: 8 + index * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}

                        className="
                            absolute
                            left-1/2
                            top-[-20%]

                            h-[1200px]
                            w-[180px]

                            -translate-x-1/2

                            bg-gradient-to-b
                            from-cyan-300/20
                            to-transparent

                            blur-3xl
                        "
                        style={{
                            transform:
                                `translateX(-50%) rotate(${index * 12 - 24}deg)`,
                        }}
                    />
                ))
            }
        </div>
    );
}