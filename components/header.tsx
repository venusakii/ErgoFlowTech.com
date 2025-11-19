'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="currentColor" className="text-primary"/>
              <path d="M8 20C8 20 10 18 12 18C14 18 14 20 16 20C18 20 18 18 20 18C22 18 24 20 24 20V24C24 25.1 23.1 26 22 26H10C8.9 26 8 25.1 8 24V20Z" fill="white"/>
              <path d="M16 8L12 14H20L16 8Z" fill="white"/>
              <circle cx="16" cy="16" r="2" fill="white"/>
            </svg>
            <span className="text-xl font-bold">ErgoFlowTech</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
            <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Specs</a>
            <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Buy Now</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#benefits" className="block text-sm text-muted-foreground hover:text-foreground">Benefits</a>
            <a href="#specs" className="block text-sm text-muted-foreground hover:text-foreground">Specs</a>
            <a href="#reviews" className="block text-sm text-muted-foreground hover:text-foreground">Reviews</a>
            <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground">Pricing</a>
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
