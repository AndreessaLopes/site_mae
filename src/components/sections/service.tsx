import { Button } from "../ui/button"
import { Section } from "../ui/section"

export function Service() {
  return (
    <Section
      id="service"
      title="Pronta(o) para transformar sua história?"
      subtitle="Escolha a forma de atendimento e reserve sua sessão."
      className="bg-purple-50/70"
    >
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 px-4 sm:px-6 lg:px-8">
        <Button className="w-full bg-white text-purple-800 hover:bg-purple-100 transition-colors">
          Sessão Online
        </Button>
        <Button className="w-full bg-white text-purple-800 hover:bg-purple-100 transition-colors">
          Sessão Presencial
        </Button>
      </div>
    </Section>
  )
}
