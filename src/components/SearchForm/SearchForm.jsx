import { FaSearch } from "react-icons/fa";

function SearchForm({ onSearch }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const query = evt.target.elements.search.value;
		console.log(query);
		onSearch(query);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="search" />
				<button>
					Search <FaSearch />
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
