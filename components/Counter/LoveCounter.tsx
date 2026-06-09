"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Reveal
    from "@/components/Effects/Reveal";

import InteractiveCard
    from "@/components/Effects/InteractiveCard";

export default function LoveCounter() {
    const targetDate = new Date("2026-06-13T00:00:00-05:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            const difference =
                targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);

                setCelebrate(true);

                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });

                return;
            }

            const days = Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );

            const minutes = Math.floor(
                (difference / (1000 * 60)) % 60
            );

            const seconds = Math.floor(
                (difference / 1000) % 60
            );

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeBlocks = [
        {
            value: timeLeft.days,
            label: "Días",
        },
        {
            value: timeLeft.hours,
            label: "Horas",
        },
        {
            value: timeLeft.minutes,
            label: "Minutos",
        },
        {
            value: timeLeft.seconds,
            label: "Segundos",
        },
    ];

    return (

        <Reveal>

            <section
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
                    via-violet-500/10
                    to-transparent
                "
                />

                <InteractiveCard>
                    <motion.div
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
                    relative
                    z-10
                    mx-auto
                    max-w-6xl
                    text-center
                "
                    >
                        <h2
                            className="
                        mb-6
                        text-4xl
                        font-bold
                        text-white
                        md:text-5xl
                    "
                        >
                            Faltan... 💜
                        </h2>

                        <p
                            className="
                        mb-16
                        text-lg
                        leading-relaxed
                        text-gray-300
                        md:text-2xl
                    "
                        >
                            Para celebrar nuestro primer mes juntos ✨

                            <br />

                            13 de junio de 2026 💜
                        </p>



                        {
                            celebrate && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}

                                    transition={{
                                        duration: 1,
                                    }}

                                    className="
                mb-16
                rounded-[40px]
                border
                border-pink-300/20
                bg-white/10
                p-10
                backdrop-blur-2xl
                shadow-[0_0_80px_rgba(255,0,150,0.25)]
            "
                                >
                                    <h2
                                        className="
                    text-4xl
                    font-bold
                    text-pink-300
                    md:text-6xl
                "
                                    >
                                        Feliz Primer Mes 💜
                                    </h2>

                                    <p
                                        className="
                    mt-6
                    text-lg
                    leading-relaxed
                    text-gray-200
                    md:text-2xl
                "
                                    >
                                        Gracias por hacer mi vida
                                        muchísimo más hermosa.

                                        <br />

                                        Gracias por cada sonrisa,
                                        cada palabra,
                                        cada momento contigo.

                                        <br /><br />

                                        Te amo muchísimo, Nicole ✨
                                    </p>
                                </motion.div>
                            )
                        }

                        <div
                            className="
                        grid
                        grid-cols-2
                        gap-6
                        md:grid-cols-4
                    "
                        >
                            {timeBlocks.map((item, index) => (
                                <motion.div
                                    key={index}

                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}

                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.5,
                                    }}

                                    viewport={{
                                        once: true,
                                    }}

                                    className="
                                rounded-[30px]
                                border
                                border-white/10
                                bg-white/5
                                p-8
                                backdrop-blur-xl
                                shadow-[0_0_40px_rgba(0,212,255,0.08)]
                            "
                                >
                                    <h3
                                        className="
                                    text-4xl
                                    font-bold
                                    text-cyan-300
                                    md:text-6xl
                                "
                                    >
                                        {item.value}
                                    </h3>

                                    <p
                                        className="
                                    mt-4
                                    text-gray-300
                                    md:text-lg
                                "
                                    >
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </InteractiveCard>
            </section>
        </Reveal>
    );
}