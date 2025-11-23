import React, { useState, useRef } from "react";
import useThemeContext from "../assets/theme";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { themeMode } = useThemeContext();
  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const email = formData.email;

    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // block mistyped
    const blockedDomains = ["gamil.com", "gmial.com", "gmal.com", "eamil.com", "gaiml.com"];

    const domain = email.split("@")[1];

    if (!validEmailRegex.test(email)) {
      toast.error("Invalid email format ❌");
      return;
    }

    if (blockedDomains.includes(domain)) {
      toast.error("Did you mean @gmail.com? Please correct it.");
      return;
    }

    // if passed
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success(`Message sent! I'll get back to you soon 😊`);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message ❌");
        console.error(error);
      });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="w-full py-14 px-4 bg-[#ddddf7] dark:bg-black flex justify-center">
      <div className="w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 bg-[#E0E0F8] dark:bg-gray-900/70 p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 dark:text-white">
          Get in Touch
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {["name", "email"].map((field) => (
            <div key={field}>
              <label className="block mb-1 font-medium capitalize dark:text-gray-200">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field}`}
                required
                className={`w-full px-4 py-2 rounded-lg text-sm sm:text-base outline-none focus:ring-2 transition-all ${themeMode === "dark"
                  ? "bg-[#1a1a1a] border border-gray-700 focus:ring-blue-500 text-white"
                  : "bg-gray-100 border border-gray-300 focus:ring-blue-400"
                  }`}
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className={`w-full px-4 py-2 rounded-lg text-sm sm:text-base outline-none focus:ring-2 resize-none transition-all ${themeMode === "dark"
                ? "bg-[#1a1a1a] border border-gray-700 focus:ring-blue-500 text-white"
                : "bg-gray-100 border border-gray-300 focus:ring-blue-400"
                }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
