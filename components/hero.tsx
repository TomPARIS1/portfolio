"use client"

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";

const Hero = () => {
  return (
    <section className="lg:py-16 h-screen w-full flex justify-center items-center">
        <div className="h-screen w-full dark:bg-neutral-900 bg-white flex items-center justify-center absolute top-0 left-0 blur-xl">
            
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            <h1 className="text-neutral-400 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Bonjour, je suis
            </span>
            <br></br>
            <TypeAnimation
                sequence={[
                "Tom",
                1000,
                "Développeur passionné",
                1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            Transformer vos idées en expériences captivantes !
            <br/>
            Développeur web freelance React / Next.js — Disponible pour missions à distance.
            </p>
            <div className="flex gap-4">
                <a href="#contact">
                    <MagicButton
                        title="Me contacter"
                        icon=""
                        position=""
                    />
                </a>
                <a href="/CV_Tom_PARIS.pdf" download>
                    <MagicButton
                        title="Télécharger mon CV"
                        icon={<FaDownload />}
                        position="right"
                    />
                </a>
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
            <div className="rounded-full bg-neutral-950 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
                src="/logo-hero.png"
                alt="Head Logo"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
            />
            </div>
        </motion.div>
        </div>
    </section>
  )
}

export default Hero