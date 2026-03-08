import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { experience, education } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="bg-navy-800 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-navy-800" />

                <div className="bg-navy-700/50 rounded-xl p-6 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="text-accent text-sm font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-gray-400 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-navy-700/50 rounded-xl p-5 border border-white/5 flex items-start gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FiAward className="text-accent text-lg" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.institution}</p>
                {item.year && (
                  <p className="text-gray-500 text-xs mt-1">{item.year}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
