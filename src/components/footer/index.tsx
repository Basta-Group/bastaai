import { Link } from "react-router-dom";
import aiLogo from "../../assets/basta-ai-logo.png";
import telegram from "../../assets/tele-logo.png";
export default function Footer() {
  return (
    <footer className="bg-[#121317] py-6  py-10" role="contentinfo">
      <div id="contact-us" className="max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-start md:items-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src={aiLogo}
              alt="BastaAI Logo"
              title="BastaAI Logo"
              className="h-8 w-auto object-contain"
              role="img"
              aria-label="BastaAI Logo"
            />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:flex-1  md:justify-between items-baseline text-white text-sm w-full ">
            <div className="flex flex-col space-x-2 mb-2 md:mb-0">
              <span className="font-bold text-lg">Social Media Link</span>
              <a href="" className="py-4 " aria-label="Visit our Telegram page">
                <img
                  src={telegram}
                  className="h-10 w-10"
                  alt="Telegram"
                  title="Telegram"
                />
              </a>
            </div>
            <div className="mb-2 md:mb-0">
              <Link to="/" className="hover:underline font-bold text-lg">
                Privacy Policy
              </Link>
            </div>
            <div className="mb-2 md:mb-0">
              <strong className="inline md:block font-bold text-lg">
                Email:{" "}
              </strong>
              <a
                href="mailto:contact@bastaai.com"
                className="opacity-60 hover:opacity-100"
                aria-label="Send email to contact@bastaai.com"
              >
                contact@bastaai.com
              </a>
            </div>
            {/* <div>
              <strong className="inline md:block font-bold text-lg">
                Phone:{" "}
              </strong>
              <span>0405 XXXX XXX</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
