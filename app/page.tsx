import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, Flower, Leaf, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ProductCard from "@/components/product-card"
import ImpactCard from "@/components/impact-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Mujeres de Dipilto</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-primary">
              Sobre Nosotros
            </Link>
            <Link href="#productos" className="text-sm font-medium hover:text-primary">
              Productos
            </Link>
            <Link href="#impacto" className="text-sm font-medium hover:text-primary">
              Impacto
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Contáctanos</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative bg-cover bg-center py-20 md:py-32"
          style={{
            backgroundImage: "url('/mujer de campo.jpeg')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Impulsando la agroecología y el empoderamiento femenino para un futuro sostenible
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Cooperativa Multisectorial Mujeres Trabajadoras de Dipilto R.L
            </p>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
              Conoce nuestros productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="nosotros" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Sobre Nosotros</h2>
              <div className="mt-4 h-1 w-20 bg-primary rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Coffee className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Misión</h3>
                <p className="mt-2 text-muted-foreground">
                  Producir y comercializar productos orgánicos de alta calidad, promoviendo la agroecología y el
                  empoderamiento de las mujeres en nuestra comunidad.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Flower className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Visión</h3>
                <p className="mt-2 text-muted-foreground">
                  Ser una cooperativa líder en la producción sostenible, reconocida por nuestro compromiso con la
                  biodiversidad y la economía social y solidaria.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm lg:col-span-1 md:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Valores</h3>
                <p className="mt-2 text-muted-foreground">
                  Sostenibilidad, cooperación, equidad, transparencia y compromiso con la comunidad y el medio ambiente.
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Image
                src="/Las odiosas.jpg"
                alt="Mujeres trabajadoras de Dipilto"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="productos" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nuestros Productos</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Productos orgánicos cultivados con amor y respeto por la naturaleza
              </p>
              <div className="mt-4 h-1 w-20 bg-primary rounded"></div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard
                title="Café Orgánico"
                description="Café de altura cultivado bajo sombra con métodos tradicionales y sostenibles."
                imageSrc="/Cafe Organico.webp"
                color="bg-amber-800"
                textColor="text-amber-50"
              />
              <ProductCard
                title="Miel de Abejas"
                description="Miel pura y natural producida por abejas que polinizan nuestros cultivos orgánicos."
                imageSrc="/Cafe Organico.webp"
                color="bg-amber-400"
                textColor="text-amber-950"
              />
              <ProductCard
                title="Viveros"
                description="Plantas y semillas nativas para reforestación y cultivos sostenibles."
                imageSrc="/Cafe Organico.webp"
                color="bg-green-600"
                textColor="text-green-50"
              />
              <ProductCard
                title="Musáceas"
                description="Plátanos y bananos cultivados con prácticas agroecológicas que preservan la biodiversidad."
                imageSrc="/Cafe Organico.webp"
                color="bg-green-500"
                textColor="text-green-950"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impacto" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Impacto y Sostenibilidad</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Transformando vidas y protegiendo nuestro entorno
              </p>
              <div className="mt-4 h-1 w-20 bg-primary rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ImpactCard
                title="Empoderamiento Femenino"
                description="Más de 50 mujeres han logrado independencia económica a través de nuestra cooperativa."
                icon="👩‍🌾"
              />
              <ImpactCard
                title="Prácticas Agroecológicas"
                description="100% de nuestros cultivos utilizan métodos orgánicos que preservan la salud del suelo."
                icon="🌱"
              />
              <ImpactCard
                title="Comercio Justo"
                description="Garantizamos precios justos para nuestras productoras y relaciones comerciales éticas."
                icon="🤝"
              />
              <ImpactCard
                title="Conservación de Biodiversidad"
                description="Hemos reforestado más de 10 hectáreas con especies nativas en los últimos 5 años."
                icon="🌳"
              />
              <ImpactCard
                title="Educación Ambiental"
                description="Capacitamos a más de 200 personas al año en técnicas de agricultura sostenible."
                icon="📚"
              />
              <ImpactCard
                title="Desarrollo Comunitario"
                description="Invertimos en proyectos de infraestructura y servicios para nuestra comunidad."
                icon="🏡"
              />
            </div>
            <div className="mt-12 bg-card rounded-lg p-6 shadow-sm border">
              <blockquote className="italic text-lg text-center">
                "Formar parte de la cooperativa ha transformado mi vida. Ahora puedo mantener a mi familia con dignidad
                mientras cuido de nuestra tierra."
                <footer className="mt-2 font-medium not-italic">— María Jiménez, Socia desde 2015</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contáctanos</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Estamos aquí para responder tus preguntas y atender tus pedidos
              </p>
              <div className="mt-4 h-1 w-20 bg-primary rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Envíanos un mensaje</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-32" />
                  </div>
                  <Button className="w-full">
                    Enviar mensaje
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-3 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-muted-foreground">+505 1234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-3 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <div>
                        <p className="font-medium">Correo electrónico</p>
                        <p className="text-muted-foreground">info@mujeresdedipilto.org</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-3 text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-muted-foreground">Comunidad El Dipilto, Nueva Segovia, Nicaragua</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Mujeres de Dipilto</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Cooperativa Multisectorial Mujeres Trabajadoras de Dipilto R.L, comprometidas con la producción orgánica
                y el desarrollo sostenible.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-sm text-muted-foreground hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-sm text-muted-foreground hover:text-primary">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#productos" className="text-sm text-muted-foreground hover:text-primary">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#impacto" className="text-sm text-muted-foreground hover:text-primary">
                    Impacto
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-sm text-muted-foreground hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Café Orgánico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Miel de Abejas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Viveros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Musáceas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Boletín informativo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Suscríbete para recibir noticias sobre nuestros productos y eventos.
              </p>
              <form className="space-y-2">
                <Input placeholder="Tu correo electrónico" />
                <Button className="w-full">Suscribirse</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cooperativa Multisectorial Mujeres Trabajadoras de Dipilto R.L. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/**
 * 
 * gegdjh npm install date-fns@^2.28.0
npm install --legacy-peer-deps
solo instale esas y funcion jajaja
 */