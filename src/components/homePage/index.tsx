import React, { useState } from "react";
import TestimonialsSlider from "../reusableComponents/TestimonialsSlider/TestimonialsSlider";
import TrustCards from "../reusableComponents/TrustCards/TrustCards";
import manWorkingLaptop from "../../assets/man-working-laptop.png";
import certifyImg1 from "../../assets/certify-img-1.png";
import certifyImg2 from "../../assets/certify-img-2.png";
import certifyImg3 from "../../assets/certify-img-3.png";
import worldMapDotted from "../../assets/world-map-dotted.png";
// import gridIcon1 from "../../assets/grid-icon-1.png";
// import gridIcon2 from "../../assets/grid-icon-2.png";
import gridIcon3 from "../../assets/grid-icon-3.png";
import gridIcon4 from "../../assets/grid-icon-4.png";
import gridIcon5 from "../../assets/grid-icon-5.png";
import gridIcon6 from "../../assets/grid-icon-6.png";
import registerIcon from "../../assets/register.png";
import uploadIcon from "../../assets/upload.png";
import testIcon from "../../assets/test.png";
import verifiedIcon from "../../assets/verified.png";
import { useScrollToTop } from "../../utils/useScrollToTop";

const Home: React.FC = () => {
  useScrollToTop();

  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    gameType: "",
    numberOfGames: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      await response.json();

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message:
          "Thank you for joining the waitlist! We will contact you soon.",
      });

      // Reset form
      setFormData({
        companyName: "",
        fullName: "",
        email: "",
        gameType: "",
        numberOfGames: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "There was an error submitting your form. Please try again.",
      });
    }
  };

  const trustCardsData = [
    // {
    //   icon: (
    //     <img src={gridIcon1} alt="ISO Certification" className="w-12 h-16 " />
    //   ),
    //   title: "ISO/IEC 17025 & 27001 Certified",
    //   bgColor: "bg-[#6b9ef4]",
    // },
    // {
    //   icon: (
    //     <img
    //       src={gridIcon2}
    //       alt="Regulator Recognition"
    //       className="w-12 h-12"
    //     />
    //   ),
    //   title: "Recognized by NGA, UKGC, Ontario, and more",
    // },
    {
      icon: <img src={gridIcon3} alt="Remote Testing" className="w-12 h-12" />,
      title: "All testing is fully remote and digital",
    },
    {
      icon: (
        <img src={gridIcon4} alt="Transparent Pricing" className="w-12 h-12" />
      ),
      title: "Transparent pricing with fast-track options",
    },
    {
      icon: (
        <img
          src={gridIcon5}
          alt="Express Certification"
          className="w-12 h-12"
        />
      ),
      title: "72-hour express certification available",
    },
    {
      icon: <img src={gridIcon6} alt="QR Verification" className="w-12 h-12" />,
      title: "Certificates include QR verification & regulator-ready format",
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-white py-8 md:py-12 md:min-h-[80vh] ">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 rounded-lg   shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/5">
              <h1 className="text-2xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-wide">
                GLOBAL GAME CERTIFICATION. ISO ACCREDITED. 100% ONLINE
              </h1>
              <p className="text-lg text-black opacity-60 mb-4">
                Slot Games, iOS Platforms, MGA Ready, UKGC Compliant, Proven RTF
              </p>
              <p className="text-lg font-bold mb-8">
                Be the first to certify your games.
              </p>
              <button
                className="bg-[#3147C3] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                title="Join the waitlist for game certification"
              >
                JOIN THE WAITLIST
              </button>
            </div>
            <div className="md:w-2/5 relative flex flex-col justify-end  min-h-[100px] md:min-h-[400px] ">
              {/* Floating Cards */}
              <div className="absolute -top-4 right-0 z-10 flex gap-2 w-full min-h-32">
                <div className="bg-[#1162ED9E] text-white rounded-xl p-4 flex-1 min-h-32">
                  <div className="text-xl font-bold">Reviews</div>
                  <div className="text-xl font-bold">4.9 Points</div>
                </div>
                <div className="bg-[#3147C3] text-white rounded-xl p-4 flex-1 min-h-32">
                  <div className="text-xl font-bold">Launching</div>
                  <div className="text-xl font-bold">September 1st, 2025</div>
                  <div className="hidden md:block text-xl mt-1 font-medium">
                    - Join the Waitlist
                  </div>
                </div>
              </div>

              {/* Image Box at Bottom */}
              <div className="hidden md:block relative rounded-2xl bg-[#a5d9fe] h-64 mt-auto overflow-visible">
                <img
                  src={manWorkingLaptop}
                  alt="Professional using laptop"
                  className="hidden md:block overflow-visible absolute top-[40%]  left-2/7 w-100 h-100 z-10 transform -translate-x-1/2 -translate-y-1/2 scale-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Simple Steps Section */}
      <section id="about-us" className="py-12 md:py-16 bg-[#F4F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Side - Images */}
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img
                  src={certifyImg1}
                  alt="People discussion"
                  title="Team discussing game certification"
                  className="rounded-lg w-full h-[200px] sm:h-[300px] md:h-[395px] object-cover"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <img
                  src={certifyImg2}
                  alt="Laptop graph"
                  title="Analytics and testing dashboard"
                  className="rounded-lg w-full h-[95px] sm:h-[145px] md:h-[190px] object-cover"
                />
                <img
                  src={certifyImg3}
                  alt="Building view"
                  title="NGL certification headquarters"
                  className="rounded-lg w-full h-[95px] sm:h-[145px] md:h-[190px] object-cover"
                />
              </div>
            </div>

            {/* Right Side - Text Steps */}
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-5xl md:text-2xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-wide">
                CERTIFY YOUR GAMES
                <br />
                IN 4 SIMPLE STEPS
              </h2>

              <div className="space-y-2">
                {[
                  {
                    step: "1",
                    title: "1. Register",
                    desc: "Create your account on nglcert.com and access your dashboard.",
                  },
                  {
                    step: "2",
                    title: "2. Upload",
                    desc: "Securely upload your game files or RGS platform for testing.",
                  },
                  {
                    step: "3",
                    title: "3. We Test",
                    desc: "Our ISO/IEC 17025-accredited lab performs in-depth RTP, RNG, and compliance testing.",
                  },
                  {
                    step: "4",
                    title: "4. Get Certified",
                    desc: "Receive a digitally signed certificate and a detailed compliance report.",
                  },
                ].map(({ step, title, desc }) => (
                  <div className="flex items-start" key={step}>
                    <div className="text-white w-16 h-16 flex items-center justify-center text-sm font-semibold mr-4 min-w-[38px]">
                      {step === "1" && (
                        <img
                          src={registerIcon}
                          alt="Register"
                          title="Register for game certification"
                          className="w-10 h-10"
                        />
                      )}
                      {step === "2" && (
                        <img
                          src={uploadIcon}
                          alt="Upload"
                          title="Upload your game files"
                          className="w-10 h-10"
                        />
                      )}
                      {step === "3" && (
                        <img
                          src={testIcon}
                          alt="Test"
                          title="Game testing process"
                          className="w-10 h-10"
                        />
                      )}
                      {step === "4" && (
                        <img
                          src={verifiedIcon}
                          alt="Verified"
                          title="Get your game certified"
                          className="w-10 h-10"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{title}</h3>
                      <p className="text-[#00000099] font-semibold text-sm">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Studios Trust NGL Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-5xl md:text-2xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-wide text-center">
            WHY STUDIOS & PLATFORMS <br /> TRUST NGL
          </h2>

          <TrustCards cards={trustCardsData} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-[#F4F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center ">
            {/* Left Side - 30% */}
            <div className="w-full lg:w-[30%]">
              <h2 className="text-2xl md:text-5xl md:text-2xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-wide">
                SIMPLE <br className="sm:hidden" />
                PRICING. NO <br className="sm:hidden" />
                HIDDEN FEES.
              </h2>
              <p className="text-gray-600 max-w-md">
                Custom packages available for game studios and aggregators.
              </p>
            </div>

            {/* Right Side - 70% with 3 boxes in one row */}
            <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "RGS Certification (Full RNG Evaluation)",
                  price: "$4,544",
                },
                {
                  title: "Slot Game Testing (1–10 games)",
                  price: "$3,976 per game",
                },
                {
                  title: "Bulk Testing (11–50 games)",
                  price: "$3,976 per game",
                },
                { title: "Card Game Testing", price: "$3,408 per game" },
                {
                  title: "Technical Report + QA Review",
                  price: "$2,130 per unit",
                },
                {
                  title: "Project Management & Administration",
                  price: "$12,126.80 per project",
                },
                { title: "Re-Certification", price: "$1,600" },
                { title: "Additional Jurisdiction", price: "$2,000" },
                {
                  title: "Fast-Track (5 business days)",
                  price: "$2,000 per game",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-8 text-center bg-white"
                  style={{ borderColor: "#3147C3", borderWidth: "1px" }}
                >
                  <h3 className="text-md font-bold mb-2">{item.title}</h3>
                  <p className="text-xl font-bold text-blue-600">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left - Contact Form */}
            <div className="md:w-1/3 w-full">
              <div className="bg-[#a3c2f8] p-6 md:p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6 text-black">
                  Contact NGL
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
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
                    name="gameType"
                    value={formData.gameType}
                    onChange={handleInputChange}
                    placeholder="Game Type (Slot / RGS / Other)"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="number"
                    name="numberOfGames"
                    value={formData.numberOfGames}
                    onChange={handleInputChange}
                    placeholder="Estimated Number Of Games"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
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
                        : "Submit your waitlist application"
                    }
                    className={`w-full bg-[#3147C3] text-white rounded-full py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ${
                      formStatus.submitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.submitting
                      ? "SUBMITTING..."
                      : "JOIN THE WAITLIST"}
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Text + Image */}
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-5xl md:text-2xl md:text-5xl text-center font-bold text-black mb-8 leading-tight tracking-wide">
                GET EARLY ACCESS – JOIN <br />
                THE WAITLIST
              </h2>
              <p className="text-black opacity-60 mb-3">
                We're launching on September 1st, 2025.
              </p>
              <p className="text-black opacity-60 mb-3">
                Be among the first to certify your games with our accredited
                lab.
              </p>
              <p className="text-black opacity-60 mb-3">
                All early registrations receive a 10% discount on first
                certification.
              </p>
              <img src={worldMapDotted} alt="World map" className="w-full " />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-0">
          <h2 className="text-2xl md:text-5xl md:text-2xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-wide text-center">
            WHAT OUR CUSTOMER SAID ABOUT US
          </h2>
          <TestimonialsSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
