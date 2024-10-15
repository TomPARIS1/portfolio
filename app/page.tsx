import Services from "@/components/services";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-neutral-950 
    flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Services />
        <Grid />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
