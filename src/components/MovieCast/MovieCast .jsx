import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/fetchMovies";

function MovieCast() {
	const { movieId } = useParams();
	const [cast, setCast] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const cast = await getMovieCredits(movieId);
				setCast(cast);
				console.log(cast);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [movieId]);

	return (
		cast && (
			<div>
				Movie cast
				{cast.map(({ character, name, profile_path, cast_id }) => (
					<div key={cast_id}>
						<img
							src={`https://image.tmdb.org/t/p/w200${profile_path}`}
							alt=""
						/>
						<p>{name}</p>
						<p>Character: {character}</p>
					</div>
				))}
			</div>
		)
	);
}

export default MovieCast;
