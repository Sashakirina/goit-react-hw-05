import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
	const location = useLocation();

	return (
		<ul className={css.list}>
			{movies.map(({ title, id }) => (
				<li key={id}>
					<Link to={`/movies/${id}`} state={location}>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default MovieList;
