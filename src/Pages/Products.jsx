import React, { useState } from "react";
import { Link } from "react-router";
import productData from "../../src/productdata"; // Update path as needed

const FILTERS = [
  "All",
  "Tablet",
  "Capsule",
  "Syrup",
  "Suspension",
  "Solution",
  "Drops",
];

const Products = () => {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");

  const filteredData = productData.filter(
    (item) =>
      (selected === "All" ||
        item.dosageForm.toLowerCase().includes(selected.toLowerCase())) &&
      item.formulation.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800/50 to-red-700 text-white px-4 py-8">
      {/* Product Listing Section */}
      <section className="py-16 px-4 w-full max-w-7xl mx-auto mt-12 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl text-white/90">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Our Products
        </h2>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                id={selected}
                onClick={() => setSelected(filter)}
                className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 ${
                  selected === filter
                    ? "bg-white/20 text-white border border-white/40 backdrop-blur-md shadow"
                    : "bg-white/10 text-white/70 border border-white/20 hover:bg-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search formulations..."
            className="w-full sm:w-72 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-md placeholder-white/60"
          />
        </div>

        {/* Responsive Table (Desktop) */}
        <div className="hidden md:block overflow-x-auto rounded-md ">
          {filteredData.length > 0 ? (
            <table className="min-w-[640px] w-full text-sm text-left whitespace-nowrap">
              <thead className="bg-white/5 text-white/80 text-sm">
                <tr>
                  <th className="px-4 py-3">S.No</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Formulation</th>
                  <th className="px-4 py-3">Dosage Form</th>
                  <th className="px-4 py-3">Strength / Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/10 border-t border-white/20 transition-colors duration-200"
                  >
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.formulation}</td>
                    <td className="px-4 py-2">{item.dosageForm}</td>
                    <td className="px-4 py-2">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-white/70 text-center mt-4">No products found.</p>
          )}
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-4 shadow"
              >
                <div className="text-sm text-white/80 mb-2">#{idx + 1}</div>
                <div className="text-base font-medium">{item.formulation}</div>
                <div className="text-sm text-white/70">{item.category}</div>
                <div className="text-sm mt-1">
                  <span className="font-semibold">Dosage:</span>{" "}
                  {item.dosageForm}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Type:</span> {item.type}
                </div>
              </div>
            ))
          ) : (
            <p className="text-white/70 text-center">No products found.</p>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 mt-12 w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-xl text-white/90">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Why Choose Our Products?
        </h2>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white/80 space-y-3">
          <p>
            Explore our range of high-quality healthcare products designed to
            meet your needs. We offer a wide variety of formulations, including
            tablets, capsules, syrups, and more, all crafted with the highest
            standards of quality and safety.
          </p>
          <p>Your health is our priority. Contact us for more information. </p>
          <p>
            <Link
              to="/contact"
              className="underline text-white hover:text-white/80 transition"
            >
              Get in Touch
            </Link>
          </p>
          <p>We look forward to hearing from you!</p>
        </div>
      </section>
    </main>
  );
};

export default Products;
