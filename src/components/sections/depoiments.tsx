import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
//className="flex items-center flex-col usar se quiser alinhar os depoimentos

export function Depoiments() {
  return (
    <Section
      id="depoimentos"
      title="Histórias que se transformaram"
      subtitle="Pessoas que olharam com coragem e encontraram paz."
    >
      <Carousel autoplayDelay={6000} className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <Card icon={Heart} title="Ana S."> 
              Saí leve. Foi um divisor de águas.
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card icon={Heart} title="Bruno M.">
              Consegui perdoar meu pai.
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card icon={Heart} title="Carla R.">
              Encontrei minha verdadeira essência.
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
