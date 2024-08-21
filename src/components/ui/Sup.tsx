import { PartialBy } from "../../types/partialBy.type"
import { IUIProps } from "./ui.type"

interface ISup extends IUIProps {
	src: string,
	title: string
}

export const Sup = ({ children, customStyles, src, title}: PartialBy<ISup, "children">) => {
	return (
		<article className={`flex items-center pb-6 ${customStyles}`}>
			<img src={src} alt="icon story" />
				<h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
					{ title }
				</h3>
				{ children }
		</article>
	)
}