import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
export function Hero() {
  return <section id="home" className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", "bg-forest bg-cover bg-center bg-no-repeat parallax")}>
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/[0.46]"></div>
      
      <div className="container mx-auto z-10 px-6 sm:px-8 md:px-12 lg:px-24 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <div className="text-sm font-medium text-white px-4 py-1">Welcome To My Portfolio</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow">
            Hi, I'm <span className="text-nature-beige">Ayush Rathore</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed text-balance">
            Exploring the intersection of technology and creativity through meaningful projects.
          </p>
          
          <a href="#about" className={cn("inline-flex items-center gap-2 px-6 py-3 rounded-full", "bg-white/10 backdrop-blur-lg border border-white/20", "text-white font-medium", "transform transition-all duration-300 hover:bg-white/20")}>
            Learn More 
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg animate-bounce" aria-label="Scroll to About section">
          <ArrowDown className="w-5 h-5 text-white" />
        </a>
      </div>
    </section>;
}