import { NavLink } from "react-router-dom"
import { capitalizeFirst } from "../../../../utils/string/capitalizeFirst.string"

export const NavItem = ({ title }: { title: string }) => {
	return (
		<li className="group relative mr-6 mb-1">
			<div
				className="absolute left-0 bottom-0 z-20 h-0 w-full
				opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
			</div>
			<NavLink to={`/${title === "intro"? "" : title}`}
				className="relative z-30 block px-2 font-body text-lg
				font-medium text-primary transition-colors
				group-hover:text-green dark:text-white
				dark:group-hover:text-secondary">{ capitalizeFirst(title) }</NavLink>
		</li>
	)
}