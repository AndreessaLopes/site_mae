import { Card } from "../ui/card";
import { Section } from "../ui/section";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contato"
      title="Fale comigo"
      subtitle="Dúvidas, agendamento ou informações adicionais."
      className="bg-purple-50/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card icon={Phone} title="WhatsApp" className="p-4 sm:p-6">
            <p className="text-sm sm:text-base">
                (37)99973-2842
            </p>
        </Card>
        <Card icon={Mail} title="E-mail" className="p-4 sm:p-6">
            <p className="text-sm sm:text-base">
                rosangelaterapeuta@gmail.com
            </p>
        </Card>
        <Card icon={MapPin} title="Local" className="p-4 sm:p-6">
            <p className="text-sm sm:text-base">
                Atendimento online ou presencial em Nova Serrana - MG
            </p>
        </Card>
      </div>
    </Section>
  );
}
