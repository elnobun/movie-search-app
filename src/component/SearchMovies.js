import getMoviesFromAPI from '../services/data'

export default function SearchMovies () {

    // Create function to call data from the movies API
    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('Submitted')

        const query = 'Jurassic Park'

        const url = getMoviesFromAPI(query)

        try {
            const res = await fetch(url)
            const data = await res.json()

            console.log(data)
        } catch (e) {
            console.error('error')
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="form__label">
            </label>
            <input type="text"
                   className="form__input"
                   name="query"
                   placeholder="e.g Wonder Woman"/>
            <button className="form__button" type="submit">Search</button>
        </form>
    )
}
