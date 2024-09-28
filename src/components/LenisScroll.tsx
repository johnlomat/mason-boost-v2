'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisScroll: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with valid options
    const lenis = new Lenis({
      duration: 1.2, // Customize the scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      lerp: 0.1, // Linear interpolation factor (smooth scrolling effect)
    })

    lenisRef.current = lenis

    // Update Lenis on each animation frame
    const animate = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    // Cleanup when the component unmounts
    return () => {
      lenis.destroy()
    }
  }, [])

  return null // This component doesn't render anything visible
}

export default LenisScroll
