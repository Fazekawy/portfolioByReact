import { IUIProps } from "./ui.type"

interface IButton extends IUIProps {
	onClick?: () => void
}

export const Button = ({ children, customStyles, ...settings }: IButton) => {
	return (
		<button
		{...settings}
		className={`bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:text-left sm:text-2xl ${customStyles}`}>
		{ children }
	</button>
	)
}