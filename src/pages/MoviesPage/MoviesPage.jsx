import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getSearchMovies } from "../../api/fetchMovies";

function MoviesPage() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (!query) return;
		const getData = async () => {
			try {
				const movies = await getSearchMovies(query);
				setMovies(movies);
				console.log(movies);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [query]);

	const onSearch = (value) => setQuery(value);

	return (
		<div>
			<SearchForm onSearch={onSearch} />
			<MovieList movies={movies} />
		</div>
	);
}

export default MoviesPage;
