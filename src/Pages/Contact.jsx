import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-red-900 via-red-800/50 to-red-700 text-white backdrop-blur-2xl">
      {/* Page Heading */}
      <div className="max-w-4xl mx-auto text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-xl">
          Get in Touch with Deus Laboratories Pvt. Ltd.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Whether you're a potential partner, researcher, or customer, we’re
          here to connect and collaborate. Feel free to reach out with any
          inquiries, feedback, or partnership opportunities. Our team is ready
          to assist you with all your pharmaceutical needs.
        </p>
      </div>

      {/* Office Details */}
      <div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-gradient-to-br from-white/5 via-white/10 to-white/5
        backdrop-blur-lg p-8 rounded-lg shadow-2xl mb-12"
      >
        <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-xl text-white/90">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Corporate Office
          </h2>
          <p>Deus Laboratories Pvt. Ltd.</p>
          <p>4th Floor, Elixir Tower, Sector 62</p>
          <p>Noida, Uttar Pradesh, India</p>
          <p className="mt-2">📞 +91-98765-43210</p>
          <p>✉️ corporate@deuspharma.com</p>

          <div className="rounded-xl my-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.2987790355899!2d77.77511816721244!3d29.974810304045306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec8393cf7bbad%3A0xa589497c3215acd9!2s113-A%2C%20Chappersher%20Afganpur%2C%20Uttarakhand%20247661!5e0!3m2!1sen!2sin!4v1750355266539!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="transition-transform duration-300 hover:scale-[1.02] mt-4 text-sm text-white/60">
            Hours: Mon – Sat, 9:00 AM – 6:00 PM
          </p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-xl text-white/90 ">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Production Unit
          </h2>
          <p>Deus Manufacturing Facility</p>
          <p>Plot 58, Industrial Estate</p>
          <p>Haridwar, Uttarakhand, India</p>
          <p className="mt-2">📞 +91-90123-45678</p>
          <p>✉️ plant@deuspharma.com</p>

          <div className="rounded-xl my-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.2987790355899!2d77.77511816721244!3d29.974810304045306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec8393cf7bbad%3A0xa589497c3215acd9!2s113-A%2C%20Chappersher%20Afganpur%2C%20Uttarakhand%20247661!5e0!3m2!1sen!2sin!4v1750355266539!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="transition-transform duration-300 hover:scale-[1.02] mt-4 text-sm text-white/60">
            Visits by appointment only
          </p>
        </div>
      </div>

      {/* Floating Contact Button (Mobile Only) */}
      <a
        href="tel:+919876543210"
        className=" focus:ring-2 focus:ring-white fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-xl transition duration-300 md:hidden"
        aria-label="Call Deus Laboratories Pvt. Ltd."
      >
        📞
      </a>
    </section>
  );
};

export default Contact;
