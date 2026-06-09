"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function GlowCursor() {

    const mouseX = useMotionValue(0);

    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        damping: 20,
        stiffness: 120,
    });

    const smoothY = useSpring(mouseY, {
        damping: 20,
        stiffness: 120,
    });

    useEffect(() => {

        const moveCursor = (
            e: MouseEvent
        ) => {

            mouseX.set(e.clientX - 150);

            mouseY.set(e.clientY - 150);
        };

        window.addEventListener(
            "mousemove",
            moveCursor
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                moveCursor
            );
        };

    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x: smoothX,
                y: smoothY,
            }}

            className="
                pointer-events-none
                fixed
                left-0
                top-0
                z-[1]

                h-[300px]
                w-[300px]

                rounded-full

                bg-[radial-gradient(circle,_rgba(0,212,255,0.18)_0%,_rgba(157,78,221,0.12)_35%,_transparent_70%)]

                blur-3xl
            "
        />
    );
}