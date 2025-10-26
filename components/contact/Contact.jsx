"use client";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaIndustry } from "react-icons/fa";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: FaMapMarkerAlt,
    title: "Business Address",
    description: "Negombo, Sri Lanka",
    href: "https://maps.google.com/?q=Negombo,Sri+Lanka"
  },
  {
    icon: FaEnvelope,
    title: "Professional Email",
    description: "amiliya177@gmail.com",
    href: "mailto:amiliya177@gmail.com"
  },
  {
    icon: FaPhone,
    title: "Business Phone",
    description: "+94 76 315 5822",
    href: "tel:+94763155822"
  },
  {
    icon: FaClock,
    title: "Response Time",
    description: "2-4 hours",
  },
  {
    icon: FaIndustry,
    title: "Industries",
    description: "Apparel & Manufacturing",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 hover:shadow-3xl transition-all duration-500 p-6 sm:p-8 lg:p-12 xl:p-16 border border-gray-100"
        id="contact"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Left Section - Contact Info */}
          <div className="lg:flex-1 flex flex-col justify-between space-y-8 lg:space-y-0">
            <div className="space-y-6">
              {/* Desktop Title */}
              <p className="hidden lg:block text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Let&apos;s Discuss<br />Your <span className="text-primary">Project</span>
              </p>
              
              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-lg:text-center font-medium">
                Ready to optimize your manufacturing operations? With 15+ years in industrial engineering, 
                I can help drive efficiency, reduce costs, and improve productivity in your organization.
              </p>

              {/* Specialization */}
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20">
                <p className="font-semibold text-primary text-sm mb-2">Specialized In:</p>
                <div className="flex flex-wrap gap-2">
                  {["Process Optimization", "Lean Manufacturing", "Cost Reduction", "Global Operations"].map((skill, index) => (
                    <span key={index} className="badge badge-primary badge-outline badge-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                {addressData.map((item, index) => (
                  <Address item={item} key={index} />
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="max-lg:text-center pt-4 lg:pt-8">
              <p className="text-sm text-gray-500 mb-4 font-medium">Professional Profiles</p>
              <div className="flex justify-center lg:justify-start">
                <SocialMedia />
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:flex-1">
            {/* Mobile Title */}
            <div className="lg:hidden text-center mb-8">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Let&apos;s Discuss Your <span className="text-primary">Project</span>
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            {/* Form Container */}
            <div className="bg-base-100 rounded-2xl p-6 sm:p-8 border border-base-300 shadow-sm">
              <Form />
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-gray-500">
                  📞 Typically replies within 2-4 hours during business days
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  🌍 Available for projects in Sri Lanka, Vietnam, Bangladesh & globally
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  ⚙️ Specializing in industrial engineering & lean manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default Contact;