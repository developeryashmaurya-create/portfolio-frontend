// src/context/ContactContext.jsx
import React, { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // function to send message to backend
  const sendMessage = async ({ name, email, message }) => {
    setLoading(true);
    setError("");
    setSuccess(false);
// https://whatappformbackend.onrender.com
    try {
      const res = await fetch("https://whatappformbackend.onrender.com/whatsapp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(true);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider value={{ sendMessage, loading, error, success }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
