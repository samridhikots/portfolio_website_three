import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../../models";
import useAlert from "../../hooks/useAlert";
import Alert from "../ui/Alert";
import Loader from "../core/Loader";

const ContactForm = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  /* ============================
     FORM HANDLERS
  ============================ */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    try {
      /**
       * Replace with API call later
       */

      // Temporary simulated request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      showAlert({
        text: "Message sent successfully!",
        type: "success",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);

      showAlert({
        text: "Something went wrong. Please try again.",
        type: "danger",
      });
    } finally {
      setLoading(false);
      setCurrentAnimation("idle");

      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20 relative">
      {alert.show && <Alert {...alert} />}

      <div className="max-w-6xl w-full grid lg:grid-cols-5 gap-12 items-center">
        {/* ============================
            LEFT: CONTACT FORM
        ============================ */}
        <div className="col-span-3">
          <div className="mb-10">
            <h2 className="text-5xl font-bold text-white mb-4">
              Let’s Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Drop me a message and let’s create
              something amazing.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-800">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* ============================
            RIGHT: 3D FOX
        ============================ */}
        <div className="col-span-2 w-full h-[450px] lg:h-[550px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
