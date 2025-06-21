import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 via-red-900/70 to-red-800 text-slate-100 px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-10 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">404</h1>
        <p className="text-lg sm:text-2xl mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold transition duration-200 hover:bg-red-800 shadow-md hover:shadow-xl"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
