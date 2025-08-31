import React from "react";

export const Errorpg = () => {
  return (
    <div>
      {" "}
      <div className="h-screen flex flex-col justify-center items-center bg-pink-50">
        <h1 className="text-9xl font-extrabold text-pink-400 animate-bounce">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found 🐱‍👓
        </p>
        <p className="text-gray-500 mt-2">
          Looks like you’re lost in space… 🌌
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-pink-400 text-white rounded-2xl shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform"
        >
          Take me home 🏠
        </a>
      </div>
    </div>
  );
};
