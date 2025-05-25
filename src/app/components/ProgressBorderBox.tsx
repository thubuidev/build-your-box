import { useEffect, useState } from "react"

export default function ProgressBorderBox({
  progress, // 0 -> 1
  children,
}: {
  progress: number
  children: React.ReactNode
}) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const start = animatedProgress
    const end = Math.min(Math.max(progress, 0), 1)
    const duration = 400 // ms
    const stepTime = 16 // ms
    const totalSteps = duration / stepTime
    let step = 0

    const animate = () => {
      step++
      const current = start + (end - start) * (step / totalSteps)
      setAnimatedProgress(current)
      if (step < totalSteps) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [progress])

  const percentage = animatedProgress * 100

  return (
    <div className="relative p-2">
      {/* Viền progress */}
      <div
        className="absolute inset-0 z-0 rounded-[20px] transition-all"
        style={{
          background: `conic-gradient(#caf1ff ${percentage}%, #1c1917 ${percentage}%)`,
          padding: "4px",
          borderRadius: "20px",
        }}
      >
        <div className="w-full h-full bg-[#3c260f] rounded-[16px]" />
      </div>

      {/* Nội dung */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
