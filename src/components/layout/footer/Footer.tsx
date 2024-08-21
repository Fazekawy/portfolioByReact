import { FooterCopyright } from "./FooterCopyright"
import { Socials } from "./socials/Socials"

export const Footer = () => {
	return (
		<footer className="container mx-auto
		flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">

				<FooterCopyright />

				<Socials />

		</footer>
	)
}