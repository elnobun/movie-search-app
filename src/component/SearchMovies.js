import fetchMoviesFromAPI from '../services/data'
import { useState } from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies () {
    // Track user input query and movies data
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    // Create function to call data from the movies API
    const searchMovies = async (e) => {
        e.preventDefault()

        const url = fetchMoviesFromAPI(query)

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch (e) {
            console.error('error')
        }
    }

    // Handle changes to the user input query
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="form__label">
                </label>
                <input type="text"
                       className="form__input"
                       name="query"
                       value={query}
                       onChange={handleChange}
                       placeholder="e.g Wonder Woman"
                />
                <button className="form__button" type="submit">Search</button>
            </form>
            <div className="movie-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </>
    )
}
