import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import ChatBot from "./components/ChatBot";
import { personal } from "./data/content";

export default function App() {
  return (
    <div className="bg-navy-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Resume />

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {personal.name}. Built with React
            &amp; Tailwind CSS.
          </p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
