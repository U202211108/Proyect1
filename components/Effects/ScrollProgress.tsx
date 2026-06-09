"use client";

import {
    motion,
    useScroll,
    useSpring,
} from "framer-motion";

export default function ScrollProgress() {

    const { scrollYProgress } =
        useScroll();

    const scaleX = useSpring(
        scrollYProgress,
        {
            stiffness: 120,
            damping: 30,
            restDelta: 0.001,
        }
    );

    return (
        <>
            {/* Glow */}
            <motion.div
                style={{
                    scaleX,
                    transformOrigin: "0%",
                }}

                className="
                    fixed
                    top-0
                    left-0
                    right-0

                    z-[999]

                    h-[6px]

                    bg-gradient-to-r
                    from-cyan-300
                    via-violet-400
                    to-cyan-300

                    shadow-[0_0_20px_rgba(0,212,255,0.8)]
                "
            />

            {/* Blur Aura */}
            <motion.div
                style={{
                    scaleX,
                    transformOrigin: "0%",
                }}

                className="
                    fixed
                    top-0
                    left-0
                    right-0

                    z-[998]

                    h-[12px]

                    bg-gradient-to-r
                    from-cyan-300/40
                    via-violet-400/40
                    to-cyan-300/40

                    blur-xl
                "
            />
        </>
    );
}