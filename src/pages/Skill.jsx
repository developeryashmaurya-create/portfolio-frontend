import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiRedux, SiTailwindcss, SiVercel, SiTensorflow, SiPython, SiRender } from "react-icons/si";
import { SiOpenai, SiTwilio } from "react-icons/si"
const Skill = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        // { name: "React Native", icon: <FaReact className="text-blue-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Context API", icon: <FaReact className="text-blue-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Deployment & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Twilio", icon: <SiTwilio className="text-red-600" /> },
        { name: "Vercel", icon: <SiVercel className="text-black " /> },
        { name: "Render", icon: <SiRender className="text-black " /> },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        { name: "TensorFlow (AI)", icon: <SiTensorflow className="text-orange-600" /> },
        { name: "OpenAI (ChatGPT)", icon: <SiOpenai className="text-green-600" /> },
        
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative py-20 bg-gradient-to-t from-amber-100/50  to-amber-400/60">
      <div className="max-w-6xl px-6 mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-black"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-800">
          Technologies I have worked with in development, deployment, and AI.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === i
                  ? "bg-indigo-500 text-gray-100 shadow-lg"
                  : "bg-white/10 text-gray-900 hover:bg-white/20"
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {categories[activeCategory].skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="relative p-6 transition border shadow-lg group rounded-2xl bg-white/5 backdrop-blur-lg border-white/10 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent rounded-2xl"></div>

              <div className="relative flex flex-col items-center">
                <span className="mb-4 text-5xl">{skill.icon}</span>
                <h3 className="text-lg font-medium text-black/70">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute rounded-full top-20 left-20 w-72 h-72 bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
    </section>
  );
};

export default Skill;
