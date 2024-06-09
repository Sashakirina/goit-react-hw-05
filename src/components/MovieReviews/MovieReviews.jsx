import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/fetchMovies";

function MovieReviews() {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const reviews = await getMovieReviews(movieId);
				setReviews(reviews);
				console.log(reviews);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [movieId]);

	return (
		reviews && (
			<div>
				<h2>MovieReviews</h2>
				{reviews.map(({ author, content, id }) => (
					<div key={id}>
						<h3>{author}</h3>
						<p>{content}</p>
					</div>
				))}
			</div>
		)
	);
}

export default MovieReviews;
