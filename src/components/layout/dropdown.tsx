"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItemProps {
  question: string
  answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full border-none border-gray-200 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex w-full items-center justify-between
          rounded-xl px-4 py-4
          bg-gray-100/50 shadow-lg
          text-left text-base md:text-lg font-medium
          text-gray-800 hover:text-purple-700
          transition-all duration-200
          hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-purple-400
        "
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-purple-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div
              className="
                mt-2 rounded-lg bg-purple-50/60 border border-purple-100 
                px-4 py-3 text-sm md:text-base text-gray-700
              "
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
