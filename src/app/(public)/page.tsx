import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Depoiments } from "@/components/sections/depoiments";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Laws } from "@/components/sections/laws";
import { QuestionsFrequency } from "@/components/sections/questions_frequency";
import { Service } from "@/components/sections/service";
import { Transformations } from "@/components/sections/transformations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex flex-col w-full">
        {/* Hero */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Hero />
          </div>
        </section>

        {/* About */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <About />
          </div>
        </section>

        {/* Laws */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Laws />
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <HowItWorks />
          </div>
        </section>

        {/* Transformations */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Transformations />
          </div>
        </section>

        {/* Depoiments */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Depoiments />
          </div>
        </section>

        {/* Service */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Service />
          </div>
        </section>

        {/* Questions Frequency */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <QuestionsFrequency />
          </div>
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
