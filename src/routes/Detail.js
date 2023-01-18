import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../routes/Home.module.css";
import styles from "./Detail.module.css";

function Detail() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  console.log(movie);
  return (
    <div>
      <div>
        {loading ? (
          <div className={loader.loader}>
            <h1>"Loading..."</h1>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>{movie.title}</h1>
            </div>
            <div className={styles.imgBox}>
              <img src={movie.large_cover_image} alt="" />
            </div>
            <div className={styles.infoBox}>
              <div>
                <ul>{movie.genres ? movie.genres.map((g, index) => <li key={index}>{g}</li>) : ""}</ul>
              </div>
              <div>
                <p>year : {movie.year}</p>
                <p>rating : {movie.rating}</p>
                <p>runTime : {movie.runtime} minutes</p>
              </div>
            </div>

            <p>{movie.description_full}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
