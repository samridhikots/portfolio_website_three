import { useState } from "react";

/* =========================================================
   CONTACT FORM SECTION
========================================================= */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(`Message sent! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus(''), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Drop me a message and let's create something amazing.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status && (
              <div className="text-center text-green-400 text-sm font-medium animate-fade-in">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}