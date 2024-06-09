import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBiZTU0NmY5ZDdhMjk4MDViYTM2ZGJlY2Y5OTc1MCIsInN1YiI6IjY2NjE5MjEwYWE3ZTk0MjI2M2YyYWEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLDZ1UlZ6rTl7hRBtS0HtkH8UxuCcUxx4JqqmRf7eSs";
axios.defaults.headers.common["accept"] = "application/json";

const trending = "trending/movie/day?language=en-US";

// const options = {
// 	headers: {
// 		accept: "application/json",
// 		Authorization:
// 			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBiZTU0NmY5ZDdhMjk4MDViYTM2ZGJlY2Y5OTc1MCIsInN1YiI6IjY2NjE5MjEwYWE3ZTk0MjI2M2YyYWEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLDZ1UlZ6rTl7hRBtS0HtkH8UxuCcUxx4JqqmRf7eSs",
// 	},
// };

export const getTrendingMovies = async () => {
	const { data } = await axios.get(trending);
	const movies = data.results;
	return movies;
};

export const getSearchMovies = async (query) => {
	const { data } = await axios.get(`search/movie?query=${query}`);
	console.log(data);
	const movies = data.results;
	return movies;
};

export const getMovieDetails = async (movieId) => {
	const { data } = await axios.get(`movie/${movieId}`);
	console.log(data);
	// const movie = data.results;
	return data;
};

export const getMovieCredits = async (movieId) => {
	const { data } = await axios.get(`movie/${movieId}/credits`);
	const cast = data.cast;
	return cast;
};

export const getMovieReviews = async (movieId) => {
	const { data } = await axios.get(`movie/${movieId}/reviews`);
	const reviews = data.results;
	return reviews;
};
