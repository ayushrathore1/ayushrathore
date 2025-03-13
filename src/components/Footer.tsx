import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
const socialLinks = [{
  name: "LinkedIn",
  icon: Linkedin,
  url: "#"
}, {
  name: "Medium",
  icon: Twitter,
  url: "#"
}, {
  name: "Instagram",
  icon: Instagram,
  url: "#"
}, {
  name: "Twitter",
  icon: Twitter,
  url: "#"
}, {
  name: "GitHub",
  icon: Github,
  url: "#"
}];
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="py-16 text-primary-foreground rounded-lg bg-[#000a00]/[0.63]">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Ayush Rathore</h2>
              <p className="text-primary-foreground/70 max-w-md">
                Creating meaningful digital experiences through clean code and thoughtful design.
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={cn("p-3 rounded-full", "bg-primary-foreground/10 hover:bg-primary-foreground/20", "transition-colors duration-300")} aria-label={`Follow on ${social.name}`}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
                &copy; {currentYear} Ayush Rathore. All rights reserved.
              </p>
              
              <div className="flex gap-8">
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}