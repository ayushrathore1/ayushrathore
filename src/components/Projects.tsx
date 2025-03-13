
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
    description:
      "As many students struggle to fins the right resources to learn a particular programming language, The CodeLearn provides the users a platform to find the best resources to learn coding.",
    image:
      "https://ik.imagekit.io/ayushrathore/Images/welcome.jpg?updatedAt=1741880501987",
    video:
      "https://ik.imagekit.io/ayushrathore/Untitled%20design.mp4?updatedAt=1741144800606",
    technologies: ["HTML", "CSS", "JavaScript", "Git/Github", "imagekit.io"],
    liveLink: "https://codelearnn.netlify.app/",
    githubLink: "https://github.com/ayushrathore1/CodeLearn",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A nature-themed portfolio website showcasing my projects and skills with smooth animations and interactive UI elements. Built with modern web technologies.",
    image:
      "https://ik.imagekit.io/ayushrathore/Images/portfolio.png?updatedAt=1741892297030",
     video:
      "https://ik.imagekit.io/ayushrathore/portfolio.mp4?updatedAt=1741893853625",
    technologies: ["Vibe Coding", "Some Debugging"],
      liveLink: "https://portfolio-ayushrathore.lovable.app/",
    githubLink: "https://github.com/ayushrathore1/eco-journey-showcase",
  },
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
    <section id="projects" className="w-full py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Media Card (Left) */}
                <div 
                  className={cn(
                    "relative rounded-2xl overflow-hidden aspect-video",
                    "bg-card border shadow-md",
                    "transform transition-all duration-500 hover:-translate-y-2"
                  )}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
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
                
                {/* Content Card (Right) */}
                <div 
                  className={cn(
                    "rounded-2xl p-6 md:p-8 h-full flex flex-col",
                    "bg-card border shadow-md",
                    "transform transition-all duration-500 hover:-translate-y-2"
                  )}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
