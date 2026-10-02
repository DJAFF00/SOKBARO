import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { MenuSection } from './components/MenuSection';
import { AmbianceSection } from './components/AmbianceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PracticalInfoSection } from './components/PracticalInfoSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  // Butter-smooth scroll initialization with Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleToggleDish = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName) ? prev.filter((d) => d !== dishName) : [...prev, dishName]
    );
  };

  return (
    <div className="min-h-screen bg-[#0E0B09] text-[#F7F2EA] selection:bg-[#D8984E] selection:text-[#0E0B09] relative">
      {/* 1. Preloader */}
      {!preloaderFinished && <Preloader onComplete={() => setPreloaderFinished(true)} />}

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Luxury Layout */}
      <main className="relative">
        {/* 2. Hero Section with Real Scroll Parallax */}
        <Hero />

        {/* 3. Concept Section with Layered Depth */}
        <Concept />

        {/* 4. Menu & Tapas Showcase with Horizontal Scroll */}
        <MenuSection selectedDishes={selectedDishes} onToggleDish={handleToggleDish} />

        {/* 5. Ambiance & Setting */}
        <AmbianceSection />

        {/* 6. Google 4.9 Verified Reviews Guestbook */}
        <ReviewsSection />

        {/* 7. Practical Info & Welcoming Visit */}
        <PracticalInfoSection />

        {/* 8. WhatsApp Concierge Reservation Module */}
        <ReservationSection selectedDishes={selectedDishes} />
      </main>

      {/* 9. Grand Footer */}
      <Footer />

      {/* Floating Pulsing WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
