import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div><br/>
      {GenresList.genere.map((item, index) =>index<=5&& (
        <div  key={index}  className="pt-3 px-5 md:px-16 ">
          <h2 className=" text-white font-bold">{item.name}</h2>
          <MovieList genereId={item.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList;
