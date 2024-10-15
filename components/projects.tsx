import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div className="pt-14" id="projects">
        <h1 className="heading">
            Mes {' '}
            <span className="text-gray-300">projets récents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center px-4 gap-x-24 gap-y-7 mt-5">
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[rgb(25,25,15)]">
                                <img 
                                    src={img}
                                    alt={title}
                                />
                            </div>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>

                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className="border border-white/[0.2] rounded-full bg-[rgb(25,25,15)] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className="p-2" />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-gray-300">Voir le code source</p>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects