"use client";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import Reveal
    from "@/components/Effects/Reveal";

import InteractiveCard
    from "@/components/Effects/InteractiveCard";

export default function LoveLetter() {

    return (

        <Reveal>

            <section id="love-letter"
                className="
                relative
                flex
                items-center
                justify-center
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
                            y: 60,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}

                        viewport={{
                            once: true,
                        }}

                        className="
                    relative
                    z-10
                    w-full
                    max-w-4xl
                    rounded-[40px]
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-2xl
                    md:p-16
                    shadow-[0_0_80px_rgba(157,78,221,0.15)]
                "
                    >
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                            }}

                            className="
                        mb-10
                        text-center
                        text-4xl
                        font-bold
                        text-white
                        md:text-5xl
                    "
                        >
                            Para Ti, Mi Amor 💜
                        </motion.h2>

                        <div
                            className="
                        text-lg
                        leading-[2.2rem]
                        text-gray-200
                        md:text-2xl
                    "
                        >
                            <TypeAnimation
                                sequence={[
                                    `
Hace un mes, Dios permitió que comenzara la historia más hermosa que mi corazón ha vivido.

Nunca imaginé que en tan poco tiempo alguien pudiera convertirse en una bendición tan grande para mi vida.

Pero llegaste tú…
y desde entonces, todo cambió de una manera hermosa.

Tu dulzura,
tu manera de tratarme,
tu sonrisa,
y la paz que transmites,
me hicieron comprender el significado de un amor sincero, paciente y lleno de cariño, como nos enseña la Palabra de Dios.

“Sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.”
— Colosenses 3:14 💜

Gracias por existir.
Gracias por permanecer en mi vida.
Gracias por cada palabra, cada oración y cada momento bonito que compartimos.

Y aunque apenas es nuestro primer mes…
quiero que sepas que contigo siento una tranquilidad y una felicidad que durante mucho tiempo le pedí a Dios.

No sé todo lo que el futuro tiene preparado para nosotros,
pero sí sé que conocerte ha sido una de las respuestas más hermosas que llegaron a mi vida.

Te amo muchísimo, Nicole, mi amor 💜

                            `,
                                ]}

                                speed={70}

                                wrapper="span"

                                cursor={true}

                                repeat={0}
                            />
                        </div>
                    </motion.div>
                </InteractiveCard>
            </section>
        </Reveal>
    );
}