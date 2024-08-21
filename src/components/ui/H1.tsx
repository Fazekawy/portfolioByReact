import { IUIProps } from "./ui.type"


export const H1 = ({ children, customStyles }: IUIProps) => {
	return (
			<h1 className={`pt-5 font-body text-4xl font-semibold text-primary
			dark:text-white md:text-5xl lg:text-6xl ${customStyles}`}>
				{ children }
			</h1>
	)
}