import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, img, title, summary, genres }) {
  return (
    <div>
      <img src={img} alt={title} />
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <p>{summary ? summary : "-"}</p>
      <ul>
        Genres
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
