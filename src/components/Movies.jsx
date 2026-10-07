import MovieItem from "./MovieItem";

export default function Movies(props) {
  return props.movies.map((movie) => (
    <MovieItem mymovie={movie} key={movie.imdbID} />
  ));
}