import { Hero } from "../../common/Hero"
import { Posts } from "../../common/posts/Posts"
import { NewsForm } from "./NewsForm"

export const News = () => {
	return (
			<Hero src="https://atlas.redpixelthemes.com/assets/img/icon-blog.png"
				description="Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen."
				descriptionStyles="sm:w-3/4 text-xl">
				<NewsForm />

				<Posts isPaginationActive={true} />

			</Hero>
	)
}