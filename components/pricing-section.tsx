import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Single Pack',
    price: '$69',
    description: 'Perfect for individual use',
    features: [
      'ErgoFlow Vertical Mouse',
      'USB-C Charging Cable',
      'Wireless USB Receiver',
      '2-Year Warranty',
      'Free Shipping',
      '30-Day Money Back'
    ],
    popular: false
  },
  {
    name: 'Double Pack',
    price: '$119',
    originalPrice: '$138',
    description: 'Best value - Save $19',
    features: [
      '2x ErgoFlow Vertical Mouse',
      '2x USB-C Charging Cable',
      '2x Wireless USB Receiver',
      '2-Year Warranty',
      'Free Priority Shipping',
      '30-Day Money Back',
      'Free Mouse Pad'
    ],
    popular: true
  },
  {
    name: 'Team Pack',
    price: '$279',
    originalPrice: '$345',
    description: '5 mice - Save $66',
    features: [
      '5x ErgoFlow Vertical Mouse',
      '5x USB-C Charging Cable',
      '5x Wireless USB Receiver',
      '2-Year Warranty',
      'Free Express Shipping',
      '30-Day Money Back',
      '5x Premium Mouse Pads',
      'Dedicated Support'
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free shipping on all orders. 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                pkg.popular ? 'border-2 border-primary shadow-xl scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                
                
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                size="lg"
                variant={pkg.popular ? 'default' : 'outline'}
              >
                Order Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All prices in USD. Secure checkout with SSL encryption.
          </p>
        </div>
      </div>
    </section>
  )
}
