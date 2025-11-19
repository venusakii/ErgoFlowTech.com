import { Card } from '@/components/ui/card'

const specs = [
  { label: 'Connectivity', value: '2.4GHz Wireless' },
  { label: 'Range', value: 'Up to 33ft (10m)' },
  { label: 'Battery', value: '500mAh Rechargeable' },
  { label: 'Battery Life', value: 'Up to 60 days' },
  { label: 'Charging', value: 'USB-C, 2 hours full' },
  { label: 'DPI Settings', value: '800 / 1200 / 1600' },
  { label: 'Buttons', value: '6 Programmable' },
  { label: 'Dimensions', value: '4.7" × 3" × 2.8"' },
  { label: 'Weight', value: '4.2 oz (120g)' },
  { label: 'Compatibility', value: 'Windows, Mac, Linux' },
  { label: 'Material', value: 'ABS + Rubber Grip' },
  { label: 'Warranty', value: '2 Years' }
]

export function SpecificationsSection() {
  return (
    <section id="specs" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium quality meets cutting-edge technology
          </p>
        </div>

        <Card className="p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                <span className="font-medium text-muted-foreground">{spec.label}</span>
                <span className="font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * All specifications are subject to actual product. Battery life may vary based on usage.
          </p>
        </div>
      </div>
    </section>
  )
}
