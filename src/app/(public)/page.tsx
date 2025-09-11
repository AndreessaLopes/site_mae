import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Laws } from "@/components/sections/laws";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Laws />
      <HowItWorks />
    </div>
  );
}
