import { Link } from "react-router-dom";

function ErrorMessage() {
	return (
		<div>
			<p>
				Oops... Something went wrong, reload page or go back to{" "}
				<Link to={"/"}>Home page</Link>
			</p>
		</div>
	);
}

export default ErrorMessage;
