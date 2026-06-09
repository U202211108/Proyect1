"use client";

import { motion } from "framer-motion";

import Reveal
    from "@/components/Effects/Reveal";

import InteractiveCard
    from "@/components/Effects/InteractiveCard";

const reasons = [
    "Porque contigo siento paz 💜",
    "Porque haces mis días más felices ✨",
    "Porque Dios te puso en mi camino 🌸",
    "Porque tu sonrisa ilumina mi corazón 🌙",
    "Porque contigo puedo ser yo mismo 🤍",
    "Porque eres una bendición para mi vida 🙏",
    "Porque cada conversación contigo vale oro 💎",
    "Porque me haces sentir amado 💖",
];

export default function ReasonsSlider() {
    return (

        <Reveal>

            <section
                className="
                relative
                px-6
                py-32
                overflow-hidden
            "
            >
                {/* Background Glow */}
                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-cyan-500/5
                    to-transparent
                "
                />

                <InteractiveCard>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 1,
                        }}

                        viewport={{
                            once: true,
                        }}

                        className="
                    relative
                    z-10
                    mx-auto
                    max-w-6xl
                "
                    >
                        <h2
                            className="
                        mb-16
                        text-center
                        text-4xl
                        font-bold
                        text-white
                        md:text-5xl
                    "
                        >
                            Razones por las que Te Amo 💜
                        </h2>

                        <div
                            className="
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                        >
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}

                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}

                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }}

                                    viewport={{
                                        once: true,
                                    }}

                                    whileHover={{
                                        scale: 1.03,
                                    }}

                                    className="
                                rounded-[30px]
                                border
                                border-white/10
                                bg-white/5
                                p-8
                                text-lg
                                text-gray-200
                                backdrop-blur-xl
                                shadow-[0_0_40px_rgba(0,212,255,0.08)]
                                transition-all
                                duration-300
                                hover:border-cyan-300/30
                                hover:shadow-[0_0_50px_rgba(157,78,221,0.2)]
                            "
                                >
                                    {reason}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </InteractiveCard>
            </section>
        </Reveal>
    );
}