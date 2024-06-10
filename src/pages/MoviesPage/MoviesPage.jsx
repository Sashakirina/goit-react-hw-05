import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovies } from "../../api/fetchMovies";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";

function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [searchParams] = useSearchParams();
	const query = searchParams.get("search") ?? "";

	useEffect(() => {
		if (!query) return;
		const getData = async () => {
			try {
				const movies = await getSearchMovies(query);
				setMovies(movies);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [query]);

	return (
		<div>
			<SearchForm />
			<MovieList movies={movies} />
		</div>
	);
}

export default MoviesPage;
