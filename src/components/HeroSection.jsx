import { ArrowDown } from "lucide-react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si"; // Import MERN stack icons

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 "
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-purple-400 opacity-0 animate-fade-in-delay-1"> Arjun</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Suresh</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate web developer with hands-on experience in building modern, responsive applications using React and Node.js.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
              View My Work
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
          <img
            src="/projects/mypic.jpg" // Replace with the actual path to your image
            alt="Arjun Suresh"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-purple-600"
          />
          <div className="flex justify-center space-x-6 mt-6">
            <SiMongodb className="w-12 h-12 text-green-500" />
            <SiExpress className="w-12 h-12 text-gray-500" />
            <SiReact className="w-12 h-12 text-blue-500" />
            <SiNodedotjs className="w-12 h-12 text-green-600" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-purple-400" />
      </div>
    </section>
  );
};