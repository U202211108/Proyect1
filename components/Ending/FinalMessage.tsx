"use client";

import { motion } from "framer-motion";

import Reveal
    from "@/components/Effects/Reveal";

import InteractiveCard
    from "@/components/Effects/InteractiveCard";

export default function FinalMessage() {

    return (

        <Reveal>

            <section
                className="
                relative
                overflow-hidden
                px-6
                py-40
            "
            >
                {/* Background Glow */}
                <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-b
                    from-transparent
                    via-violet-500/10
                    to-transparent
                "
                />

                {/* Blur Orbs */}
                <div
                    className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[500px]
                    w-[500px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                "
                />

                <InteractiveCard>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 1.2,
                        }}

                        viewport={{
                            once: true,
                        }}

                        className="
                    relative
                    z-10
                    mx-auto
                    max-w-5xl
                    text-center
                "
                    >
                        {/* Verse */}
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}

                            whileInView={{
                                opacity: 1,
                            }}

                            transition={{
                                delay: 0.4,
                                duration: 1.5,
                            }}

                            className="
                        mb-16
                        text-lg
                        italic
                        leading-relaxed
                        text-cyan-200
                        md:text-2xl
                    "
                        >
                            “Y sobre todas estas cosas vestíos de amor,
                            que es el vínculo perfecto.”
                            <br />
                            — Colosenses 3:14 💜
                        </motion.p>

                        {/* Main Message */}
                        <motion.h2
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}

                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}

                            transition={{
                                delay: 0.6,
                                duration: 1,
                            }}

                            className="
                        mb-10
                        text-5xl
                        font-bold
                        leading-tight
                        text-white

                        md:text-7xl
                    "
                        >
                            Y Esta...
                            <br />

                            Apenas es
                            <span
                                className="
                            bg-gradient-to-r
                            from-cyan-300
                            to-violet-400
                            bg-clip-text
                            text-transparent
                        "
                            >
                                {" "}Nuestra Primera De Muchas Alegrías Más 💜
                            </span>
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                delay: 1,
                                duration: 1,
                            }}

                            className="
                        mx-auto
                        max-w-3xl
                        text-lg
                        leading-relaxed
                        text-gray-300

                        md:text-2xl
                    "
                        >
                            Gracias por llegar a mi vida,
                            por hacerme sentir amado,
                            escuchado y feliz

                            <br /><br />

                            Oro para que Dios siga guiando
                            nuestra historia,
                            nuestros sueños
                            y cada paso que demos juntos

                            <br /><br />

                            Porque si es contigo,
                            entonces vale completamente la pena 💍
                        </motion.p>

                        {/* The End */}
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}

                            whileInView={{
                                opacity: 1,
                            }}

                            transition={{
                                delay: 1.8,
                                duration: 2,
                            }}

                            className="
                        mt-24
                    "
                        >
                            <div
                                className="
        space-y-6
    "
                            >
                                <p
                                    className="
            text-3xl
            font-light
            tracking-[0.4em]
            text-white/70
            md:text-5xl
        "
                                >
                                    ESTA HISTORIA RECIÉN COMIENZA ✨
                                </p>

                                <p
                                    className="
            text-2xl
            font-semibold

            tracking-[0.6em]

            text-cyan-300

            md:text-4xl
        "
                                >
                                    TE AMO, MI VIDA 💜
                                </p>

                                <p
                                    className="
            text-2xl
            font-semibold

            tracking-[0.6em]

            text-cyan-300

            md:text-4xl
        "
                                >
                                    TU LEONCITO 💜
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </InteractiveCard>
            </section>
        </Reveal>
    );
}