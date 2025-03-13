
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for navigation
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    // Add animation to sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-section');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <div className="section-container my-8">
            <About />
          </div>
          <div className="section-container my-8">
            <Projects />
          </div>
          <div className="section-container my-8">
            <Timeline />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
