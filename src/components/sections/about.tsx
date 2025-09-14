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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card
          icon={Users}
          title="Visão Sistêmica"
          className="p-4 sm:p-6"
        >
          <p className="text-sm sm:text-base">
            Olhamos para além do indivíduo, reconhecendo a influência do sistema
            familiar e de gerações anteriores.
          </p>
        </Card>

        <Card
          icon={Waves}
          title="Movimentos Internos"
          className="p-4 sm:p-6"
        >
          <p className="text-sm sm:text-base">
            A vivência convida a perceber movimentos profundos, possibilitando
            leveza e reconciliação com a própria história.
          </p>
        </Card>
      </div>
    </Section>
  );
}
