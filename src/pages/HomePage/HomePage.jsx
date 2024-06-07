import { Formik, Form, Field } from "formik";

function HomePage() {
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

export default HomePage;
