
import { cn } from "@/lib/utils";

type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
};

const events: TimelineEvent[] = [
  {
    id: "html-css",
    date: "December 2024",
    title: "HTML, CSS & Tailwind",
    description: "Began my coding journey by mastering HTML and CSS fundamentals. Explored the efficiency of Tailwind CSS for rapid, responsive design."
  },
  {
    id: "javascript",
    date: "January-February 2025",
    title: "JavaScript",
    description: "Dived deep into JavaScript, learning core concepts, DOM manipulation, asynchronous programming, and modern ES6+ features."
  },
  {
    id: "react",
    date: "March 2025",
    title: "React.js",
    description: "Started building interactive UIs with React. Explored components, state management, hooks, and the virtual DOM."
  },
  {
    id: "git",
    date: "March 2025",
    title: "Git & GitHub",
    description: "Learned version control with Git and collaborative development through GitHub. Practiced branching, merging, and pull requests."
  },
  {
    id: "coding",
    date: "March 2025",
    title: "Vibe Coding",
    description: "Developed a coding style that balances aesthetics and functionality. Focused on writing clean, maintainable code that serves user needs."
  },
  {
    id: "codelearn",
    date: "March 2025",
    title: "CodeLearn Project",
    description: "Applied my skills to create CodeLearn, an interactive platform helping beginners learn to code through hands-on practice."
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-2">
            My Journey
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Learning <span className="text-nature-medium-green dark:text-nature-light-green">Timeline</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Tracing my path through the world of web development, from fundamentals to creating meaningful projects.
          </p>
        </div>
        
        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border transform -translate-x-1/2 z-0"></div>
          
          {events.map((event, index) => (
            <div 
              key={event.id}
              className={cn(
                "relative z-10 flex items-start w-full mb-12 last:mb-0",
                index % 2 === 0 
                  ? "md:flex-row" 
                  : "md:flex-row-reverse",
                "flex-col"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 md:left-auto md:right-1/2 transform -translate-x-1/2 md:translate-x-0 top-0 mt-1 z-10">
                <div className="w-4 h-4 rounded-full bg-nature-medium-green dark:bg-nature-light-green"></div>
              </div>
              
              {/* Timeline content */}
              <div 
                className={cn(
                  "w-full md:w-1/2",
                  index % 2 === 0 
                    ? "md:pr-12 lg:pr-16 md:text-right" 
                    : "md:pl-12 lg:pl-16",
                  "mt-8 md:mt-0"
                )}
              >
                <div className={cn(
                  "p-6 rounded-xl",
                  "bg-card border",
                  "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                )}>
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
