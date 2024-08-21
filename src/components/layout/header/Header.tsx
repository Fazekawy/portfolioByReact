import { Mobile } from "./mobile/Mobile"
import { HeaderLogo } from "./HeaderLogo"
import { Nav } from "./nav/Nav"

export const Header = () => {

	return (
		<header className="flex items-center justify-between py-6 lg:py-10">

				<HeaderLogo />

				<Mobile />

				<Nav />

		</header>
	)
}