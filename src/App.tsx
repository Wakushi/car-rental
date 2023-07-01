import { Route, Routes } from "react-router-dom"
import "./App.scss"

import HomePage from "./modules/home/Home"
import Layout from "./layout/Layout"
import AboutPage from "./modules/about/About"

export default function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Layout>
		</>
	)
}
