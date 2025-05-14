import React from "react";
import certificationImage from "../assets/laptop-working.png";

const Portal: React.FC = () => (
  <div className="pt-8 md:pt-16 md:p-8">
    <section className="bg-white py-8 md:py-12 md:min-h-[80vh]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 rounded-lg shadow-xl">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-xl md:p-8">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-wide">
              CLIENT PORTAL
            </h2>
            <p className="text-black opacity-80 mb-4">
              The NGL Client Portal is your one-stop solution for hassle-free
              game certification.
            </p>
            <p className="text-black opacity-80 mb-4">
              Designed to streamline every step, our portal allows you to
              effortlessly submit orders, track real-time progress across
              various markets, and manage all your certificates and invoices.
              Additionally, we send timely reminders for certificate renewals
              and keep you abreast of relevant regulatory updates. Stay focused
              on what you do best; let us handle the certification details.
            </p>
            <p className="text-black opacity-80 mb-4">
              Want access?{" "}
              <a href="#" className="underline text-blue-600 font-medium">
                Message our Team
              </a>{" "}
              today to arrange a demo!
            </p>
            <p className="text-black opacity-80 mb-2">Already a Client?</p>
            <button className="bg-blue-700 text-white font-bold text-sm px-4 py-2 rounded-full">
              NGL PORTAL
            </button>
            <p className="text-sm text-gray-600 mt-2">
              (your IP needs to be whitelisted to access the Client Portal)
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src={certificationImage}
              alt="Client Portal"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Portal;
