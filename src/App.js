import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './component/MovieCard';

// 6c8b9677

const API_URL = 'http://www.omdbapi.com?apikey=6c8b9677';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "year":"2012",
    "imbdID":"movie",
    "poster":"N/A"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();


        console.log(data.Search);
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
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
                </div>
                <div className= "container" >
                   <MovieCard movie1={movie1} />
                </div>
            </div>
    
    );
}

export default App;