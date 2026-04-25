import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { personal } from "../data/content";

export default function Resume() {
  return (
    <section id="resume" className="bg-navy-900 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Resume
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <iframe
            src={personal.resumeFile}
            title="Resume"
            className="w-full"
            style={{ height: "700px", border: "none" }}
          />

          <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              View my full resume above or download a copy.
            </p>
            <a
              href={personal.resumeFile}
              download="Shaun_Kappina_Mendis_Resume.pdf"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
