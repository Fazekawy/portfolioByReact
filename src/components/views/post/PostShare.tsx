import { ReactElement } from "react"
import { FaFacebookF, FaLinkedinIn, FaReddit, FaTwitter } from "react-icons/fa6"

export const PostShare = () => {
	return (
		<div className="flex items-center py-10">

			<span className="pr-5 font-body font-medium text-primary dark:text-white"
			>Share</span>

			<PostShareA href="/">
				<FaFacebookF />
			</PostShareA>

			<PostShareA href="/">
				<FaTwitter />
			</PostShareA>

			<PostShareA href="/">
				<FaLinkedinIn />
			</PostShareA>

			<PostShareA href="/">
				<FaReddit />
			</PostShareA>

		</div>
	)
}

export const PostShareA = ({ children, href }: { children: ReactElement, href: string }) => <a href={href} className="pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary">{ children }</a>