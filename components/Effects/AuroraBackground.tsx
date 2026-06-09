"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {

    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                overflow-hidden
                -z-50
            "
        >
            {/* Aurora 1 */}
            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 1],
                }}

                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                className="
                    absolute
                    left-[-10%]
                    top-[10%]

                    h-[600px]
                    w-[600px]

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl
                "
            />

            {/* Aurora 2 */}
            <motion.div
                animate={{
                    x: [0, -120, 120, 0],
                    y: [0, 80, -80, 0],
                    scale: [1, 1.3, 1],
                }}

                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                className="
                    absolute
                    right-[-10%]
                    top-[40%]

                    h-[700px]
                    w-[700px]

                    rounded-full

                    bg-violet-500/10

                    blur-3xl
                "
            />

            {/* Aurora 3 */}
            <motion.div
                animate={{
                    x: [0, 80, -80, 0],
                    y: [0, -100, 50, 0],
                    scale: [1, 1.15, 1],
                }}

                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                className="
                    absolute
                    bottom-[-10%]
                    left-[25%]

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-fuchsia-500/10

                    blur-3xl
                "
            />
        </div>
    );
}