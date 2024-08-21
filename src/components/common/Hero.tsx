import { ReactElement } from "react"

import { H1 } from "../ui/H1"
import { P } from "../ui/P"

import { useLocation } from "react-router-dom"

import { capitalizeFirst } from "../../utils/string/capitalizeFirst.string"

interface IHero {
	blockStyles?: string,
	src: string,
	description?: string | (string | ReactElement)[] | ReactElement,
	descriptionStyles?: string,
	children: ReactElement | ReactElement[]
}

export const Hero = ({ src, description, descriptionStyles, children }:IHero) => {

	const { pathname } = useLocation()

	const title: string = pathname !== "/" ? pathname.slice(1, pathname.length) : "hi, I’m Mike"

	return (
		<div className="py-16 lg:py-20">
			<img src={src} alt={`${title} image`} className={pathname === "/" ? "w-28 rounded-full" : ""} />

			<H1>{ title === "uses" ? "/uses" : capitalizeFirst(title) }</H1>

			{ description &&
			<P customStyles={`pt-5 ${descriptionStyles}`}>
				{ description }
			</P> }

			{ children }
		</div>
	)
}