import { useMovieContext } from "../contexts/MovieContexts";
import "../css/Favorites.css";
import MovieCard from "../component/MovieCard";


function Favorites() {

    const {favorites} = useMovieContext();
    
    if (favorites) {
        return(
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movie-grid">
                {favorites.map((movie) => (
                    <MovieCard movie ={movie} key = {movie.id}/>
                ))}
                </div>
            </div>   
        )
    }




    return<div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites and then it will appear here</p>
    </div>
}


export default Favorites;