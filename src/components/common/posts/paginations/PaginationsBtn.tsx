import { ReactElement } from "react"
import { NavLink } from "react-router-dom"

interface IPaginationsBtn {
	isActive: boolean,
	customStyles?: string | undefined,
	children: number | (string | ReactElement)[],
	to: string,
	onClick: (() => void) | undefined
}

export const PaginationsBtn = ({isActive,customStyles, children, ...settings}: IPaginationsBtn) => {
	return (
		<NavLink
				{...settings}
				className={`cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors ${isActive ? "border-secondary text-secondary" : "transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary"} ${customStyles}`}>
				{children}
			</NavLink>
	)
}