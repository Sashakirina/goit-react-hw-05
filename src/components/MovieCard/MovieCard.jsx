import css from "./MovieCard.module.css";

function MovieCard({
	poster_path,
	title,
	genres = [],
	overview,
	vote_average,
}) {
	return (
		<div className={css.wrapper}>
			<img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="" />
			<ul className={css.list}>
				<li>
					<h1>{title}</h1>
					<p>User score: {Math.round(vote_average * 10)}%</p>
				</li>
				<li>
					<h2>Overview</h2>
					<p>{overview}</p>
				</li>
				<li>
					<h2>Genres</h2>
					<p>{genres.map(({ name }) => `${name} `)}</p>
				</li>
			</ul>
		</div>
	);
}

export default MovieCard;
