"use client"

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Hero = () => {
  return (
    <section className="lg:py-16 h-screen w-full flex justify-center items-center">
        <div className="h-screen w-full dark:bg-neutral-900 bg-white flex items-center justify-center absolute top-0 left-0 blur-xl">
            <BackgroundGradientAnimation/>
        </div>
        <div>
            <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
            />
            <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="gray"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="black" />
        </div>



        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-neutral-400 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-center">
                    <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Bonjour, je suis
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        "Tom",
                        1000,
                        "Développeur web",
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className="text-white text-base sm:text-lg mb-6 lg:text-xl text-center">
                        {`Transformer vos idées en expériences captivantes à l'aide de technologies modernes !`}
                    </p>
                    <div className="flex gap-4 justify-center items-center">
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
            </div>
        </div>
    </section>
  )
}

export default Hero