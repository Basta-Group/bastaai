import React from "react";
import certificationImage from "../assets/laptop-working.png";
import certifyImg1 from "../assets/certify-img-1.png";
import certifyImg2 from "../assets/certify-img-2.png";
import certifyImg3 from "../assets/certify-img-3.png";

const AboutUs: React.FC = () => (
  <div className="pt-8 md:pt-16">
    <section className="bg-white py-8 md:py-12 md:min-h-[80vh] ">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 rounded-lg shadow-xl">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-xl md:p-8">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-wide">
              CERTIFICATION <br /> MADE SIMPLE
            </h2>
            <p className="text-black opacity-60 mb-3">
              We're seasoned pros in the gambling industry, crafting bespoke
              certification solutions exclusively for industry insiders.
            </p>
            <p className="text-black opacity-60 mb-3">
              Our expertise uniquely equips us to lighten your load in ways
              other test labs simply can’t.
            </p>
            <p className="text-black opacity-60 mb-3">
              Our committed team simplifies the certification journey, making
              your life easier every step of the way.
            </p>
            <h3 className="font-bold mt-6">Mission</h3>
            <p className="text-black font-bold mb-3">
              Our mission is to allow game suppliers to regain control of their
              development and compliance capacity.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src={certificationImage}
              alt="Certification"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    {/*2nd fold section */}
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

          {/* Right Side -content */}
          <div className="md:w-1/2 text-[#1F1F1F]">
            <h3 className="text-black opacity-60 mb-3 font-medium">
              Want To Work With Us?
            </h3>
            <p className="text-black opacity-60 mb-3">
              At NGL, we value flexibility, critical thinking, excellent
              customer service, creativity, and the ability to execute. We seek
              out individuals who are intelligent, eager to learn, and confident
              in their ability to contribute from the start.
            </p>
            <p className="text-black opacity-60 mb-3">
              In return, we offer ample opportunities for personal and
              professional growth within a supportive culture.
            </p>
            <p className="text-black opacity-60 mb-6">
              If you're interested in joining our team, please check out our
              open roles on LinkedIn or send your resume and a brief
              introduction to{" "}
              <a
                href="mailto:contact@nglcert.com"
                className="text-blue-600 underline"
              >
                contact@nglcert.com
              </a>
              .
            </p>
            <button className="bg-[#3F4FFF] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              JOIN THE WAITLIST
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* cards section */}
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 text-center">
            ACCREDITATIONS AND CERTIFICATES
          </h2>
          <p className="text-center text-black opacity-60 mb-3">
            NGL is a rigorously audited and accredited entity, and we take
            immense pride in our diverse set of certifications and
            accreditations.
          </p>
          <p className="text-center text-black opacity-60 mb-3 mb-10">
            We're always broadening our capabilities and acquiring additional
            recognitions. Stay tuned for updates on our expanding expertise.
          </p>
          <p className="text-center text-black  mb-3 mb-10">Coming Soon...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: "ISO/IEC",
              title: "17020",
              issuedBy: "NAB - MALTA",
              image: certifyImg1,
            },
            {
              label: "ISO/IEC",
              title: "17025",
              issuedBy: "NAB - MALTA",
              image: certifyImg1,
            },
            {
              label: "ISO/IEC",
              title: "27001:2022",
              issuedBy: "SGS",
              image: certifyImg1,
            },
            {
              label: "ISO",
              title: "9001:2015",
              issuedBy: "SGS",
              image: certifyImg1,
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-[#669DF6] blur-[5px] rounded-xl text-white p-6 flex flex-col justify-between items-center text-center h-full"
            >
              <div>
                <span className="text-sm font-semibold bg-[#7FAFF8] px-3 py-1 rounded-md mb-2 inline-block">
                  {cert.label}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4">{cert.title}</h3>
              </div>
              <div className="mt-auto">
                <p className="text-xs mb-2">ISSUED BY</p>
                <img
                  src={cert.image}
                  alt={cert.issuedBy}
                  className="h-10 mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
