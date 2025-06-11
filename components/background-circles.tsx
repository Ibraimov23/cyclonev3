"use client"

import { useEffect, useRef, useState } from "react"

export default function BackgroundCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  // Устанавливаем флаг клиентского рендеринга только после монтирования компонента
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Выходим, если мы не на клиенте или canvas не существует
    if (!isClient || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Устанавливаем размер canvas в соответствии с размером окна, но не больше
    const setCanvasSize = () => {
      if (!canvas) return
      const width = Math.min(window.innerWidth, document.documentElement.clientWidth)
      const height = Math.min(window.innerHeight, document.documentElement.clientHeight)
      canvas.width = width
      canvas.height = height
      return { width, height }
    }

    let { width, height } = setCanvasSize() || { width: 0, height: 0 }

    const circles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
      maxRadius: number
      minRadius: number
      growSpeed: number
      growing: boolean
      draw: () => void
      update: () => void
    }[] = []

    const circleCount = 15
    const colors = ["#FFF0F1", "#FFD9DC", "#FFB3B9", "#FF8D96", "#90010A"]

    class Circle {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
      maxRadius: number
      minRadius: number
      growSpeed: number
      growing: boolean

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.minRadius = Math.random() * 20 + 10
        this.radius = this.minRadius + Math.random() * 20
        this.maxRadius = this.radius + Math.random() * 20
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.2 + 0.1
        this.growSpeed = Math.random() * 0.1 + 0.05
        this.growing = Math.random() > 0.5
      }

      draw() {
        if (!ctx) return
        const safeRadius = Math.max(1, this.radius)
        ctx.beginPath()
        ctx.arc(this.x, this.y, safeRadius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
      }

      update() {
        if (this.growing) {
          this.radius += this.growSpeed
          if (this.radius >= this.maxRadius) {
            this.growing = false
          }
        } else {
          this.radius -= this.growSpeed
          if (this.radius <= this.minRadius) {
            this.growing = true
            this.radius = this.minRadius
          }
        }

        this.x += this.speedX
        this.y += this.speedY

        // Обеспечиваем, чтобы круги не выходили за пределы canvas
        if (this.x < -this.radius) {
          this.x = width + this.radius
        } else if (this.x > width + this.radius) {
          this.x = -this.radius
        }

        if (this.y < -this.radius) {
          this.y = height + this.radius
        } else if (this.y > height + this.radius) {
          this.y = -this.radius
        }
      }
    }

    // Создаем круги только после того, как canvas инициализирован
    for (let i = 0; i < circleCount; i++) {
      circles.push(new Circle())
    }

    let animationFrameId: number

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      ctx.globalAlpha = 1
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      circles.forEach((circle) => {
        circle.draw()
        circle.update()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Безопасно добавляем обработчик события resize
    function handleResize() {
      const dimensions = setCanvasSize()
      if (dimensions) {
        width = dimensions.width
        height = dimensions.height
      }
    }

    // Добавляем обработчик события только если window существует
    window.addEventListener("resize", handleResize)

    // Запускаем анимацию
    animate()

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isClient]) // Зависимость от isClient гарантирует, что эффект запустится только на клиенте

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" />
}
