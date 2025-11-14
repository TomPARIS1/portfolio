"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={600}
                  height={350}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                    <div className="flex flex-row gap-2">
                        <motion.a
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href={active.ctaLink}
                            target="_blank"
                            className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                        >
                            {active.ctaText}
                        </motion.a>
                        <motion.a
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href={active.ctaLinkGit}
                            target="_blank"
                            className="px-4 py-3 text-sm rounded-full font-bold bg-black-300 text-white"
                        >
                            {active.ctaTextGit}
                        </motion.a>
                    </div>

                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={600}
                  height={350}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Portfolio",
    title: "Site actuel",
    src: "/portfolio.webp",
    ctaText: "Demo",
    ctaLink: "https://tomparis.vercel.app/",
      ctaTextGit: "Github",
      ctaLinkGit: "https://github.com/TomPARIS1/portfolio",
      content: () => {
      return (
        <p>Ce portfolio a été conçu avec Next.js, TypeScript et Tailwind CSS dans le but de présenter mes compétences, mes projets et mon profil de manière claire, moderne et responsive.
            Il intègre des composants issus de Aceternity UI, des animations douces, un formulaire de contact fonctionnel, ainsi qu’un système de monitoring des erreurs via Sentry.
            L’objectif : offrir une expérience fluide et professionnelle à tout visiteur intéressé par mes services ou mon profil développeur.</p>
      );
    },
  },
    {
        description: "Itineris",
        title: "Planificateur de voyage",
        src: "/itineris.webp",
        ctaText: "Demo",
        ctaLink: "https://goitineris.vercel.app/",
        ctaTextGit: "Github",
        ctaLinkGit: "https://github.com/TomPARIS1/itineris",
        content: () => {
            return (
                <p>
                    Itineris est une application web développée avec Next.js, TypeScript, Tailwind CSS et Prisma, connectée à une base de données Neon PostgreSQL.
                    Elle permet de planifier et gérer ses voyages de manière intuitive : l’utilisateur peut créer des voyages, ajouter des destinations, les visualiser sur une carte interactive ou un globe 3D, et suivre ses dépenses par catégorie.
                    L’app intègre également Clerk pour l’authentification sécurisée et offre une interface moderne, fluide et responsive, pensée pour accompagner les voyageurs dans toute l’organisation de leurs aventures.
                </p>
            );
        },
    },
  {
    description: "CVCheckr",
    title: "Analyseur de CV",
    src: "/cvcheckr.webp",
    ctaText: "Demo",
    ctaLink: "https://cvcheckr.vercel.app/",
    ctaTextGit: "Github",
    ctaLinkGit: "https://github.com/TomPARIS1/cvcheckr",
    content: () => {
      return (
        <p>
            CVCheckr est une application web développée avec React (Vite), Tailwind CSS et la plateforme Puter, permettant d’analyser automatiquement un CV grâce à une intelligence artificielle.
            L’utilisateur dépose son CV, ajoute des détails comme le nom de l’entreprise ciblée ou l’offre d’emploi, puis l’IA fournit une note basée sur les critères ATS (Applicant Tracking System) ainsi que des recommandations personnalisées pour améliorer le document.
            L’app est responsive, rapide, et totalement serverless, avec toute la logique d’analyse, d’authentification et de traitement gérée par Puter.
        </p>
      );
    },
  },
  {
    description: "Portfolio",
    title: "Optimisation de performances",
    src: "/cwv.webp",
    ctaText: "Lire l'étude",
    ctaLink: "https://pacific-fennel-5c3.notion.site/tude-de-cas-Optimisation-des-performances-de-mon-portfolio-2ab7747500dc808a9656cd2426e6ec63",
    ctaTextGit: "Github",
    ctaLinkGit: "https://github.com/TomPARIS1/portfolio",
    content: () => {
      return (
        <p>
           Ce projet a consisté à améliorer en profondeur les performances de mon portfolio personnel sans modifier son design. Après un audit complet Lighthouse et Core Web Vitals, j’ai mis en place une stratégie ciblée : conversion des images en WebP avec optimisation Next/Image, suppression de composants très gourmands (dont une animation Three.js), lazy loading des assets, découpage du bundle et optimisation du chargement des polices et scripts.
          <br />
          Cette intervention a permis d’augmenter considérablement la vitesse du site : le score Lighthouse Performance est passé de 27 à 99, le temps de chargement a été divisé par 3, et la navigation est désormais fluide même en connexion 4G faible — tout en conservant exactement la même identité visuelle.
        </p>
      );
    },
  },
  {
      description: "Application en développement",
      title: "En cours...",
      src: "/indev.webp",
      ctaText: "Demo",
      ctaLink: "https://github.com/TomPARIS1",
      ctaTextGit: "Github",
      ctaLinkGit: "https://github.com/TomPARIS1",
      content: () => {
          return (
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare molestie nisl quis ullamcorper. Nulla ultrices lectus urna, ut fringilla lectus volutpat a. Ut quam massa, feugiat sit amet arcu in, laoreet pharetra nibh.
              </p>
          );
      },
  },
];
