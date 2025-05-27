import React, { useState } from "react";
import bgBanner from "../../assets/basta-ai-bg.png";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Thank you! We'll be in touch soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-2 md:px-4 flex flex-col md:flex-row items-center justify-between md:gap-12 py-24">
        {/* Left: Hero Text */}
        <div className="flex-1 text-center md:text-left pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 mx-auto md:mx-0 md:max-w-[700px]">
            The Future Of
            <br />
            Open-Source{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1da1f2] to-[#1877f2]">
              AI Starts
            </span>{" "}
            Here
          </h1>
          <div className="text-xl md:text-2xl text-white mb-6 font-medium">
            Launching September 2025
          </div>
          <button
            className="mt-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#009FFF] to-[#00BFFF] text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            type="button"
            title="Sign up for updates"
          >
            SIGN-UP
          </button>
        </div>
        {/* Right: Consultation Form */}
        <div className="flex-1 max-w-md w-full">
          <div className="bg-[#121317] bg-opacity-95 rounded-2xl shadow-xl p-4 md:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full p-3 border border-2 border-[#2E2D33] rounded bg-[#151518] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-3 border border-2 border-[#2E2D33] rounded bg-[#151518] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                className="w-full p-3 border border-2 border-[#2E2D33] rounded bg-[#151518] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
              {formStatus.message && (
                <div
                  className={`p-3 rounded text-center ${
                    formStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-gradient-to-r from-[#006EFF] to-[#00BFFF] text-white rounded-lg py-3 font-semibold shadow hover:opacity-90 transition disabled:opacity-60"
                title="Book a free 30 minute consultation"
              >
                {formStatus.submitting
                  ? "Submitting..."
                  : "Free 30 Minute Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
