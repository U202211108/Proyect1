"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

export default function ParallaxBackground() {

    const { scrollY } = useScroll();

    const y1 = useTransform(
        scrollY,
        [0, 3000],
        [0, -250]
    );

    const y2 = useTransform(
        scrollY,
        [0, 3000],
        [0, -120]
    );

    return (
        <>
            {/* Orb 1 */}
            <motion.div
                style={{ y: y1 }}

                className="
                    fixed
                    left-[-150px]
                    top-[10%]

                    -z-40

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl
                "
            />

            {/* Orb 2 */}
            <motion.div
                style={{ y: y2 }}

                className="
                    fixed
                    right-[-200px]
                    top-[50%]

                    -z-40

                    h-[600px]
                    w-[600px]

                    rounded-full

                    bg-violet-500/10

                    blur-3xl
                "
            />

            {/* Orb 3 */}
            <motion.div
                style={{ y: y1 }}

                className="
                    fixed
                    left-[30%]
                    bottom-[-200px]

                    -z-40

                    h-[400px]
                    w-[400px]

                    rounded-full

                    bg-cyan-300/10

                    blur-3xl
                "
            />
        </>
    );
}