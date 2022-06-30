import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


const MovieControls = ({movie, type}) => {
    const {removeMovieFromWatchList, addMovieToWatched, moveMovieBackToWatchList,
        removeMovieFromWatched } = useContext(GlobalContext)
  return (
    <div>
        {type=== 'watchList' && (
            <>
              <button onClick={()=>addMovieToWatched(movie)}>
                  <i className='fa-fw far fa-eye'></i>
              </button>

              <button onClick={()=>removeMovieFromWatchList(movie.id)}>
                  <i className='fa-fw fa fa-times'></i>
              </button>
            </>
        )}

{type=== 'watched' && (
            <>
              <button onClick={()=>moveMovieBackToWatchList(movie)}>
                  <i className='fa-fw far fa-eye-slash'></i>
              </button>

              <button onClick={()=>removeMovieFromWatched(movie.id)}>
                  <i className='fa-fw fa fa-times'></i>
              </button>
            </>
        )}
    </div>
  )
}
 
export default MovieControls;