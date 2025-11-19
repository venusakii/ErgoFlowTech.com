import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Zap className="w-4 h-4" />
              New Generation Ergonomics
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
              Work Without Pain
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience ultimate comfort with our wireless ergonomic vertical mouse. Designed by health professionals to eliminate wrist strain and boost productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Get Yours Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30 Days</div>
                <div className="text-sm text-muted-foreground">Money Back</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl rounded-full"></div>
            <img
              src="/ergonomic-vertical-wireless-mouse-floating-with-bl.jpg"
              alt="ErgoFlow Vertical Mouse"
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
