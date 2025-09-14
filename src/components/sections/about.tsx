import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Users, Waves } from "lucide-react";

export function About() {
  return (
    <Section
      id="sobre"
      title="O que é a Constelação Familiar?"
      subtitle="Uma abordagem sistêmica que revela emaranhamentos no sistema familiar, trazendo consciência, ordem e pertencimento."
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2">
        <Card icon={Users} title="Visão Sistêmica">
          Olhamos para além do indivíduo, reconhecendo a influência do sistema
          familiar e de gerações anteriores.
        </Card>
        <Card icon={Waves} title="Movimentos Internos">
          A vivência convida a perceber movimentos profundos, possibilitando
          leveza e reconciliação com a própria história.
        </Card>
      </div>
    </Section>
  );
}
