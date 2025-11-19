import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    content: 'After years of wrist pain, this mouse changed everything. I can code for 10 hours straight without discomfort. Absolutely worth it!',
    rating: 5,
    image: '/professional-male-software-developer-headshot.jpg'
  },
  {
    name: 'Jessica Martinez',
    role: 'Graphic Designer',
    content: 'The precision is amazing. DPI switching makes it perfect for both detailed design work and general browsing. My wrist thanks me daily.',
    rating: 5,
    image: '/professional-female-graphic-designer-headshot.jpg'
  },
  {
    name: 'David Thompson',
    role: 'Financial Analyst',
    content: 'Battery life is incredible - I charge it once a month! The wireless range lets me work from my couch. Best tech purchase this year.',
    rating: 5,
    image: '/professional-male-business-analyst-headshot.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Writer',
    content: 'I was skeptical about vertical mice, but this converted me instantly. My shoulder tension disappeared within a week. Highly recommend!',
    rating: 5,
    image: '/professional-female-content-writer-headshot.jpg'
  },
  {
    name: 'Robert Kim',
    role: 'Data Scientist',
    content: 'The programmable buttons are a game changer for my workflow. Build quality is excellent. This mouse is built to last.',
    rating: 5,
    image: '/professional-asian-male-data-scientist-headshot.jpg'
  },
  {
    name: 'Amanda Foster',
    role: 'Marketing Manager',
    content: 'Stylish, comfortable, and functional. My entire team switched after seeing mine. ErgoFlow is now our company standard.',
    rating: 5,
    image: '/professional-female-marketing-manager-headshot.jpg'
  }
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join over 50,000 satisfied users who made the switch to ergonomic comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
