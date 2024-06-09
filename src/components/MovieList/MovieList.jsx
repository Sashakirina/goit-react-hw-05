import { Link } from "react-router-dom";

function MovieList({ movies }) {
	return (
		<ul>
			{movies.map(({ title, id }) => (
				<li key={id}>
					<Link to={`/movies/${id}`}>{title}</Link>
				</li>
			))}
		</ul>
	);
}

export default MovieList;
