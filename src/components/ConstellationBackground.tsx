'use client'

import { useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useEffects } from '@/contexts/EffectsContext'

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  brightness: number
  color: string
  id: number
}

export default function ConstellationBackground() {
  const { showParticles } = useEffects()
  const particleCount = 8
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const starsRef = useRef<Star[]>([])
  const animationFrameId = useRef<number>(0)

  const colors = useMemo(() => ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#06b6d4'], [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const numStars = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
    const newStars: Star[] = []
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        brightness: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        id: i
      })
    }
    starsRef.current = newStars

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      const stars = starsRef.current
      const mousePos = mousePosRef.current
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        const dx = mousePos.x - star.x
        const dy = mousePos.y - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200
          star.vx += (dx / distance) * force * 0.01
          star.vy += (dy / distance) * force * 0.01
        }

        star.x += star.vx
        star.y += star.vy
        star.vx *= 0.99
        star.vy *= 0.99

        if (star.x < 0 || star.x > canvas.width) star.vx *= -0.5
        if (star.y < 0 || star.y > canvas.height) star.vy *= -0.5
        star.x = Math.max(0, Math.min(canvas.width, star.x))
        star.y = Math.max(0, Math.min(canvas.height, star.y))

        star.brightness = 0.3 + Math.sin(Date.now() * 0.001 + star.id) * 0.7

        ctx.save()
        ctx.globalAlpha = star.brightness
        ctx.fillStyle = star.color
        ctx.shadowBlur = 20
        ctx.shadowColor = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'
      ctx.lineWidth = 1
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            const opacity = (120 - distance) / 120
            ctx.save()
            ctx.globalAlpha = opacity * 0.3
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      stars.forEach(star => {
        const dx = mousePos.x - star.x
        const dy = mousePos.y - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const opacity = (150 - distance) / 150
          ctx.save()
          ctx.globalAlpha = opacity * 0.5
          ctx.strokeStyle = '#8b5cf6'
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(mousePos.x, mousePos.y)
          ctx.stroke()
          ctx.restore()
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [colors])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-50]"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating cosmic particles */}
      {showParticles && (
        <div className="fixed inset-0 pointer-events-none z-[-45]">
          {Array.from({ length: particleCount }).map((_, i) => {
          // Use index-based deterministic positioning to avoid hydration mismatch
          const leftPosition = (i * 37 + 23) % 100; // Deterministic positioning
          const topPosition = (i * 47 + 19) % 100;
          const duration = 5 + (i % 10);
          const delay = i % 5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                left: `${leftPosition}%`,
                top: `${topPosition}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
        </div>
      )}
    </>
  )
}