import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <div>
      <div>
        <h1>watchlist</h1>
        <span>
          {watchList.length} {watchList.length === 1 ? "movie" : "movies"}
        </span>
      </div>
      {watchList.length > 0 ? (
        <div>
          {watchList.map((movie) => (
            <MovieCard movie={movie} type="watchList" />
          ))}
        </div>
      ) : (
        <h1>No Movie in your list, add some</h1>
      )}
    </div>
  );
};

export default WatchList;
