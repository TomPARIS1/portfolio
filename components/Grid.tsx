import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <h1 className="heading py-14">
        A propos de <span className="text-gray-300">moi</span>
      </h1>
        <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid