import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import css from "./SearchForm.module.css";

function SearchForm() {
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("search") ?? "";

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(query);
		setSearchParams({ search: evt.target.elements.search.value });
		evt.target.reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className={css.form}>
				<input
					type="text"
					name="search"
					id="search"
					required
					className={css.input}
				/>
				<button>
					Search <FaSearch />
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
