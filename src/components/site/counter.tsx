import { useEffect, useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'

export function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!visible) return
    const duration = 1400
    const start = performance.now()

    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, target])

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
