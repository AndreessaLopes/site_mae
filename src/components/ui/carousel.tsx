"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

// importa o core do shadcn
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/lib/carousel"

// props para poder customizar autoplay
type CarouselProps = React.ComponentProps<typeof BaseCarousel> & {
  autoplayDelay?: number
}

export function Carousel({
  autoplayDelay = 4000, // 4s padrão
  plugins,
  ...props
}: CarouselProps) {
  // inicializa plugin com delay customizável
  const autoplay = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  )

  return (
    <BaseCarousel
      plugins={[autoplay.current, ...(plugins ?? [])]}
      {...props}
    />
  )
}

export { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi }
