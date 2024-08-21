import { useTypiedSelector } from "../../../../hooks/useTypiedSelector"

import { SwitchTheme } from "../common/switchTheme/SwitchTheme"
import { NavItem } from "./NavItem"


export const Nav = () => {
	const navigation: string[] = useTypiedSelector(state => state.pages)

	return (
		<nav className="hidden md:block">
			<ul className="flex items-center">

				{ navigation.map(el => <NavItem key={el} title={el}/>) }

				<SwitchTheme />

			</ul>
		</nav>
	)
}