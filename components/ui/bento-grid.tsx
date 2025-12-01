"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { useState, memo, useCallback, useMemo } from "react";
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";
import { SiJavascript, SiNextdotjs, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";
import dynamic from "next/dynamic";
import Image from "next/image";

const Meteors = dynamic(() => import("@/components/ui/meteors").then(m => m.Meteors), {
  ssr: false,
  loading: () => null,
});

const TECH_LIST = [
  { title: "NextJS", icon: <SiNextdotjs /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "TailwindCSS", icon: <SiTailwindcss /> },
  { title: "PHP", icon: <SiPhp /> },
  { title: "JavaScript", icon: <SiJavascript /> }
] as const;

export const BentoGrid = memo(({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
});

BentoGrid.displayName = "BentoGrid";

const TechList = memo(() => (
  <div className="md:inline-flex items-center gap-3">
    {TECH_LIST.map((item, i) => (
      <span
        key={i}
        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
        lg:opacity-100 rounded-lg text-center bg-[rgb(13,13,13)] border border-white/[0.1] flex items-center justify-between mb-2"
      >
        <div className="pr-2">{item.icon}</div>
        <p>{item.title}</p>
      </span>
    ))}
  </div>
));

TechList.displayName = "TechList";

export const BentoGridItem = memo(({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('paristom71@gmail.com');
    setCopied(true);
    
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const backgroundStyle = useMemo(() => ({
    background: "rgb(23,23,23)",
    backgroundColor: "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(64,64,64,1) 100%)",
  }), []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-neutral-900",
        className
      )}
      style={backgroundStyle}
    >
      <div className={`${id === 4 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={title?.toString() || "Grid item"}
              className={cn(imgClassName, "object-cover object-center")}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              quality={75}
            />
          )}
        </div>
        
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt="Decoration"
              className="object-cover object-center w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              quality={75}
            />
          )}
        </div>

        {id === 4 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 mb-4">
            {title}
          </div>
          <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 whitespace-pre-line">
            {description}
          </div>

          {id === 3 && (
            <div className="w-full items-center">
              <Meteors number={20} />
            </div>
          )}

          {id === 2 && <TechList />}

          {id === 4 && (
            <div className="relative">
              <MagicButton
                title={copied ? 'Email copié' : 'Copier mon email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-neutral-900"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

BentoGridItem.displayName = "BentoGridItem";