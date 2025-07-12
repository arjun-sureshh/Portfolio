import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4  text-white"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Arjun
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Suresh
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate web developer with hands-on experience in building modern, responsive applications using React and Node.js.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <img
            src="/projects/mypic.jpg" // Replace with the actual path to your image
            alt="Arjun Suresh"
            className="rounded-lg shadow-lg w-64 h-64 object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};