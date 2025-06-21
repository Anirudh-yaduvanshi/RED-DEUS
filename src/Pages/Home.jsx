import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/Assets/crousal/img1.jpg";
import img2 from "/Assets/crousal/img2.jpeg";
import img3 from "/Assets/crousal/img3.jpg";
import abbott from "/Assets/parties/abbott.png";
import gsk from "/Assets/parties/gsk.png";
import mankind from "/Assets/parties/mankind.png";
import cadila from "/Assets/parties/cadila.png";
import omega from "/Assets/parties/omega.png";
import vincerx from "/Assets/parties/vincerx.png";
import sunpharma from "/Assets/parties/sunpharma.png";
import torrent from "/Assets/parties/torrent.png";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: img1,
      title: "Precision Formulation",
      text: "Innovative medicine crafted with precision.",
    },
    {
      image: img2,
      title: "Safety & Quality",
      text: "Meeting global pharmaceutical standards.",
    },
    {
      image: img3,
      title: "Advanced Research",
      text: "Developing solutions for a healthier future.",
    },
  ];
  const faqs = [
    {
      question: "How does Deus ensure quality?",
      answer: "We follow strict GMP standards for formulation and production.",
    },
    {
      question: "Are your medicines approved?",
      answer: "Yes, all our products are certified for medical use.",
    },
    {
      question: "Can I collaborate with Deus?",
      answer:
        "We work with global healthcare partners—contact us for more info.",
    },
  ];
  const partner = [
    abbott,
    gsk,
    sunpharma,
    cadila,
    mankind,
    omega,
    vincerx,
    torrent,
  ];
  const FILTERS = [
    "Tablet",
    "Capsule",
    "Syrup",
    "Suspension",
    "Solution",
    "Drops",
  ];
  const QA = [
    {
      title: "State-of-the-Art Facility",
      desc: "Equipped with GMP-compliant infrastructure and automated production lines.",
    },
    {
      title: "Dedicated R&D",
      desc: "Formulation innovation backed by experienced pharmaceutical scientists.",
    },
    {
      title: "Global Compliance",
      desc: "Adhering to WHO, USFDA, and EUGMP standards across products.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 md:py-20 bg-red-800/70 backdrop-blur-lg text-white z-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Innovating Healthcare for a Better Tomorrow
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Providing safe, effective medicines for a healthier world.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/products");
          }}
          className="mt-6 px-5 md:px-6 py-2 md:py-3 bg-red-500 rounded-lg text-white font-semibold hover:bg-red-600 transition"
        >
          Discover Our Solutions
        </button>
      </section>

      {/* Carousel Section */}
      <section className="py-10 bg-red-900/20 md:py-12">
        <Slider
          dots={true}
          infinite
          autoplay
          speed={2000}
          slidesToShow={1}
          slidesToScroll={1}
          className="w-full md:w-3/4 mx-auto"
        >
          {slides.map((slide, index) => (
            <div key={index} className="text-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-56 md:h-64 object-cover rounded-lg shadow-md"
              />
              <h2 className="text-2xl md:text-3xl font-bold mt-3 md:mt-4">
                {slide.title}
              </h2>
              <p className="text-md md:text-lg mt-1 md:mt-2">{slide.text}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* About Deus Laboratories Pvt. Ltd. */}
      <section className="py-10 md:py-12 bg-red-800/70 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Deus?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-3/4 mx-auto">
          {[
            {
              name: "Global Standards",
              text: "Our medicines comply with international healthcare guidelines.",
            },
            {
              name: "Innovative Research",
              text: "Pioneering advancements in pharmaceuticals.",
            },
            {
              name: "Ethical Production",
              text: "We focus on sustainable and responsible manufacturing.",
            },
          ].map(({ name, text }, index) => (
            <div
              key={index}
              className="p-5 md:p-6 bg-red-700/20 rounded-lg shadow-md"
            >
              <p className="text-md md:text-lg">{text}</p>
              <p className="font-bold mt-2">- {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-12 bg-red-800/30 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Your Questions, Answered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 md:w-3/4 mx-auto mt-8">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-red-700/50 p-5 md:p-6 rounded-lg shadow-md mb-4"
            >
              <h3 className="text-lg md:text-xl font-semibold">{question}</h3>
              <p className="text-md md:text-lg mt-1 md:mt-2">{answer}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-12 bg-red-900/20 text-center">
        <h2 className="text-4xl font-bold">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 md:w-3/4 mx-auto mt-8">
          {QA.map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="bg-red-700/20 p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-md">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-red-800/70 backdrop-blur-lg text-center text-white">
        <h2 className="text-4xl font-bold">Our Product Categories</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-3/4 mx-auto">
          {FILTERS.map((category, i) => (
            <div
              key={i}
              className="bg-red-700/50 p-5 rounded-lg shadow-md hover:scale-105 hover:bg-red-700/70 transition transform duration-200 cursor-pointer"
              onClick={() => {
                navigate(`/products`);
                window.scrollTo(0, 0);
              }}
            >
              <h4 className="text-xl font-semibold text-white text-center">
                {category}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-12 bg-red-900/20 text-center">
        <h2 className="text-4xl font-bold">
          Trusted by Professionals Worldwide
        </h2>
        <p className="mt-4 text-lg">
          Deus partners with clinics, hospitals, and distributors globally to
          deliver excellence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 px-4">
          {/* Replace with actual logos if available */}
          {partner.map((logo, idx) => (
            <div
              key={idx}
              className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded shadow"
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-red-800/70 text-center  text-white">
        <h2 className="text-4xl w-11/12 md:w-3/4 mx-auto font-bold">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg w-11/12 md:w-3/4 mx-auto">
          Have questions or need more information? Contact us today!
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/contact");
          }}
          className="mt-6 px-5 md:px-6 py-2 md:py-3 bg-red-500 rounded-lg text-white font-semibold hover:bg-red-600 transition"
        >
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Home;
