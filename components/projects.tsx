import React from 'react'
import ExpandableCardDemo from "@/components/expandable-card-grid";

const Projects = () => {
  return (
    <div className="pt-14" id="projects">
        <h2 className="heading">
            Mes {' '}
            <span className="text-neutral-400">projets récents</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center px-4 gap-x-12 mt-14">
            <ExpandableCardDemo />
            {/*projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="lg:min-h-[32.5rem] h-[36rem] flex items-center justify-center sm:w-[570px] w-[80vw] mt-14">
                    {<CardContainer className="inter-var py-4">
                        <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto sm:h-[35rem] rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2"
                                as="h1"
                            >
                                {title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="lg:text-base font-light text-sm"
                            >
                                {des}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={img}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    target="__blank"
                                    className="flex items-center justify-between mt-7 mb-3"
                                >
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-[rgb(13,13,13)] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={link}
                                    className="flex justify-center items-center"
                                >
                                    <p className="flex lg:text-xl md:text-xs text-sm text-neutral-400 pr-2">Voir le projet</p>
                                    <FaLocationArrow />
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>}
                    {/*<PinContainer title={link} href={link}>
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
                                <p className="flex lg:text-xl md:text-xs text-sm text-neutral-400 pr-2">Voir le projet</p>
                                <FaLocationArrow />
                            </div>
                        </div>
                    </PinContainer>}
                </div>
            ))*/}
        </div>
    </div>
  )
}

export default Projects