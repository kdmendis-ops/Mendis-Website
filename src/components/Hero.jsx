import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { personal } from "../data/content";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden"
    >
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Shaun Kappina Mendis"
            className="w-36 h-36 rounded-full object-cover object-top border-4 border-accent shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            {personal.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
            {personal.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#resume"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <FiFileText className="text-lg" />
            View Resume
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-accent text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <FiGithub className="text-lg" />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-accent text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <FiLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-accent text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <FiMail className="text-lg" />
            Contact
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#skills" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
