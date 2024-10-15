import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa6'
import { GoCommandPalette } from 'react-icons/go'

const Hero = () => {
  return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="gray"/>
                
                <Spotlight className="-top-40 -right-40 h-screen" fill="gray"/> 
            </div>
            <div className="h-screen w-full dark:bg-neutral-950 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Portfolio personnel
                    </h2>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Transformer vos idées en une expérience captivante"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Bonjour, je suis Tom, un développeur originaire de France.
                    </p>
                    <a href="#about">
                        <MagicButton 
                            title="En savoir plus"
                            icon={<GoCommandPalette />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Hero