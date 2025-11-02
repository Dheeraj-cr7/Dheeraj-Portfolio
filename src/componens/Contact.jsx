import React, { useState } from "react";
import useThemeContext from "../assets/theme";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { themeMode } = useThemeContext();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thankyou ${e.target.name.value} for reaching out. I'll get back to you soon!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`flex items-center mb-10 justify-center min-h-[20vh] py-2 w-full bg-[#ddddf7] dark:bg-black dark:text-white`}
    >
      <div
        className={`w-full max-w-md border border-gray-700 rounded-2xl shadow-xl py-8 px-16 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-[#E0E0F8] dark:bg-gray-900/70 `}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 transition-all ${
                themeMode === "dark"
                  ? "bg-[#1a1a1a] border border-gray-700 focus:ring-blue-500"
                  : "bg-gray-100 border border-gray-300 focus:ring-blue-400"
              }`}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 transition-all ${
                themeMode === "dark"
                  ? "bg-[#1a1a1a] border border-gray-700 focus:ring-blue-500"
                  : "bg-gray-100 border border-gray-300 focus:ring-blue-400"
              }`}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 resize-none transition-all ${
                themeMode === "dark"
                  ? "bg-[#1a1a1a] border border-gray-700 focus:ring-blue-500"
                  : "bg-gray-100 border border-gray-300 focus:ring-blue-400"
              }`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
