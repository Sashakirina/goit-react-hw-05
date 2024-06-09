import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/fetchMovies";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const movies = await getTrendingMovies();
				setMovies(movies);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	});

	return (
		<div>
			<h1>Movies trending now</h1>
			<MovieList movies={movies} />
		</div>
	);
}

export default HomePage;
