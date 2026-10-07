import MovieItem from "./MovieItem";

export default function Movies(props) {
  // Render one movie card for each record, using its IMDb ID as a stable key.
  return props.movies.map((movie) => (
    <MovieItem mymovie={movie} key={movie.imdbID} />
  ));
}