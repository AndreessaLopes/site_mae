import { FaqItem } from "../layout/dropdown"
import { Section } from "../ui/section"

export function QuestionsFrequency() {
  return (
    <Section
      id="questions-frequency"
      title="Dúvidas Frequentes"
      subtitle="Aqui estão algumas perguntas comuns que recebo. Se você tiver outras dúvidas, sinta-se à vontade para entrar em contato."
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-gray-200">
        <FaqItem
          question="Como funciona a terapia?"
          answer="As sessões acontecem de forma online ou presencial, com duração média de 1h. O processo é conduzido de forma acolhedora e respeitosa."
        />
        <FaqItem
          question="Preciso de preparação antes da sessão?"
          answer="Não é necessário nada específico. Apenas esteja aberto para o processo e em um ambiente tranquilo."
        />
        <FaqItem
          question="Quantas sessões são necessárias?"
          answer="Isso varia para cada pessoa. Algumas encontram clareza em uma única sessão, enquanto outras preferem um acompanhamento mais longo."
        />
      </div>
    </Section>
  )
}
