import { Card } from '@/components/ui/card'
import { Check, X } from 'lucide-react'

const comparisons = [
  { feature: 'Ergonomic Design', traditional: false, ergoflow: true },
  { feature: 'Reduces Wrist Strain', traditional: false, ergoflow: true },
  { feature: 'Wireless Connectivity', traditional: false, ergoflow: true },
  { feature: 'Rechargeable Battery', traditional: false, ergoflow: true },
  { feature: 'Adjustable DPI', traditional: false, ergoflow: true },
  { feature: 'Programmable Buttons', traditional: false, ergoflow: true },
  { feature: '2-Year Warranty', traditional: false, ergoflow: true },
  { feature: 'Money-Back Guarantee', traditional: false, ergoflow: true }
]

export function ComparisonSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose ErgoFlow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we stack up against traditional mice
          </p>
        </div>

        <Card className="max-w-3xl mx-auto overflow-hidden">
          <div className="grid grid-cols-3 bg-muted p-4 font-semibold">
            <div className="col-span-1">Feature</div>
            <div className="text-center">Traditional Mouse</div>
            <div className="text-center text-primary">ErgoFlow</div>
          </div>
          
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-4 items-center ${
                index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'
              }`}
            >
              <div className="col-span-1 font-medium">{item.feature}</div>
              <div className="text-center">
                {item.traditional ? (
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </div>
              <div className="text-center">
                {item.ergoflow ? (
                  <Check className="w-5 h-5 text-accent mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}
