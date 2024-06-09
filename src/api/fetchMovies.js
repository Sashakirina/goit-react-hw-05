import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const trending = "trending/movie/day?language=en-US";
const search = "search/movie?include_adult=false&language=en-US&page=1";

const options = {
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBiZTU0NmY5ZDdhMjk4MDViYTM2ZGJlY2Y5OTc1MCIsInN1YiI6IjY2NjE5MjEwYWE3ZTk0MjI2M2YyYWEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLDZ1UlZ6rTl7hRBtS0HtkH8UxuCcUxx4JqqmRf7eSs",
	},
};

export const getTrendingMovies = async () => {
	const { data } = await axios.get(trending, options);
	const movies = data.results;
	return movies;
};

export const getSearchMovies = async () => {
	const { data } = await axios.get(search, options);
	const movies = data.results;
	return movies;
};

export const getMovieDetails = async (movieId) => {
	const { data } = await axios.get(`movie/${movieId}`, options);
	console.log(data);
	// const movie = data.results;
	return data;
};

export const getMovieCredits = async (movieId) => {
	const { data } = await axios.get(`movie/${movieId}/credits`, options);
	const cast = data.cast;
	return cast;
};

export const getMovieReviews = async (movieId) => {
	const { data } = await axios.get(`movie/${movieId}/reviews`, options);
	const reviews = data.results;
	return reviews;
};
