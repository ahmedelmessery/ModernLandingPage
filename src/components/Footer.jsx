import React from "react";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {motion} from "motion/react";
import {fadeIn, scale, slideIn, textVariant} from "../utils/motion";
const Footer = () => {
  const footerLinks = {
    company: [
      {name: "About", href: "#"},
      {name: "Terms of Use", href: "#"},
      {name: "Privacy Policy", href: "#"},
      {name: "How it Works", href: "#"},
      {name: "Contact Us", href: "#"},
    ],
    getHelp: [
      {name: "Support Carrer", href: "#"},
      {name: "24h Service", href: "#"},
      {name: "Quick Chat", href: "#"},
    ],
    support: [
      {name: "FAQ", href: "#"},
      {name: "Policy", href: "#"},
      {name: "Business", href: "#"},
    ],
    contact: [
      {name: "WhatsApp", href: "#"},
      {name: "Support 24", href: "#"},
    ],
  };

  return (
    <footer  className="bg-gray-50 mx-auto">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
      className="section-container p-10">
        <div className="flex justify-between items-center mb-12 max-lg:flex-col ">
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:w-2/4">
            <div className="flex items-center gap-1 mb-6">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <span className="text-xl font-medium ml-1">The Next Design</span>
            </div>
            <p className="text-gray-600 mb-6">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium mb-4">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Copyright © {new Date().getFullYear()}
            </p>
            <p className="text-gray-600 text-sm">Created by Ahmed Elmessery</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
