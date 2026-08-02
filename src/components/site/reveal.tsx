import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <Tag
      ref={ref as React.RefObject<any>}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
