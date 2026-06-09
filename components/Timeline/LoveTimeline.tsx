"use client";

import { motion } from "framer-motion";

import Reveal
    from "@/components/Effects/Reveal";

const memories = [
    {
        title: "13 de Mayo 💜",
        description:
            "El día donde comenzó el capítulo más hermoso de mi vida. Desde ese momento, cada día contigo ha sido un regalo que agradezco infinitamente a Dios",
    },

    {
        title: "Nuestras Conversaciones ✨",
        description:
            "Cada mensaje contigo empezó a convertirse en mi momento favorito del día. Es increíble cómo cada palabra tuya tiene el poder de alegrar mi corazón y hacerme sentir amado",
    },

    {
        title: "Tu Ternura 🌸",
        description:
            "Tu forma de hablarme, cuidarme y hacerme sentir amado cambió completamente mi corazón. Es como si cada gesto tuyo fuera un recordatorio de lo afortunado que soy de tenerte en mi vida",
    },

    {
        title: "Nuestro Primer Mes 💍",
        description:
            "Y aquí estamos… construyendo una historia que le agradezco a Dios todos los días. Gracias por cada momento, cada sonrisa y cada palabra. Te amo muchísimo mi amorcito bella, hermosa, preciosa ✨",
    },
];

export default function LoveTimeline() {
    return (

        <Reveal>

            <section
                id="historia"

                className="
                relative
                overflow-hidden
                px-6
                py-32
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

                <div
                    className="
                    relative
                    z-10
                    mx-auto
                    max-w-5xl
                "
                >
                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 40,
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
                        mb-24
                        text-center
                        text-4xl
                        font-bold
                        text-white
                        md:text-6xl
                    "
                    >
                        Nuestra Historia ✨
                    </motion.h2>

                    <div
                        className="
                        relative
                        flex
                        flex-col
                        gap-20
                    "
                    >
                        {/* Line */}
                        <div
                            className="
                            absolute
                            left-4
                            top-0
                            h-full
                            w-[2px]
                            bg-gradient-to-b
                            from-cyan-400
                            via-violet-400
                            to-transparent
                            md:left-1/2
                            md:-translate-x-1/2
                        "
                        />

                        {
                            memories.map((memory, index) => (
                                <motion.div
                                    key={index}

                                    initial={{
                                        opacity: 0,
                                        x:
                                            index % 2 === 0
                                                ? -80
                                                : 80,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    transition={{
                                        duration: 0.8,
                                    }}

                                    viewport={{
                                        once: true,
                                    }}

                                    className={`
                                    relative
                                    flex
                                    w-full

                                    ${index % 2 === 0
                                            ? "md:justify-start"
                                            : "md:justify-end"
                                        }
                                `}
                                >
                                    {/* Dot */}
                                    <div
                                        className="
                                        absolute
                                        left-4
                                        top-10
                                        z-20
                                        h-5
                                        w-5
                                        rounded-full
                                        bg-cyan-300
                                        shadow-[0_0_20px_rgba(0,212,255,0.9)]

                                        md:left-1/2
                                        md:-translate-x-1/2
                                    "
                                    />

                                    {/* Card */}
                                    <div
                                        className="
                                        ml-14
                                        w-full
                                        rounded-[32px]
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-8
                                        backdrop-blur-xl

                                        shadow-[0_0_40px_rgba(0,212,255,0.08)]

                                        md:ml-0
                                        md:w-[45%]
                                    "
                                    >
                                        <h3
                                            className="
                                            text-2xl
                                            font-bold
                                            text-cyan-300
                                        "
                                        >
                                            {memory.title}
                                        </h3>

                                        <p
                                            className="
                                            mt-4
                                            text-lg
                                            leading-relaxed
                                            text-gray-300
                                        "
                                        >
                                            {memory.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Reveal>
    );
}