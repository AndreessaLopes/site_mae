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

export function Depoiments() {
  return (
    <Section
      id="depoimentos"
      title="Histórias que se transformaram"
      subtitle="Pessoas que olharam com coragem e encontraram sua ordem e suas transformações."
    >
      <div className="px-4 sm:px-6">
        <Carousel autoplayDelay={6000} className="w-full mx-auto sm:max-w-3xl md:max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <Card icon={Heart} title="Ana S." className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-center">Saí leve. Foi um divisor de águas.</p>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card icon={Heart} title="Bruno M." className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-center">Consegui perdoar meu pai.</p>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card icon={Heart} title="Carla R." className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-center">Encontrei minha verdadeira essência.</p>
              </Card>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="sm:-left-6" />
          <CarouselNext className="sm:-right-6" />
        </Carousel>
      </div>
    </Section>
  );
}
