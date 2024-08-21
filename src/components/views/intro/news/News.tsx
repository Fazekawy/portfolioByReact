import { Posts } from "../../../common/posts/Posts"
import { Sup } from "../../../ui/Sup"
import { ToNews } from "./ToNews"

export const News = () => {

	return (
		<div className="py-16 lg:py-20">

			<Sup src={"https://atlas.redpixelthemes.com/assets/img/icon-blog.png"} customStyles="w-8" title="News">

				<ToNews />

			</Sup>

			<Posts />

		</div>
	)
}