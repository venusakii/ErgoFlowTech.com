import { Card } from '@/components/ui/card'
import { Wifi, Battery, Gauge, Hand, Grip, Award } from 'lucide-react'

const features = [
  {
    icon: Hand,
    title: 'Natural Hand Position',
    description: 'Vertical design keeps your hand in a neutral handshake position, reducing muscle strain.'
  },
  {
    icon: Wifi,
    title: 'Wireless Freedom',
    description: '2.4GHz wireless connectivity with up to 33ft range. Work without cable restrictions.'
  },
  {
    icon: Battery,
    title: 'Rechargeable Battery',
    description: 'Built-in 500mAh battery lasts up to 60 days on a single charge. USB-C fast charging.'
  },
  {
    icon: Gauge,
    title: 'Adjustable DPI',
    description: 'Switch between 800/1200/1600 DPI settings for precision control in any task.'
  },
  {
    icon: Grip,
    title: 'Ergonomic Grip',
    description: 'Textured rubber side grips and contoured shape fit naturally in your hand.'
  },
  {
    icon: Award,
    title: 'Award Winning Design',
    description: 'Red Dot Design Award winner. Recommended by ergonomists and health professionals.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Engineered for Comfort
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with your health and productivity in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
