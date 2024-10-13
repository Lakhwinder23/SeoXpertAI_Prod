'use client'

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Menu, Shield, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Trash2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            <span className="text-lg sm:text-xl font-bold">WasteInspect Pro</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link className="text-sm font-medium hover:text-green-600" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#testimonials">
              Testimonials
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#faq">
              FAQ
            </Link>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <Link href="/schedule-demo">
            <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700">Get Started</Button>
          </Link>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <nav className="flex flex-col space-y-2">
            <Link className="text-sm font-medium hover:text-green-600" href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/schedule-demo">
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Efficient Waste Management Inspections
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Streamline your waste management processes with our cutting-edge inspection technology
            </p>
            <Link href="/schedule-demo">
              <Button className="bg-green-600 hover:bg-green-700 text-base sm:text-lg py-2 px-4 sm:px-6">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </section>

        {/* ... other sections ... */}
        
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Optimize Your Waste Management?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Get started with WasteInspect Pro today</p>
            <Link href="/schedule-inspection">
              <Button className="bg-white text-green-600 hover:bg-gray-100 text-base sm:text-lg py-2 px-4 sm:px-6">
                Schedule Your Inspection
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Trash2 className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-base sm:text-lg font-semibold">WasteInspect Pro</span>
            </div>
            {/* ... other footer content ... */}
          </div>
        </div>
      </footer>
    </div>
  );
}
