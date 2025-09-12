import React, { useState } from "react";
import {
  MapPin,
  Send,
  Linkedin,
  Github,
} from "lucide-react"; // ✅ modern icons
import { SiLeetcode } from "react-icons/si"; // keeping since lucide doesn’t have
import { motion } from "framer-motion";
import { useContact } from "../context/ContactContext";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isExistingClient, setIsExistingClient] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, loading, error, success } = useContact();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await sendMessage({ name, email, message });

    if (data) {
      if (data.existingClient) {
        setIsExistingClient(true);
        if (data.messageHistory) setMessageHistory(data.messageHistory);
      } else {
        setIsExistingClient(false);
        setSubmitted(true);
      }

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  // Animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="contact"
      className="bg-gradient-to-b from-amber-200/50 via-amber-100/ to-amber-500/55 py-16 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Let’s Work Together
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you have a new project idea, a question, or just want to say
            hi — I’d love to connect with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-amber-200/20 rounded-3xl shadow-2xl p-10 relative overflow-hidden"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
              <motion.span whileHover={{ rotate: -10 }} whileTap={{ scale: 0.9 }}>
                <MapPin className="h-6 w-6 mr-2 text-amber-500" />
              </motion.span>
              Contact Information
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <span className="font-semibold">📍 Location:</span> Lucknow,
                India
              </p>
              <p>
                <span className="font-semibold">📞 Phone:</span> +91 8787256663
              </p>
              <p>
                <span className="font-semibold">📧 Email:</span>{" "}
                yashmaurya3377@gmail.com
              </p>
            </div>
            <div className="mt-8 flex space-x-6 text-2xl">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/yash-maurya-3377"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-amber-500 transition-colors"
              >
                <Linkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/yashmaurya3377"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-amber-500 transition-colors"
              >
                <Github />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://leetcode.com/yashmaurya3377"
                target="_blank"
                rel="noreferrer"
                className="text-orange-500 hover:text-amber-500 transition-colors"
              >
                <SiLeetcode />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 rounded-3xl shadow-xl border border-gray-100 p-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h2>

            {/* Error */}
            {error && (
              <p className="bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-lg mb-4">
                ❌ {error}
              </p>
            )}

            {/* Success */}
            {submitted ? (
              <div className="text-center text-green-700 font-medium bg-green-50 border border-green-200 p-6 rounded-xl">
                🎉 Message Sent Successfully!
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mt-4 text-blue-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : isExistingClient ? (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Welcome back, {name}!
                </h3>
                <p className="mb-4 text-gray-600">
                  We’ve added your latest message to your history.
                </p>
                {messageHistory.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg max-h-44 overflow-y-auto border border-gray-100">
                    {messageHistory.map((msg, i) => (
                      <p key={i} className="text-sm text-gray-700 mb-2">
                        - {msg.content}
                      </p>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setIsExistingClient(false)}
                  className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
