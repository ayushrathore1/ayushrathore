
import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the form data into Supabase
      const { error } = await supabase
        .from('messages')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
      
      if (error) {
        throw error;
      }
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Show error message
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section 
      id="contact" 
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        "bg-forest-dark bg-cover bg-center bg-no-repeat parallax"
      )}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      
      <div className="container relative z-10 mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-white">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-2">
              Get In Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Let's <span className="text-nature-beige">Connect</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-md">
              Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className={cn(
                "p-6 rounded-xl",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "transform transition-all duration-300 hover:-translate-y-1"
              )}>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-white/70">contact@ayushrathore.com</p>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "transform transition-all duration-300 hover:-translate-y-1"
              )}>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-white/70">San Francisco, California</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "p-6 md:p-8 rounded-2xl",
            "bg-white/5 backdrop-blur-lg border border-white/10"
          )}>
            <h3 className="text-xl text-white font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full p-3 rounded-lg",
                    "bg-white/10 border border-white/20",
                    "text-white placeholder:text-white/50",
                    "focus:outline-none focus:ring-2 focus:ring-white/30"
                  )}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full p-3 rounded-lg",
                    "bg-white/10 border border-white/20",
                    "text-white placeholder:text-white/50",
                    "focus:outline-none focus:ring-2 focus:ring-white/30"
                  )}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={cn(
                    "w-full p-3 rounded-lg",
                    "bg-white/10 border border-white/20",
                    "text-white placeholder:text-white/50",
                    "focus:outline-none focus:ring-2 focus:ring-white/30"
                  )}
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2",
                  "bg-white/10 hover:bg-white/20 border border-white/20",
                  "text-white font-medium transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-white/30",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
