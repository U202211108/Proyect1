"use client";

import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";

interface Props {
    children: React.ReactNode;
}

export default function InteractiveCard({
    children,
}: Props) {

    const rotateX =
        useMotionValue(0);

    const rotateY =
        useMotionValue(0);

    const glareX =
        useTransform(
            rotateY,
            [-15, 15],
            ["0%", "100%"]
        );

    const glareY =
        useTransform(
            rotateX,
            [-15, 15],
            ["0%", "100%"]
        );

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {

        const rect =
            e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX =
            e.clientX - rect.left;

        const mouseY =
            e.clientY - rect.top;

        const rotateYValue =
            ((mouseX / width) - 0.5) * 20;

        const rotateXValue =
            ((mouseY / height) - 0.5) * -20;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}

            onMouseLeave={reset}

            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}

            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}

            className="
                relative
                rounded-[40px]
            "
        >
            {/* Glow */}
            <motion.div
                style={{
                    background:
                        `radial-gradient(circle at ${glareX} ${glareY},
                        rgba(255,255,255,0.18),
                        transparent 40%)`,
                }}

                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[40px]
                "
            />

            {children}
        </motion.div>
    );
}