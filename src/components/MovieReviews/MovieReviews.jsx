import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/fetchMovies";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

function MovieReviews() {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			setError(false);
			try {
				const reviews = await getMovieReviews(movieId);
				setReviews(reviews);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [movieId]);

	return reviews.length > 0 ? (
		<div>
			<h2>MovieReviews</h2>
			{loading && <Loader />}
			{error && <ErrorMessage />}
			{reviews.map(({ author, content, id }) => (
				<div key={id} className={css.card}>
					<h3>{author}</h3>
					<p>{content}</p>
				</div>
			))}
		</div>
	) : (
		<p>There are no reviews yet.</p>
	);
}

export default MovieReviews;
