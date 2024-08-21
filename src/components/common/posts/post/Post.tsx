import { NavLink } from "react-router-dom"
import { convertFormatDate } from "../../../../utils/date/convertFormat.date"

import { IPost } from "./post.type"

import { Category } from "../../category/Category"

export const Post = ({ title, published_at, categories, uuid }: IPost) => {
	return (
		<div className="border-b border-grey-lighter pt-10 first:pt-0 pb-8">

			<Category category={categories} />

			<NavLink to={`${uuid}`}
				className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">{title}</NavLink>

			<div className="flex items-center pt-4">
				<p className="pr-2 font-body font-light text-primary dark:text-white">
					{convertFormatDate(published_at)}
				</p>
			</div>

		</div>
	)
}