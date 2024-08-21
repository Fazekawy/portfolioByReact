import { Logo } from "../ui/Logo"

export const HeaderLogo = () => {
	return (
		<a href="/" className="flex items-center">
			<span className="mr-2">
				<Logo />
			</span>
			<p className="hidden font-body text-2xl font-bold text-primary dark:text-white md:block">
				Mike
			</p>
		</a>
	)
}