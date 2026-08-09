import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Rompelo from "@/components/Rompelo";
import Sabores from "@/components/Sabores";
import Ritual from "@/components/Ritual";
import Producto from "@/components/Producto";
import Pedir from "@/components/Pedir";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Rompelo />
        <Sabores />
        <Ritual />
        <Producto />
        <Pedir />
      </main>
    </>
  );
}
