import { NavLink } from "react-router-dom"
import { Logo } from "../ui/Logo"
import { P } from "../../ui/P"

export const FooterCopyright = () => {
	return (
		<div className="mr-auto flex flex-col items-center sm:flex-row">

					<NavLink to="/" className="mr-auto sm:mr-6">

						<Logo />

					</NavLink>

					<P customStyles="sm:pt-0">
						©2024 Mike.
					</P>

				</div>
	)
}