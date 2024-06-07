import "./App.css";
import { Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<Routes>
			<Router path="/" element={<HomePage />} />
			<Router path="/movies" element={<MoviesPage />} />
			<Router path="/movies:id" element={<MovieDetailsPage />} />
			<Router path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
