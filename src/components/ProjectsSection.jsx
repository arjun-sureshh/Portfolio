import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quiz App",
    description: "Dynamic quiz application built with React, featuring API integration, live scoring, and high score leaderboard.",
    image: "/projects/quiz-app.png",
    tags: ["React", "JavaScript", "API", "LocalStorage"],
    demoUrl: "https://quiz-rho-hazel.vercel.app/",
    githubUrl: "https://github.com/arjun-sureshh/Quiz",
  },
  {
    id: 2,
    title: "Memmory Game",
    description:
      "Interactive memory card game using React with real-time matching logic, move counter, and timer.",
    image: "/projects/memmory-game.png",
    tags: ["React", "Javascript","CSS"],
    demoUrl: "https://memory-game-snowy-nine.vercel.app/",
    githubUrl: "https://github.com/arjun-sureshh/MemoryGame",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce website built with the MERN stack, featuring user authentication, product management, and secure checkout.",
    image: "/projects/e-commerce-project.png",
    tags: ["React","TypeScript", "Node.js", "MongoDB","Express","Material ui"],
    demoUrl: "https://bee-store.up.railway.app/",
    githubUrl: "https://github.com/arjun-sureshh/BeeStore-Client-Side",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    description:
      "Classic Tic-Tac-Toe game in React with pop-up win animations, player switching, and gradient-themed UI.",
    image: "/projects/tic-tac-tio.png",
    tags: ["React", "CSS", "JavaScript"],
    demoUrl: "https://tic-tac-toe-eight-eta-63.vercel.app/",
    githubUrl: "https://github.com/arjun-sureshh/Tic-Tac-Toe",
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "Simple and responsive calculator built with HTML, CSS, and JavaScript for basic arithmetic operations.",
    image: "/projects/calculator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/arjun-sureshh/Calculator-Project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/arjun-sureshh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
