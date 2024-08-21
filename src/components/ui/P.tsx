import { IUIProps } from "./ui.type"

export const P = ({ children, customStyles }: IUIProps) => {
	return (
		<p className={`font-body font-light text-primary dark:text-white ${customStyles}`}>
			{ children }
		</p>
	)
}