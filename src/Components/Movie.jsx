import React from "react";

const Movie = ({ title, year, img }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img className="w-full h-64 object-cover" src={img} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">Year: {year}</p>
      </div>
    </div>
  );
};

export default Movie;
