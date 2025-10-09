export const navItems = [
    { name: "A propos", link: "#about" },
    { name: "Projets", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Un nouveau monde",
      description: "Récemment diplômé d'un BUT Informatique, je propose aujourd'hui mes services de développement. C'est pour moi une véritable occasion d'exprimer mes compétences, de donner vie à mes projets mais aussi de participer à de nouvelles expériences.",
      className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Mes technologies favorites",
      description: "",
      className: "lg:col-span-3 md:row-span-1 md:col-span-6",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Passionné de technologie, mais pas que !",
      description: "En dehors du développement, j'adore la musique, notamment tout ce qui est de la culture hip-hop et rap, mais aussi la musculation, que je pratique en salle.",
      className: "lg:col-span-3 md:row-span-1 md:col-span-6",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
  
    {
      id: 4,
      title: "Envie de commencer un nouveau projet ?",
      description: "",
      className: "lg:col-span-5 md:col-span-6 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Portfolio personnel",
      des: "Projet personnel permettant d'avoir un bref aperçu de mon travail. Le site regroupe mes projets, présente mes compétences et mets en avant quelques projets.",
      img: "/portfolio.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/git.svg"],
      link: "https://github.com/TomPARIS1/TomPARIS1.github.io",
    },
    {
      id: 2,
      title: "CVCheckr",
      des: "Projet personnel utilisant l'IA. Le site récupère votre CV, l'analyse à l'aide de l'IA puis le note en fonction de plusieurs critères afin de vous aider à l'améliorer.",
      img: "/cvcheckr.png",
      iconLists: ["/php-logo.svg","/js.svg","/HTML5.svg","/git.svg"],
      link: "https://cvcheckr.vercel.app",
    },
    {
      id: 3,
      title: "Application en développement...",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare molestie nisl quis ullamcorper. Nulla ultrices lectus urna, ut fringilla lectus volutpat a. Ut quam massa, feugiat sit amet arcu in, laoreet pharetra nibh.",
      img: "/indev.png",
      iconLists: ["/git.svg"],
      link: "https://github.com/TomPARIS1",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Développement Back-End",
      desc: "Conception et mise en œuvre de la logique serveur, des bases de données et des API pour assurer la performance et la sécurité de vos applications.",
      className: "md:col-span-2",
      thumbnail: "/terminal.png",
    },
    {
      id: 2,
      title: "Développement Front-End",
      desc: "Création d'interfaces utilisateur intuitives et réactives, utilisant les dernières technologies pour offrir une expérience optimale sur tous les appareils.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/code.png",
    },
    {
      id: 3,
      title: "Développement Multi-Plateformes",
      desc: "Développement d'applications qui fonctionnent parfaitement sur différentes plateformes (Web, iOS, Android), réduisant ainsi le temps et les coûts de développement.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/application-mobile.png",
    },
    {
      id: 4,
      title: "Support et Maintenance",
      desc: "Assurez le bon fonctionnement de vos applications grâce à un service de support et de maintenance proactif, incluant mises à jour, corrections de bugs et optimisation des performances.",
      className: "md:col-span-2",
      thumbnail: "/conseil.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/TomPARIS1",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/tom-paris-03737b253/",
    },
  ];