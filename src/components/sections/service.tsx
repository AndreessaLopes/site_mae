import { Button } from "../ui/button"
import { Section } from "../ui/section"


export function Service(){
    return(
        <Section
            id="service"
            title="Pronta(o) para transformar sua história?"
            subtitle="Escolha a forma de atendimento e reserve sua sessão."
            className="bg-purple-50/70"
        >
                  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
                    <Button className="bg-white text-purple-800 hover:bg-purple-50">
                        Sessão Online
                    </Button>
                    <Button className="bg-white text-purple-800 hover:bg-purple-50">
                        Sessão Presencial
                    </Button>
                  </div>

        </Section>
    )

}