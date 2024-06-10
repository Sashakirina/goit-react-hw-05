import { useEffect, useRef, useState } from "react";
import {
	Link,
	NavLink,
	Outlet,
	useLocation,
	useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../api/fetchMovies";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const location = useLocation();
	const prevLocation = useRef(location.state);

	const buildLinkClass = ({ isActive }) => {
		return clsx(css.navLink, isActive && css.active);
	};

	useEffect(() => {
		const getData = async () => {
			setError(false);
			setLoading(true);
			try {
				const movie = await getMovieDetails(movieId);
				setMovie(movie);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [movieId]);

	return (
		<div>
			<Link to={prevLocation.current ?? "/movies"}>Go back </Link>
			{loading && <Loader />}
			{error && <ErrorMessage />}
			<MovieCard {...movie} />
			<ul className={css.nav}>
				<li>
					<NavLink to="cast" state={prevLocation} className={buildLinkClass}>
						Cast
					</NavLink>
				</li>
				<li>
					<NavLink to="reviews" state={prevLocation} className={buildLinkClass}>
						Reviews
					</NavLink>
				</li>
			</ul>
			<Outlet />
		</div>
	);
}

export default MovieDetailsPage;
