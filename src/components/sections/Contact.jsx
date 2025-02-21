import { useState } from "react";
import { RevealonScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  //create state that keeps track of the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //3.create service id and get service id from emailjs website

  const handleSubmit = (e) => {
    // 1.prevent website from reloading when you submit form
    e.preventDefault();
    //2.make call to emailjs
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("MESSAGE SENT");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Ooops. Something went wrong. Please try again.");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealonScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form className="space-y-6" action="" onSubmit={handleSubmit}>
            {/* Name input field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            {/* Email input field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="exampe@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/*Text area*/}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
                placeholder="Leave a message for us"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealonScroll>
    </section>
  );
};
