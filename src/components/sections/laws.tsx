import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Shield, Flower } from "lucide-react";
import { forwardRef } from "react";

const HierarchyIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  function HierarchyIcon(props, ref) {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className="h-5 w-5 text-purple-800"
        {...props}
      >
        <circle cx="12" cy="4" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path
          d="M12 6v2m0 0l-6 2m6-2l6 2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    );
  }
);

export function Laws() {
  return (
    <Section
      id="leis"
      title="As 3 Leis Sistêmicas"
      subtitle="Princípios de Bert Hellinger que orientam a ordem do amor."
      className="bg-purple-50/70"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        <Card icon={Shield} title="Pertencimento">
          Todos têm direito de pertencer; quando alguém é excluído, o sistema
          busca compensações.
        </Card>
        <Card icon={HierarchyIcon} title="Hierarquia">
          Honrar quem veio antes. Pais antes dos filhos; antigos antes dos
          novos.
        </Card>
        <Card icon={Flower} title="Equilíbrio da Troca">
          Dar e receber na medida certa fortalece os vínculos e restabelece o
          fluxo saudável nas relações.
        </Card>
      </div>
    </Section>
  );
}
