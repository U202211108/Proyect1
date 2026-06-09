"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function PremiumCard({
    children,
}: Props) {

    const mouseX = useMotionValue(0);

    const mouseY = useMotionValue(0);

    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"])
    );

    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"])
    );

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {

        const rect =
            e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const x =
            (e.clientX - rect.left) / width - 0.5;

        const y =
            (e.clientY - rect.top) / height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}

            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}

            whileHover={{
                scale: 1.03,
            }}

            transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
            }}

            className="
                relative
                rounded-[35px]
            "
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0
                    rounded-[35px]

                    bg-gradient-to-r
                    from-cyan-400/20
                    via-violet-500/20
                    to-cyan-300/20

                    opacity-0
                    blur-2xl

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                "
            />

            {children}
        </motion.div>
    );
}