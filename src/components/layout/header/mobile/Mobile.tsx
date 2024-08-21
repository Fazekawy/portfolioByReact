import { useState } from "react"

import { MobileMenu } from "./MobileMenu"
import { MobileIcon } from "./MobileIcon"
import { SwitchTheme } from "../common/switchTheme/SwitchTheme"

export const Mobile = () => {

	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState<boolean>(false)

	return (
		<div className="flex items-center md:hidden">
			<SwitchTheme customTheme="mr-8" />

			<MobileIcon setIsMobileMenuOpen={setIsMobileMenuOpen} />

			<div className={`pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''}`}>

				<MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />

			</div>

		</div>
	)
}