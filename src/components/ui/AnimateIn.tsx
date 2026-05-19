'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right'

interface AnimateInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: Direction
}

const hidden: Record<Direction, { opacity: number; x?: number; y?: number }> = {
  up: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
}

const visible: Record<Direction, { opacity: number; x: number; y: number }> = {
  up: { opacity: 1, x: 0, y: 0 },
  left: { opacity: 1, x: 0, y: 0 },
  right: { opacity: 1, x: 0, y: 0 },
}

export default function AnimateIn({
  children,
  delay = 0,
  className,
  direction = 'up',
}: AnimateInProps) {
  const [mounted, setMounted] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={hidden[direction]}
      whileInView={visible[direction]}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
