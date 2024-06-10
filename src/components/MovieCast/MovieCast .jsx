import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/fetchMovies";
import css from "./MovieCast.module.css";

function MovieCast() {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const cast = await getMovieCredits(movieId);
				setCast(cast);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [movieId]);

	return (
		<div>
			<h2>Movie cast</h2>
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
	);
}

export default MovieCast;
