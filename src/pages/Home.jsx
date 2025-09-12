import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/Developer boy.png";
import { Link as ScrollLink } from "react-scroll";

// Motion-enabled scroll link
const MotionScrollLink = motion(ScrollLink);

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Coding icons to fly around
  const codingIcons = [
    { icon: "💻", name: "laptop" },
    { icon: "🔍", name: "search" },
    { icon: "🚀", name: "rocket" },
    { icon: "🧠", name: "brain" },
    { icon: "🎨", name: "art" },
    { icon: "📱", name: "mobile" },
    { icon: "🌐", name: "web" },
    { icon: "⚡", name: "lightning" },
    { icon: "🔧", name: "tool" },
    { icon: "📊", name: "analytics" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-amber-200/50 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 overflow-hidden py-16"
    >
      {/* Flying coding icons */}
      {codingIcons.map((item, index) => {
        const size = Math.random() * 40 + 30;
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            style={{
              fontSize: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -300, -600, -300, 0],
              x: [0, 100, 200, 100, 0],
              rotate: [0, 180, 360, 180, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          >
            {item.icon}
          </motion.div>
        );
      })}

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 100,100 C 150,50 200,150 250,100 S 350,50 400,100"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 800,300 C 850,250 900,350 950,300 S 1050,250 1100,300"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
          <motion.path
            d="M 500,500 L 700,200 L 900,500 L 1100,200"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 mt-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="uppercase font-medium text-blue-600 tracking-wider mb-2"
            style={{ fontFamily: "Barlow Semi Condensed" }}
            variants={itemVariants}
          >
            Hello, my name is
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-1 leading-tight"
            style={{ fontFamily: "Playfair Display" }}
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={["", 500, "Y", 200, "Ya", 200, "Yas", 200, "Yash", 1000]}
              wrapper="span"
              cursor={false}
              repeat={0}
              className="inline-block"
            />
          </motion.h1>

          <motion.div
            className="inline-block relative mb-2"
            variants={itemVariants}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 relative z-10"
              style={{ fontFamily: "Playfair Display" }}
            >
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Frontend Specialist",
                  1000,
                  "React Developer",
                  1000,
                  "1 Years Experience",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-800"
              />
            </h2>
            <motion.div
              className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 opacity-60 -z-0"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft{" "}
              <span className="font-semibold text-blue-600">responsive</span>,{" "}
              <span className="font-semibold text-purple-600">
                user-friendly
              </span>{" "}
              web experiences with modern technologies and pixel-perfect design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
            variants={containerVariants}
          >
            <MotionScrollLink
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Projects →</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </MotionScrollLink>

            <MotionScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg font-medium relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.span
                className="absolute inset-0 bg-gray-50 rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </MotionScrollLink>
          </motion.div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          className="relative lg:w-1/2 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Gradient border around image */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
                rotate: [0, 360],
              }}
              transition={{
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white p-1 shadow-2xl"
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                <img
                  src={profile}
                  alt="Yash - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Online status pulse */}
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-2 border-white"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(74, 222, 128, 0.7)",
                    "0 0 0 10px rgba(74, 222, 128, 0)",
                    "0 0 0 0 rgba(74, 222, 128, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Available for work</span>
            </motion.div>

            <motion.div
              className="absolute bottom-8 -left-4 bg-white px-4 py-2 rounded-full shadow-md"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-sm font-medium">5+ Projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
