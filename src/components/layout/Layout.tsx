import { Outlet } from "react-router-dom"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const Layout = () => {
	return (
		<div className="">
{/* api request to type of pages */}
			<Header />

			<Outlet />

			<Footer />

		</div>

	)
}