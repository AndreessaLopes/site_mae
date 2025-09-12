import { Section } from "../ui/section";
import { CircleCheck } from "lucide-react";

export function Transformations() {
  const cards = [
    "Clareza sobre padrões familiares",
    "Liberação de traumas emocionais",
    "Relacionamentos mais leves e verdadeiros",
    "Conexão com sua ancestralidade",
    "Paz interior profunda",
    "Mais presença e vitalidade",
  ];

  return (
    <Section
      id="beneficios"
      title="Benefícios da Constelação Familiar"
      subtitle="Transformações possíveis após a vivência"
      className="bg-purple-50/70"
    >
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((title) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-2xl border p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <CircleCheck className="h-6 w-6 text-purple-800" />
            <span className="font-semibold text-xl text-purple-800">{title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
