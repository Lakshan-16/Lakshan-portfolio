import { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open modal
  };

  return (
    <section id="contact" className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>
        <p className="text-gray-700 mb-8">
          I’d love to connect! Fill out the form below or reach me via email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-gray-600">
          Or email me directly at{" "}
          <a
            href="mailto:4al21ec042@gmail.com"
            className="text-blue-600 hover:underline"
          >
            4al21ec042@gmail.com
          </a>
        </p>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-gray-700">
          Thank you for reaching out. I'll get back to you soon.
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </Modal>
    </section>
  );
}
