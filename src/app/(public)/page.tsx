import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Depoiments } from "@/components/sections/depoiments";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Laws } from "@/components/sections/laws";
import { Service } from "@/components/sections/service";
import { Transformations } from "@/components/sections/transformations";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Laws />
      <HowItWorks />
      <Transformations />
      <Depoiments />
      <Service />
    </div>
  );
}
