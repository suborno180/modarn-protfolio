import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

/* Footer navLinks - Updated for Industrial Engineering */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Experience", url: "experience" },
  { id: 4, name: "Education", url: "education" },
  { id: 5, name: "Skills", url: "skills" },
  { id: 6, name: "Certifications", url: "certifications" },
  { id: 7, name: "Contact", url: "contact" },
];

const quickContact = [
  {
    icon: FaEnvelope,
    text: "amiliya177@gmail.com",
    href: "mailto:amiliya177@gmail.com"
  },
  {
    icon: FaPhone,
    text: "+94 76 315 5822",
    href: "tel:+94763155822"
  },
  {
    icon: FaMapMarkerAlt,
    text: "Negombo, Sri Lanka",
    href: "https://maps.google.com/?q=Negombo,Sri+Lanka"
  }
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-8">
      <div className="content max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">DF</span>
              </div>
              <div>
                <p className="text-2xl font-bold">Dinesh Fernando</p>
                <p className="text-gray-400 text-sm">Industrial Engineering Specialist</p>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              15+ years of expertise in industrial engineering, lean manufacturing, 
              and operational excellence across global apparel industries.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:amiliya177@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.url}`}
                  scroll={false}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Expertise</h3>
            <div className="space-y-2">
              {[
                "Process Optimization",
                "Lean Manufacturing",
                "Cost Reduction",
                "TPM Implementation",
                "Six Sigma",
                "Global Operations"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="block text-gray-300 text-sm hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              {quickContact.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <contact.icon className="text-sm" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {copyrightYear} Dinesh S. Fernando. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Industrial Engineering & Project Management Specialist
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Designed and developed by{" "}
              <a 
                href="https://suborno.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 font-medium"
              >
                Maruf Suborno
              </a>
              {" "}• Crafted with precision and expertise • Specializing in operational excellence since 2009
            </p>
            <p className="text-gray-600 text-xs mt-1">
              &copy; {copyrightYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;