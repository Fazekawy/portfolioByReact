import { TbX } from "react-icons/tb"
import { IMobileMenu } from "./mobileMenu.type"
import { NavLink } from "react-router-dom"

import { capitalizeFirst } from "../../../../utils/string/capitalizeFirst.string"

import { useTypiedSelector } from "../../../../hooks/useTypiedSelector"

export const MobileMenu = ({ setIsMobileMenuOpen }: Pick<IMobileMenu, "setIsMobileMenuOpen">) => {

	const navigation: string[] = useTypiedSelector(state => state.pages)

	return (
		<div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">

			<TbX className="absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
				onClick={() => setIsMobileMenuOpen(false)} />

			<ul className="mt-8 flex flex-col">

				{ navigation.map(el => <MenuItem key={el} title={el} setIsMobileMenuOpen={setIsMobileMenuOpen} />) }

			</ul>
		</div>
	)
}

const MenuItem = ({ title, setIsMobileMenuOpen }: IMobileMenu ) => {
	return (
		<li className="">
			<NavLink to={`/${title === "intro"? "" : title}`}
			onClick={() => setIsMobileMenuOpen(false)}
			className="mb-3 block px-2 font-body text-lg font-medium text-white">{ capitalizeFirst(title) }</NavLink>
		</li>
	)
}