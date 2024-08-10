
import React from "react";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import Footer from "./Components/Footer";
import movies from "./movie.json";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <Movie
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                img={movie.Poster}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
