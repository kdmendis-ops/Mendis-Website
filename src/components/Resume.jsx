import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import mammoth from "mammoth";
import { personal } from "../data/content";

export default function Resume() {
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(personal.resumeFile)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.arrayBuffer();
      })
      .then((buffer) => mammoth.convertToHtml({ arrayBuffer: buffer }))
      .then((result) => {
        setHtml(result.value);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

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
          <div className="w-full max-h-[700px] overflow-y-auto p-8 md:p-12">
            {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {error && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg mb-2">Could not load resume.</p>
                <p className="text-sm">
                  Make sure <code className="bg-gray-100 px-1 rounded">public/resume.docx</code> exists.
                </p>
              </div>
            )}
            {!loading && !error && (
              <div
                className="resume-content prose prose-sm max-w-none text-gray-800 leading-relaxed
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-1
                  [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mt-6 [&_h2]:mb-2
                  [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-800
                  [&_p]:mb-2 [&_p]:text-gray-700
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3
                  [&_li]:mb-1 [&_li]:text-gray-700
                  [&_strong]:text-gray-900
                  [&_a]:text-accent [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
          </div>

          <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              View my full resume above or download a copy.
            </p>
            <a
              href={personal.resumeFile}
              download="Shaun_Kappina_Mendis_Resume.docx"
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
