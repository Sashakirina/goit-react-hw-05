import { Field, Form, Formik } from "formik";

function MoviesPage() {
	return (
		<div>
			<Formik>
				<Form>
					<Field type="text" name="search" />
					<button>Search</button>
				</Form>
			</Formik>
		</div>
	);
}

export default MoviesPage;
