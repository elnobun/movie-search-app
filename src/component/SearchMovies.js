export default function SearchMovies () {
    return (
        <form className="form">
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
