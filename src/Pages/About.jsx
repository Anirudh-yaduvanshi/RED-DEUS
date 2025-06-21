import React from "react";

const About = () => {
  const CERTIFICATE = [
    {
      title: "WHO-GMP Certified",
      desc: "Meets WHO's manufacturing and quality standards.",
    },
    {
      title: "ISO 9001:2015",
      desc: "Certified quality systems for consistent operational excellence.",
    },
    {
      title: "USFDA Compliant",
      desc: "Aligned with U.S. FDA’s pharmaceutical protocols.",
    },
    {
      title: "EUGMP Approval",
      desc: "Certified for export to European markets.",
    },
  ];

  const VALUE = [
    {
      title: "Integrity",
      desc: "We uphold ethics and transparency in everything we do.",
    },
    {
      title: "Innovation",
      desc: "We explore new frontiers in formulation science.",
    },
    {
      title: "Quality",
      desc: "We deliver excellence through strict compliance.",
    },
    { title: "Compassion", desc: "Patients first—always." },
  ];

  const MILESTONES = [
    { year: "2017", event: "Founded with a focus on ethical formulation" },
    { year: "2019", event: "Achieved WHO-GMP certification" },
    { year: "2021", event: "Expanded into nutraceuticals" },
    { year: "2023", event: "Global partnerships across 12+ countries" },
  ];

  const LEADERS = [
    {
      name: "Dr. A. Sharma",
      role: "Chief Scientific Officer",
      bio: "Pioneering formulation science for over 15 years.",
      photo: "/Assets/owner.jpg", // Local path or hosted URL
    },
    {
      name: "Ms. R. Mehta",
      role: "Director of Global Affairs",
      bio: "Building bridges across continents with purpose and vision.",
      photo: "/Assets/owner.jpg",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-16 px-4 text-center text-white bg-red-800/70 backdrop-blur-md border-b border-white/20 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Deus Laboratories Pvt. Ltd.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Deus Laboratories Pvt. Ltd. is an innovation-driven pharmaceutical
          manufacturer committed to quality, accessibility, and global impact.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-red-900/20 text-center text-black backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg">
            To improve global health by crafting safe and effective medicines
            using cutting-edge technology and a compassionate vision. We believe
            in making healthcare accessible to all, ensuring that our products
            meet the highest standards of quality and efficacy.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-10">Our Vision</h2>
          <p className="mt-4 text-lg">
            To be recognized as a leading pharmaceutical brand driven by ethics,
            innovation, and patient-centered care. We envision a world where
            healthcare is a universal right, and our products contribute to the
            well-being of communities globally.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="py-12 bg-red-800/70 text-center text-white backdrop-blur-lg border-t border-white/10 shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          From our foundation as a research-first startup, Deus has evolved into
          a name trusted across borders. Innovation, compliance, and care power
          everything we do. We are proud to have reached over 1 million patients
          worldwide, with a commitment to quality and accessibility at the heart
          of our operations. Our journey is marked by milestones that reflect
          our dedication to excellence and our unwavering focus on improving
          lives through pharmaceutical innovation.
        </p>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-red-900/20 text-center text-black backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold">Core Values</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-3/4 mx-auto">
          {VALUE.map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-md">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-red-800/70 text-center text-white backdrop-blur-lg border-y border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Certifications & Accreditations
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We comply with rigorous international standards to ensure our products
          are safe, effective, and trusted across markets.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-3/4 mx-auto">
          {CERTIFICATE.map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/30 text-left rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-md text-slate-200">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 bg-red-900/20 text-center backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold">Our Milestones</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-11/12 md:w-4/5 mx-auto">
          {MILESTONES.map(({ year, event }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-md text-left"
            >
              <h3 className="text-xl font-bold text-black">{year}</h3>
              <p className="mt-2 text-md text-slate-800">{event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-12 bg-red-800/70 text-white text-center backdrop-blur-md border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold">Global Impact</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 md:w-4/5 mx-auto">
          <div className="p-6 bg-white/10 rounded-lg border border-white/30 shadow-md">
            <p className="text-3xl font-bold">1M+</p>
            <p className="mt-2">Patients Reached</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg border border-white/30 shadow-md">
            <p className="text-3xl font-bold">12+</p>
            <p className="mt-2">Countries Served</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg border border-white/30 shadow-md">
            <p className="text-3xl font-bold">50+</p>
            <p className="mt-2">Research Collaborations</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 bg-red-900/20 text-center text-black backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold">Our Leadership</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-3/4 mx-auto">
          {LEADERS.map(({ name, role, bio, photo }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-lg text-center"
            >
              <img
                src={photo}
                alt={name}
                className="w-44 h-44 object-cover rounded-full border-2 border-white mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-md text-red-800">{role}</p>
              <p className="mt-2 text-md">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CSR Highlights */}
      <section className="py-16 bg-red-800/70 text-white text-center backdrop-blur-lg border-t border-white/10">
        <div className="w-11/12 md:w-4/5 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Social Responsibility
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            At Deus Laboratories Pvt. Ltd., we believe access to healthcare is a
            universal right. Our commitment to social good is reflected in every
            decision we make—from sustainable practices to life-changing
            outreach. We strive to make a difference in the communities we
            serve.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/30 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Access to Medicine</h3>
              <p>
                We’ve distributed essential medications to underserved regions
                across India, impacting over 250,000 lives through health camps
                and charitable partnerships. We believe in healthcare for all.
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/30 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Eco-Conscious Production
              </h3>
              <p>
                Our plants are powered by clean energy initiatives and utilize
                recyclable packaging—reducing our annual carbon footprint by 20%
                since the day we started. We are committed to a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
