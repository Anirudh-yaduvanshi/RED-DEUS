import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 md:py-6 bg-red-900 text-center text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Info */}
        <p className="text-sm md:text-md">
          &copy; 2023 - {new Date().getFullYear()} Deus Laboratories Pvt. Ltd. |
          Innovating Medicine with Care
        </p>

        {/* Footer Links */}
        <div className="flex space-x-4 mt-3 md:mt-0 text-sm md:text-md">
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
