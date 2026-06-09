"use client";

import { motion, AnimatePresence }
    from "framer-motion";

type Props = {
    isLoading: boolean;
};

export default function LoveLoader({
    isLoading,
}: Props) {

    return (
        <AnimatePresence>

            {
                isLoading && (
                    <motion.div

                        initial={{
                            opacity: 1,
                        }}

                        exit={{
                            opacity: 0,
                        }}

                        transition={{
                            duration: 1.5,
                        }}

                        className="
                            fixed
                            inset-0
                            z-[999]

                            flex
                            items-center
                            justify-center

                            overflow-hidden

                            bg-[#050816]
                        "
                    >
                        {/* Glow */}
                        <div
                            className="
                                absolute
                                h-[400px]
                                w-[400px]

                                rounded-full

                                bg-cyan-400/20

                                blur-3xl
                            "
                        />

                        <div
                            className="
                                absolute
                                h-[300px]
                                w-[300px]

                                rounded-full

                                bg-violet-500/20

                                blur-3xl
                            "
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                duration: 1,
                            }}

                            className="
                                relative
                                z-10
                                text-center
                            "
                        >
                            <h1
                                className="
                                    text-4xl
                                    font-bold

                                    bg-gradient-to-r
                                    from-cyan-300
                                    to-violet-400

                                    bg-clip-text
                                    text-transparent

                                    md:text-6xl
                                "
                            >
                                Con Mucho Amor, tu Leoncito 💜
                            </h1>

                            <p
                                className="
                                    mt-6
                                    text-lg
                                    tracking-[0.3em]
                                    text-white/70
                                "
                            >
                                CARGANDO AMOR...
                            </p>
                        </motion.div>
                    </motion.div>
                )
            }

        </AnimatePresence>
    );
}