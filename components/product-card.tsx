import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  color: string
  textColor: string
}

export default function ProductCard({ title, description, imageSrc, color, textColor }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-md">
      <div className={`absolute inset-0 z-10 ${color} opacity-0 transition-opacity group-hover:opacity-90`}></div>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Button variant="outline" size="sm" className="group-hover:bg-transparent group-hover:border-white">
            <span className="group-hover:text-white">Ver detalles</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:text-white" />
          </Button>
        </div>
      </div>
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100`}
      >
        <div className={`text-center p-4 ${textColor}`}>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2">{description}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 border-current bg-transparent text-current hover:bg-white/10"
          >
            Ver detalles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

