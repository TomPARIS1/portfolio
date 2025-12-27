import React from 'react'
import { socialMedia } from '@/data'
import { ContactForm } from './ui/contact-form'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            
            <h2 className="heading lg:max-w-[45vw]">
                Envie de <span className="text-neutral-400">donner vie</span> à vos idées ?
            </h2>
            <p className="text-white-200 md:mt-10 my-5 text-center">Contactez-moi et voyons comment je peux vous aider à atteindre vos objectifs.</p>
            
            <ContactForm />
        </div>    
        
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light sm:mb-2">Copyright © 2025 Tom Paris</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-neutral-900 rounded-lg border border-black-300">
                        <a href={profile.link}><Image src={profile.img} alt={"Logo" + profile.id} width={20} height={20} /></a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer