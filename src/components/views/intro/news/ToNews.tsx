import { NavLink } from "react-router-dom"

export const ToNews = () => {

	return (
		<NavLink to="/news"
			className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
			All news
			<img src="https://atlas.redpixelthemes.com/assets/img/long-arrow-right.png" className="ml-3" alt="arrow right" />
		</NavLink>
	)
}