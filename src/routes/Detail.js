import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <strong>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image} alt="" />
            <ul>{movie.genres ? movie.genres.map((g, index) => <li key={index}>[{g}]</li>) : ""}</ul>
            <p>year : {movie.year}</p>
            <p>rating : {movie.rating}</p>
            <p>runTime : {movie.runtime} minutes</p>
            <p>Description : {movie.description_full}</p>
            <p>upload Time: {movie.date_uploaded}</p>
          </div>
        )}
      </strong>
    </div>
  );
}

export default Detail;
