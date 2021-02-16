# Movie Search App
An application that allows users to search for movies, which
will make a call to an API and retrieve movies information that are 
relevant to that search.

## Tech Stack Features
- React Functional Components
- React Hooks
- SCSS
- Fetch API
- [themoviedb API](https://www.themovedb.org)

## Application Requirements
- Application allows users to search for movies
- Application can make request call to external movie API.
- Application displays list of movies, based on user query.

## User Requirements
- User can search for movies
- User sees a list of movies based on their search
- User can preview movies

## Application Build
- [x] Setup environment with default styling
- [x] Search Movie component with styling
    - [x] Create search form with a class of form.
    - [x] Create a label with htmlFor="query" with a class of label.
    - [x] Create an input of a type of text with a name of "query" and a placeholder. 
    - [x] Create a button with class of button, and a type of submit.
    - [x] Make component responsive.
- [x] Make request to movie API
    - [x] Create a function using async/await to fetch data from the API.
    - [x] Create application state (Hooks) to keep track of user input. 
    - [x] Create application state (Hooks) to keep track of the data from the API.
- [x] Display the movies to the DOM
    - [x] Create a card component for each movie
    - [x] Filter and get only movies that have images
    - [x] Add the image, title, release date, rating and description to the card
    - [ ] Beautify Card UI
    
