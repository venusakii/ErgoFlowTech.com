import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Reduces Wrist Pain',
    description: 'Vertical position eliminates forearm twisting, reducing pressure on wrist nerves and tendons.'
  },
  {
    title: 'Prevents RSI',
    description: 'Natural grip angle helps prevent Repetitive Strain Injury and Carpal Tunnel Syndrome.'
  },
  {
    title: 'Improves Posture',
    description: 'Encourages proper arm and shoulder positioning, reducing neck and shoulder tension.'
  },
  {
    title: 'Increases Productivity',
    description: 'Work longer without discomfort. 87% of users report increased work efficiency.'
  }
]

export function HealthBenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Your Health is Our Priority
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Developed in collaboration with ergonomists and physiotherapists. The ErgoFlow mouse is clinically proven to reduce wrist strain by up to 78%.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "The ErgoFlow mouse has been a game-changer for my patients suffering from RSI. I recommend it to anyone who spends hours at a computer."
                <footer className="mt-2 text-sm font-semibold text-foreground not-italic">
                  — Dr. Sarah Mitchell, Occupational Therapist
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <img
              src="/medical-professional-showing-proper-ergonomic-hand.jpg"
              alt="Health Benefits"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
