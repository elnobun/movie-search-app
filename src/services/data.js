const fetchMoviesFromAPI = (query) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=522253dc073636e619fead2593d30366&language=en-US&query=${query}&page=1&include_adult=false`
}

export default fetchMoviesFromAPI
