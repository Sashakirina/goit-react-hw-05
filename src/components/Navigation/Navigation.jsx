import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<div>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/movies">Movies</NavLink>
			</nav>
		</div>
	);
}

export default Navigation;
