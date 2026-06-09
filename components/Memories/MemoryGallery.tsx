"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import Reveal
    from "@/components/Effects/Reveal";

import InteractiveCard
    from "@/components/Effects/InteractiveCard";

import PremiumCard
    from "@/components/Effects/PremiumCard";

const memories = [
    {
        image: "/memories/estadio_nacional.jpeg",
        title: "Nuestra Felicidad ✨",
    },

    {
        image: "/memories/aventuras.jpeg",
        title: "Momentos Contigo 💜",
    },

    {
        image: "/memories/mi_amor.jpeg",
        title: "Mi Persona Favorita 🌸",
    },

    {
        image: "/memories/tu_y_yo.jpeg",
        title: "Tú y Yo 💍",
        contain: true,
    },
];

export default function MemoryGallery() {
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
                {/* Glow */}
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

                <div
                    className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
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
                        mb-20
                        text-center
                        text-4xl
                        font-bold
                        text-white
                        md:text-6xl
                    "
                    >
                        Nuestros Recuerdos 📸
                    </motion.h2>

                    <div
                        className="
                        grid
                        gap-8
                        md:grid-cols-2
                    "
                    >
                        {
                            memories.map((memory, index) => (

                                <PremiumCard key={index}>
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
                                            delay: index * 0.2,
                                            duration: 0.8,
                                        }}

                                        viewport={{
                                            once: true,
                                        }}

                                        whileHover={{
                                            scale: 1.03,
                                        }}

                                        className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[35px]
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-xl

                                    shadow-[0_0_40px_rgba(0,212,255,0.08)]
                                "
                                    >
                                        <div
                                            className="
        relative
        h-[450px]
        md:h-[600px]
        w-full
    "
                                        >
                                            <Image
                                                src={memory.image}
                                                alt={memory.title}
                                                fill

                                                className="
           object-contain bg-black
            transition-transform
            duration-700

            group-hover:scale-110
        "
                                            />
                                        </div>

                                        {/* Overlay */}
                                        <div
                                            className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/80
                                        via-black/20
                                        to-transparent
                                    "
                                        />

                                        {/* Text */}
                                        <div
                                            className="
                                        absolute
                                        bottom-0
                                        left-0
                                        z-10
                                        p-8
                                    "
                                        >
                                            <h3
                                                className="
                                            text-2xl
                                            font-bold
                                            text-white
                                        "
                                            >
                                                {memory.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                </PremiumCard>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Reveal>
    );
}