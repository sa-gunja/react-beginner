import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovie = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")).json();
    setMovieList(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>
        {loading
          ? "Loading.."
          : movieList.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                img={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
      </h1>
      <hr />
    </div>
  );
}

export default Home;
