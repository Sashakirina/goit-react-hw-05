import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/fetchMovies";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";

function MovieCast() {
	const { movieId } = useParams();
	const [cast, setCast] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			setError(false);
			try {
				const cast = await getMovieCredits(movieId);
				setCast(cast);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [movieId]);

	return (
		cast && (
			<div>
				<h2>Movie cast</h2>
				{loading && <Loader />}
				{error && <ErrorMessage />}
				<div className={css.cast}>
					{cast.map(({ character, name, profile_path, cast_id }) => (
						<div key={cast_id} className={css.card}>
							<img
								src={`https://image.tmdb.org/t/p/w200${profile_path}`}
								alt="actor photo"
								className={css.photo}
							/>
							<p>{name}</p>
							<p>
								Character: <br /> {character}
							</p>
						</div>
					))}
				</div>
			</div>
		)
	);
}

export default MovieCast;
