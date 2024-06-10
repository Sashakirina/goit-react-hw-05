import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/fetchMovies";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function HomePage() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			setError(false);
			try {
				const movies = await getTrendingMovies();
				setMovies(movies);
				console.log(movies);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return (
		<div>
			<h1>Movies trending now</h1>
			{loading && <Loader />}
			{error && <ErrorMessage />}
			<MovieList movies={movies} />
		</div>
	);
}

export default HomePage;
