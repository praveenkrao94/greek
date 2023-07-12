import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await axios.post(
          "https://hoblist.com/api/movieList",
          {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }
        );
        setMovies(response.data.result);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Movie List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p>{movie.language}</p>
            <p>{movie.genre}</p>
            <p>Voting: {movie.voting}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
