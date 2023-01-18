import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";

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
      <div className={style.container}>
        {loading ? (
          <div className={style.loader}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <div className={style.movies}>
              {movieList.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  img={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  year={movie.year}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
