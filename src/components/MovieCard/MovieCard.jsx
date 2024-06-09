function MovieCard({
	poster_path,
	title,
	genres = [],
	overview,
	vote_average,
}) {
	return (
		<div>
			<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
			<ul>
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
