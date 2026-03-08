import { motion } from "framer-motion";
import { skills } from "../data/content";

const categories = [...new Set(skills.map((s) => s.category))];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-800 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </motion.div>

        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {cat}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {skills
                .filter((s) => s.category === cat)
                .map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={item}
                    className="bg-navy-700 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium border border-white/5 hover:border-accent/40 hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
