import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How long does shipping take?',
    answer: 'We offer free standard shipping (5-7 business days), priority shipping (3-4 business days), and express shipping (1-2 business days). All orders are processed within 24 hours.'
  },
  {
    question: 'Is the mouse compatible with my computer?',
    answer: 'Yes! The ErgoFlow mouse works with Windows, Mac, Linux, and even Chrome OS. Simply plug in the USB receiver and it works instantly - no drivers needed.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied, return the mouse for a full refund. We also provide a 2-year manufacturer warranty covering defects.'
  },
  {
    question: 'How do I charge the mouse?',
    answer: 'The mouse includes a USB-C charging cable. Simply connect it to any USB port or wall adapter. A full charge takes 2 hours and lasts up to 60 days with regular use. An LED indicator shows charging status.'
  },
  {
    question: 'Can I customize the buttons?',
    answer: 'Yes! Download our free software from our website to program all 6 buttons. Create custom macros, shortcuts, and profiles for different applications.'
  },
  {
    question: 'Will this help with my carpal tunnel?',
    answer: 'While we can\'t make medical claims, the vertical design is recommended by ergonomists to reduce wrist strain. Many customers report significant relief from RSI symptoms. Consult your doctor for medical advice.'
  },
  {
    question: 'Is it suitable for gaming?',
    answer: 'While designed primarily for productivity and ergonomics, the adjustable DPI (up to 1600) makes it suitable for casual gaming. Competitive gamers may prefer specialized gaming mice.'
  },
  {
    question: 'What\'s included in the box?',
    answer: 'Each package includes: ErgoFlow Vertical Mouse, USB-C charging cable, 2.4GHz wireless USB receiver, quick start guide, and warranty card. Team packs also include premium mouse pads.'
  }
]

export function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about the ErgoFlow mouse
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </section>
  )
}
