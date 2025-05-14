import React, { useState } from "react";
import worldMapDotted from "../assets/world-map-dotted.png";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    firstName: "",
    location: "",
    lastName: "",
    enquiry: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, message: "" });
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        message: "Message sent successfully!",
      });
      setFormData({
        email: "",
        company: "",
        firstName: "",
        location: "",
        lastName: "",
        enquiry: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="pt-8 md:pt-16 md:p-8">
      <section className="py-12 md:py-16 bg-white shadow-xl  rounded-lg ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left - Contact Form */}
            <div className="md:w-1/3 w-full">
              <div className="bg-[#a3c2f8] p-6 md:p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6 text-black">
                  Contact NGL
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Where Are You Located?"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleInputChange}
                    placeholder="General Enquiry"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message Here!"
                    className="w-full p-3 border border-gray-300 rounded bg-white min-h-[80px]"
                    required
                  />
                  {formStatus.message && (
                    <div
                      className={`p-3 rounded ${
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
                    title={
                      formStatus.submitting
                        ? "Submitting form..."
                        : "Send your message"
                    }
                    className={`w-full bg-[#3147C3] text-white rounded-full py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ${
                      formStatus.submitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.submitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Text + Image */}
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-5xl  font-bold text-black mb-8 leading-tight tracking-wide">
                CONTACT NGL
              </h2>
              <div className="mb-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="bg-[#a3c2f8] p-3 rounded-full">
                    <svg
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold">Email:</span>
                    <br />
                    <span>info@nglcert.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#a3c2f8] p-3 rounded-full">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10.5a8.38 8.38 0 0 1-1.9 5.4c-1.5 2-4.1 4.6-7.1 7.1-3-2.5-5.6-5.1-7.1-7.1A8.38 8.38 0 0 1 3 10.5a8.5 8.5 0 0 1 17 0z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold">Offices:</span>
                    <br />
                    <span>Malta (HQ) | Serbia (Lab) | India (Tech)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#a3c2f8] p-3 rounded-full">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12zm7-2v4l3 2" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold">Social Media</span>
                    <br />
                    <div className="flex space-x-3">
                      {/* Facebook */}
                      <a
                        href="#"
                        className="bg-[#a3c2f8] text-white p-2 rounded hover:bg-blue-700"
                        title="Visit our Facebook page"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>

                      {/* Twitter */}
                      <a
                        href="#"
                        className="bg-[#a3c2f8] text-white p-2 rounded hover:bg-blue-700"
                        title="Visit our Twitter page"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="#"
                        className="bg-[#a3c2f8] text-white p-2 rounded hover:bg-blue-700"
                        title="Visit our Instagram page"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>

                      {/* YouTube */}
                      <a
                        href="#"
                        className="bg-[#a3c2f8] text-white p-2 rounded hover:bg-blue-700"
                        title="Visit our YouTube channel"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>

                      {/* Telegram */}
                      <a
                        href="#"
                        className="bg-[#a3c2f8] text-white p-2 rounded hover:bg-blue-700"
                        title="Visit our Telegram channel"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.6l5.57-5.16z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img src={worldMapDotted} alt="World map" className="w-full " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
