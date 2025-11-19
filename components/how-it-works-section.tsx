import { Card } from '@/components/ui/card'

const steps = [
  {
    step: '01',
    title: 'Unbox & Charge',
    description: 'Remove your mouse, plug in the USB-C cable, and charge for 2 hours. The LED indicator will show when ready.'
  },
  {
    step: '02',
    title: 'Connect Wirelessly',
    description: 'Insert the USB receiver into your computer. The mouse automatically pairs - no software installation needed.'
  },
  {
    step: '03',
    title: 'Adjust Settings',
    description: 'Press the DPI button to select your preferred sensitivity. Customize buttons using our free software (optional).'
  },
  {
    step: '04',
    title: 'Work Comfortably',
    description: 'Rest your hand naturally on the mouse. Feel the difference as strain melts away during your work day.'
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple setup, instant comfort. No complicated configuration required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
