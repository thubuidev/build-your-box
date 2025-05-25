"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Toast({ message, show, onClose }: {
  message: string
  show: boolean
  onClose: () => void
}) {
    useEffect(() => {
        if (show) {
        const timer = setTimeout(() => {
            onClose()
        }, 3000)
        return () => clearTimeout(timer)
        }
    }, [show, onClose])

  

  return (
    <div className={cn(
      "fixed top-0 lg:left-[-80px] left-0 z-50 transition-all duration-300",
      show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
    )}>
      <div className="flex items-center gap-3 rounded-xl bg-green-100 text-green-800 px-4 py-3 shadow-lg border border-green-200">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}
