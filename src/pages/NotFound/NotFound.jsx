import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div>
			<p>This page is not found!</p>
			<Link to="/" />
		</div>
	);
}

export default NotFound;
