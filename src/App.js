import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './component/MovieCard';

// 6c8b9677

const API_URL = 'http://www.omdbapi.com?apikey=6c8b9677';
/*
const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "year":"2012",
    "imbdID":"movie",
    "poster":"N/A"
}
*/
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();


        setMovies(data.Search);
    }

    useEffect(() => {

        searchMovies('Spiderman');

    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder='Search For movie'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() =>searchMovies(searchTerm)}
                />
                </div>

                    {
                      movies?.length  > 0
                       ? (
                        <div className= "container" >
                             {movies.map((movie) => (
                                <MovieCard movie={movie} />
                             ))}
                        </div>
            
                       ) :
                       (
                        <div className='empty'>
                            <h2>no movie found</h2>
                        </div>
                       )
                    }

                
            </div>
    
    );
}

export default App;