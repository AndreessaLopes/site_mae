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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        <Card icon={CalendarDays} title="Antes da sessão">
          Escolha um ambiente calmo (para online), prefira computador se possível,
          tenha água, papel e caneta.
        </Card>
        <Card icon={Sparkles} title="Durante a sessão">
          Recursos como bonecos, cristais, cartas ou constelação na água — conforme
          sua necessidade.
        </Card>
        <Card icon={Droplets} title="Após a sessão">
          Evite comentar por 7 dias. Permita que as percepções se assentem. Beba
          água e descanse.
        </Card>
      </div>
    </Section>
  );
}
