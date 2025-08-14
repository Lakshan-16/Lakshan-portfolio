import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4"
    >
      <motion.h1
        className="text-5xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lakshan
      </motion.h1>

      <motion.p
        className="mt-3 text-lg text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aspiring Electronics and Communication Engineer | Frontend Developer
      </motion.p>

      <motion.div
        className="mt-6 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="https://github.com/Lakshan-16"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lakshan-a6a6b9249/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
