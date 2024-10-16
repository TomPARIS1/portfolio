import React from 'react'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            
            <h1 className="heading lg:max-w-[45vw]">
                Envie de <span className="text-neutral-400">donner vie</span> à vos idées ?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Contactez-moi et voyons comment je peux vous aider à atteindre vos objectifs.</p>
            
            <a href="mailto:paristom71@gmail.com">
                <MagicButton
                    title="Prenons contact !"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>    
        <div className="h-screen w-full dark:bg-neutral-950 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
            </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light sm:mb-2">Copyright © 2024 Tom Paris</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-neutral-900 rounded-lg border border-black-300">
                        <a href={profile.link}><img src={profile.img} alt={"Logo" + profile.id} width={20} height={20} /></a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer