import { IMobileMenu } from "./mobileMenu.type"

export const MobileIcon = ({ setIsMobileMenuOpen }: Pick<IMobileMenu, "setIsMobileMenuOpen">) => {
	return (
		<svg width="24" height="15" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMobileMenuOpen(true)}
				className="fill-current text-primary dark:text-white">
				<g fillRule="evenodd">
					<rect width="24" height="3" rx="1.5" />
					<rect x="8" y="6" width="16" height="3" rx="1.5" />
					<rect x="4" y="12" width="20" height="3" rx="1.5" />
				</g>
			</svg>
	)
}