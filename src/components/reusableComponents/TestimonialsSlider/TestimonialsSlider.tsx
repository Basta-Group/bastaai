import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fastspinCooImage from "../../../assets/testimonials/testimonial-image-2.jpeg";
import titanSlotsCtoImage from "../../../assets/testimonials/titan-slots-cto.jpg";
import fastspinCoo2Image from "../../../assets/testimonials/fastspin-coo-2.jpg";

// Import arrow images
import leftArrow from "../../../assets/testimonials/left-arrow.png";
import rightArrow from "../../../assets/testimonials/right-arrow.png";

let sliderRef: Slider | null = null;

const TestimonialsSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "CFO, OneThing Design Studios",
      rating: 5,
      image: fastspinCooImage,
      text: "NGLCert's platform has revolutionized our certification process, making it faster and more efficient than ever before.",
    },
    {
      name: "CTO, Titan Slots",
      rating: 4,
      image: titanSlotsCtoImage,
      text: "NGLCert gave us everything we needed to enter the market quickly. Their reports were accepted by our regulator instantly.",
    },
    {
      name: "COO, FastSpin Studios",
      rating: 4,
      image: fastspinCoo2Image,
      text: "Finally, a cert platform that understands how fast game studios move.",
    },
  ];

  return (
    <div
      className="pb-2 px-0 relative max-w-[100vw]"
      role="region"
      aria-label="Customer testimonials"
    >
      <div role="list">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
          className="[&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-slide>div]:w-full"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4" role="listitem">
              <div className="bg-[#A3C2F8] p-6 rounded-xl flex flex-col h-full min-h-[240px]">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    aria-hidden="true"
                  />
                  <div>
                    <h4
                      className="font-bold text-gray-900"
                      aria-label={`Testimonial by ${testimonial.name}`}
                    >
                      {testimonial.name}
                    </h4>
                    <div
                      className="flex"
                      role="img"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < testimonial.rating
                              ? "text-black"
                              : "text-gray-300"
                          }`}
                          aria-hidden="true"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  {testimonial.text}
                </p>
                <button
                  className="text-gray-600 text-sm font-medium hover:text-gray-800 text-left cursor-pointer"
                  title="Read more about this testimonial"
                  aria-label={`Read more about ${testimonial.name}'s testimonial`}
                  onClick={() => {
                    // Add your read more functionality here
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 🖼️ Image Arrows */}
      <div
        className="hidden sm:flex justify-center mt-2 gap-4"
        role="navigation"
        aria-label="Testimonial navigation"
      >
        <button
          onClick={() => sliderRef?.slickPrev()}
          className="w-10 h-20 rounded-full flex items-center justify-center transition cursor-pointer"
          title="View previous testimonial"
          aria-label="Previous testimonial"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              sliderRef?.slickPrev();
            }
          }}
        >
          <img
            src={leftArrow}
            alt="Previous"
            className="w-10 h-10"
            aria-hidden="true"
          />
        </button>

        <button
          onClick={() => sliderRef?.slickNext()}
          className="w-10 h-20 rounded-full flex items-center justify-center transition cursor-pointer"
          title="View next testimonial"
          aria-label="Next testimonial"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              sliderRef?.slickNext();
            }
          }}
        >
          <img
            src={rightArrow}
            alt="Next"
            className="w-10 h-10"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
