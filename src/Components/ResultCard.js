import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, watchList, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let storedMovie = watchList.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisable = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisable = storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="fill-poster"></div>
        )}
      </div>
      <div className="information">
        <div className="">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="control">
          <button
            disabled={watchlistDisable}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>

          <button
            disabled={watchedDisable}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
