import { BsGithub } from "react-icons/bs"
import { FaCodepen, FaLinkedinIn } from "react-icons/fa6"

export const Socials = () => {
	return (
		<div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">

					<a href="https://github.com/Fazekawy " target="_blank">
						<BsGithub
							className="text-4xl text-primary dark:text-white pl-3 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github" />
					</a>

					<a href="https://codepen.io/ " target="_blank">
						<FaCodepen
							className="text-4xl text-primary dark:text-white pl-3 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-codepen" />
					</a>

					<a href="https://www.linkedin.com/ " target="_blank">
						<FaLinkedinIn
							className="text-4xl text-primary dark:text-white pl-3 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin" />
					</a>

				</div>
	)
}