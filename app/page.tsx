import Hero from "@/components/Hero";
import Motto from "@/components/Motto";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Philosophy from "@/components/Philosophy";
import Repertoire from "@/components/Repertoire";
import Music from "@/components/Music";
import Navbar from "@/components/Navbar";
import BellSound from "@/components/BellSound";
export default function Home() {
  return (
    <>
    
    
      <Navbar />

      <BellSound />
      
      <Hero />
      <Motto />
      <About />
      <Philosophy />
      <Repertoire />
      <Music />
      <Gallery />

    </>
  );
}