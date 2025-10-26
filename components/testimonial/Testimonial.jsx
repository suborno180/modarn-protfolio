"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialTemplate from "./TestimonialTemplate";

const testimonialData = [
  {
    message: "Dinesh transformed our manufacturing operations with his exceptional industrial engineering expertise.",
    quote: `His implementation of lean manufacturing principles and process optimization techniques resulted in a 35% increase in productivity and significant cost savings across our Bangladesh facility. His cross-functional leadership and attention to detail were remarkable.`,
    name: "Operations Director",
    designation: "Apex Holdings, Bangladesh",
    company: "Apparel Manufacturing",
    achievements: ["35% Productivity Increase", "Cost Reduction", "Lean Implementation"]
  },
  {
    message: "Outstanding leadership in driving operational excellence across our Vietnam operations.",
    quote: `Dinesh's expertise in TPM implementation and standardized work processes helped us achieve unprecedented efficiency levels. His ability to mentor local teams and implement global best practices made him an invaluable asset to our organization.`,
    name: "Factory Manager",
    designation: "MAS Linea Aqua, Vietnam",
    company: "Textile Manufacturing",
    achievements: ["TPM Implementation", "Team Mentoring", "Global Standards"]
  },
  {
    message: "Strategic thinker with exceptional project management capabilities.",
    quote: `Under Dinesh's leadership, we successfully implemented Six Sigma methodologies that reduced waste by 45% and improved quality metrics by 60%. His systematic approach to problem-solving and cost reduction initiatives delivered measurable ROI.`,
    name: "Quality Director",
    designation: "MAS Holdings, Sri Lanka",
    company: "Quality Management",
    achievements: ["Six Sigma", "45% Waste Reduction", "60% Quality Improvement"]
  },
  {
    message: "Instrumental in developing our industrial engineering capabilities.",
    quote: `Dinesh's work study expertise and value engineering approaches revolutionized our production planning. He trained our teams in advanced IE techniques that continue to benefit our operations years after his tenure.`,
    name: "Production Head",
    designation: "Omega Line, Sri Lanka",
    company: "Production Management",
    achievements: ["Value Engineering", "Team Training", "Process Innovation"]
  }
];

const Testimonial = () => {
  return (
    <div className="content py-10 md:py-25 bg-base-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across global manufacturing operations. 
            Here&apos;s what professionals say about working with me.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="testimonialSwiper pb-16"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 1.8,
                spaceBetween: 50,
              }
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-auto max-w-2xl">
                <TestimonialTemplate testimonial={testimonial} />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !w-12 !h-12 !bg-primary !rounded-full !text-white after:!text-xl after:!font-bold hover:!bg-primary/90 transition-all duration-300 shadow-lg"></div>
            <div className="swiper-button-next !w-12 !h-12 !bg-primary !rounded-full !text-white after:!text-xl after:!font-bold hover:!bg-primary/90 transition-all duration-300 shadow-lg"></div>
          </Swiper>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-content rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-content rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold mb-2">3</div>
            <div className="text-sm opacity-90">Countries</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent to-accent/80 text-accent-content rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold mb-2">100+</div>
            <div className="text-sm opacity-90">Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-info to-info/80 text-info-content rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold mb-2">$2M+</div>
            <div className="text-sm opacity-90">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .testimonialSwiper {
          padding: 40px 0;
        }
        .testimonialSwiper .swiper-slide {
          opacity: 0.4;
          transition: all 0.4s ease;
          transform: scale(0.9);
        }
        .testimonialSwiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .testimonialSwiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #9929fb;
          opacity: 1;
          transform: scale(1.2);
        }
        .swiper-button-prev, .swiper-button-next {
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-prev {
          left: -20px;
        }
        .swiper-button-next {
          right: -20px;
        }
        @media (max-width: 768px) {
          .swiper-button-prev, .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonial;