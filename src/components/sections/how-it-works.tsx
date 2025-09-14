import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { CalendarDays, Sparkles, Droplets } from "lucide-react";

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      title="Como funciona a sessão?"
      subtitle="Online ou presencial, com duração de até 2 horas. Um espaço seguro, sigiloso e respeitoso ao seu ritmo."
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card icon={CalendarDays} title="Antes da sessão" className="p-4 sm:p-6">
          <p className="text-sm sm:text-base">
            Escolha um ambiente calmo (para online), prefira computador se possível,
            tenha água, papel e caneta.
          </p>
        </Card>

        <Card icon={Sparkles} title="Durante a sessão" className="p-4 sm:p-6">
          <p className="text-sm sm:text-base">
            Recursos como bonecos, cristais, cartas ou constelação na água — conforme
            sua necessidade.
          </p>
        </Card>

        <Card icon={Droplets} title="Após a sessão" className="p-4 sm:p-6">
          <p className="text-sm sm:text-base">
            Evite comentar por 7 dias. Permita que as percepções se assentem. Beba
            água e descanse.
          </p>
        </Card>
      </div>
    </Section>
  );
}
