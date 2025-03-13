
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            className="relative"
            data-aos="fade-right"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618568949779-895d81686151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="Ayush Rathore"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className={cn(
              "absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-4 md:p-6",
              "bg-background rounded-2xl border",
              "transform transition-transform duration-500 hover:-translate-y-2"
            )}>
              <p className="text-sm md:text-base font-medium">
                Passion for Clean Code and Innovative Solutions
              </p>
            </div>
          </div>
          
          <div data-aos="fade-left" className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-2">
              About Me
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              A Developer with a <span className="text-nature-medium-green dark:text-nature-light-green">Creator's Heart</span>
            </h2>
            
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground">
                I'm Ayush Rathore, a developer focused on creating beautiful, functional experiences. My journey in technology is driven by curiosity and a desire to build solutions that matter.
              </p>
              
              <p className="text-muted-foreground">
                With a background in design and a deep appreciation for nature, I bring a unique perspective to every project I undertake.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">My Philosophy</h3>
                <p className="text-muted-foreground italic">
                  "Collaboration over competition. The best results come from shared knowledge and collective creativity."
                </p>
              </div>
            </div>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className={cn(
                "p-4 rounded-xl border",
                "bg-secondary/50",
                "transform transition-transform duration-300 hover:-translate-y-1"
              )}>
                <h4 className="text-lg font-medium mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">Computer Science, University of Technology</p>
              </div>
              
              <div className={cn(
                "p-4 rounded-xl border",
                "bg-secondary/50",
                "transform transition-transform duration-300 hover:-translate-y-1"
              )}>
                <h4 className="text-lg font-medium mb-1">Interests</h4>
                <p className="text-sm text-muted-foreground">Web Development, UI/UX, Hiking, Photography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
