"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SafeLogo } from "@/components/ui/safe-logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:py-20 md:grid-cols-2">
        
        {/* Texto */}
        <div className="text-center md:text-left">
          <Badge className="bg-purple-100 text-purple-800 text-xs sm:text-sm px-3 py-1">
            acolhimento • presença • respeito
          </Badge>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-purple-950 leading-snug">
            Espaço acolhedor para olhar sua história com amor
          </h1>

          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-purple-900/80">
            Constelação Familiar é uma vivência breve que traz compreensão sobre
            padrões repetitivos, crenças e traumas, iluminando o que estava oculto
            para que a vida possa fluir com leveza.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3">
            <a
              href="#service"
              className="w-full sm:w-auto text-center rounded-xl bg-purple-700 px-6 py-3 text-white font-medium shadow hover:bg-purple-800 transition-colors"
            >
              Marcar Consulta
            </a>
            <a
              href="#sobre"
              className="w-full sm:w-auto text-center rounded-xl border border-purple-200 bg-white/70 px-6 py-3 text-purple-900 shadow-sm hover:bg-purple-100 transition-colors"
            >
              Saiba mais
            </a>
          </div>

          <p className="mt-6 text-sm sm:text-base italic text-purple-900/70">
            “Que ninguém te faça duvidar... Tu és o sonho de todos os teus antepassados.”  
            <br /> — Bert Hellinger
          </p>
        </div>

        {/* Logo / Imagem */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-64 sm:w-80 md:w-full max-w-md overflow-hidden rounded-3xl border border-purple-100 bg-white/70 shadow-xl backdrop-blur-sm"
          >
            <SafeLogo className="h-full w-full object-contain p-6" rounded />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
