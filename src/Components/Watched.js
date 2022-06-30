import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div>
        <h1>watched movies</h1>
        <span>
          {watched.length} {watched.length === "1" ? "movie" : "movies"}
        </span>
      </div>
      {watched.length > 0 ? (
        <div>
          {watched.map((movie) => (
            <MovieCard movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <h1>No Movie in your list, add some</h1>
      )}
    </div>
  );
};

export default Watched;
