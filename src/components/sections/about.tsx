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
          title="Ninguém vive isolado"
          className="p-4 sm:p-6"
        >
          <p className="text-sm sm:text-base">
            A Teoria Sistêmica mostra que cada pessoa faz parte de sistemas maiores — como a família, a sociedade, a espiritualidade e até o universo.
Esses vínculos invisíveis nos conectam e influenciam diretamente nossa vida.

          </p>
        </Card>

        <Card
          icon={Waves}
          title="O reflexo do desequilíbrio"
          className="p-4 sm:p-6"
        >
          <p className="text-sm sm:text-base">
            Quando um sistema está em desordem, isso se reflete em todos os seus membros.
Exemplo: um conflito não resolvido com os pais continua atuando, mesmo à distância, gerando repetições de padrões ou a sensação de estar sempre “recomeçando do zero".
          </p>
        </Card>

        <Card
          icon={Waves}
          title="A chave é a reconciliação"
          className="p-4 sm:p-6"
        >
          <p className="text-sm sm:text-base">
            A solução não está em apagar a história, mas em se reconciliar com ela.
Não é sobre concordar com erros ou esquecer dores, mas sim sobre mudar a forma como nos relacionamos com nossos ancestrais.
Honrar e respeitar os que vieram antes abre espaço para uma cura profunda e verdadeira.
          </p>
        </Card>

        <Card
          icon={Waves}
          title="A força da harmonização"
          className="p-4 sm:p-6"
        >
          <p className="text-sm sm:text-base">
            Esse movimento libera energia no inconsciente, interrompe repetições e traz expansão em todas as áreas da vida: espiritual, emocional, familiar e material.
Harmonizar-se com o sistema é transformar dores em aprendizado e reconectar-se com a força dos ancestrais.
Assim, a vida pode seguir com mais leveza, segurança e plenitude.
          </p>
        </Card>
      </div>
    </Section>
  );
}
