import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Services = () => {
  return (
    <div className="w-full md:mt-16 mt-24" id="services">
      <h1 className="heading ">
        Mes <span className="text-neutral-400">services</span>
      </h1>

      <div className="w-full mt-14 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(23,23,23)",
              backgroundColor:
                "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(64,64,64,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-white/[0.1]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Services;