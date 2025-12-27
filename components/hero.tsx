"use client"

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Hero = () => {
  return (
    <section className="lg:py-16 min-h-screen w-full flex justify-center items-center">
        <div className="h-screen w-full bg-neutral-900 flex items-center justify-center absolute inset-0 blur-xl">
            <BackgroundGradientAnimation/>
        </div>


        <div className="flex justify-center relative my-20 z-10 animate-heroSoftIn">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <div
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                        <h1 className="text-neutral-400 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-center">
                        <span className="sr-only">
                            Tom Paris – Développeur Full-Stack Freelance Next.js & React
                        </span>
                        
                        <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Bonjour, je suis
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                            "Tom",
                            1000,
                            "Développeur Web",
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero