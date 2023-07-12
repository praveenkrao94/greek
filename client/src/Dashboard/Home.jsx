import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

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
        console.log(movies)
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <Card />
  );
};

export default MovieList;
