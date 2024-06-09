import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/fetchMovies";
import MovieCard from "../../components/MovieCard/MovieCard";

function MovieDetailsPage() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState();
	console.log(movieId);

	useEffect(() => {
		const getData = async () => {
			try {
				const movie = await getMovieDetails(movieId);
				setMovie(movie);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [movieId]);

	console.log(movie);

	return (
		<div>
			<MovieCard {...movie} />
			<ul>
				<li>
					<NavLink to="cast">Cast</NavLink>
				</li>
				<li>
					<NavLink to="reviews">Reviews</NavLink>
				</li>
			</ul>
			<Outlet />
		</div>
	);
}

export default MovieDetailsPage;
