
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    id: "codelearn",
    title: "CodeLearn",
    description: "An interactive platform for beginners to learn coding through hands-on exercises and real-time feedback. Features a code editor, lesson plans, and community support.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    video: "https://player.vimeo.com/external/517090081.hd.mp4?s=8b12f4160b43bf3a675b88810226c9920d84d341&profile_id=174&oauth2_token_id=57447761",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A nature-themed portfolio website showcasing my projects and skills with smooth animations and interactive UI elements. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "#"
  }
];

export function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const handleMouseEnter = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project?.video) {
      setActiveVideo(projectId);
    }
  };
  
  const handleMouseLeave = () => {
    setActiveVideo(null);
  };
  
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-2">
            My Work
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Recent <span className="text-nature-medium-green dark:text-nature-light-green">Projects</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Explore my latest projects showcasing my skills and passion for creating intuitive and visually appealing digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={cn(
                "group rounded-2xl overflow-hidden transition-all duration-500",
                "bg-card border hover:shadow-lg",
                "transform hover:-translate-y-2"
              )}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="aspect-video relative overflow-hidden">
                {activeVideo === project.id && project.video ? (
                  <video 
                    className="w-full h-full object-cover"
                    src={project.video}
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "p-2 rounded-full",
                        "bg-white/20 backdrop-blur-md",
                        "text-white hover:bg-white/30 transition-colors"
                      )}
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "p-2 rounded-full",
                        "bg-white/20 backdrop-blur-md",
                        "text-white hover:bg-white/30 transition-colors"
                      )}
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
