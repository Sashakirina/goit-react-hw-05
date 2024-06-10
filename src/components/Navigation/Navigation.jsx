import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

function Navigation() {
	const buildLinkClass = ({ isActive }) => {
		return clsx(css.navLink, isActive && css.active);
	};

	return (
		<div>
			<nav className={css.nav}>
				<NavLink to="/" className={buildLinkClass}>
					Home
				</NavLink>
				<NavLink to="/movies" className={buildLinkClass}>
					Movies
				</NavLink>
			</nav>
			<hr />
		</div>
	);
}

export default Navigation;
