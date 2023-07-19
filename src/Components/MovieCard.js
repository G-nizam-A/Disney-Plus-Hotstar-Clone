import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img src={IMAGE_BASE_URL + movie.poster_path} alt=''
        className="w-24 md:w-48 rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in shadow-lg shadow-black"/>
    </>
  )
}

export default MovieCard;
