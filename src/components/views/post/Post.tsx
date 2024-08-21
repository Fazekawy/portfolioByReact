import { useParams } from "react-router-dom"
import { useGetNewsPageQuery } from "../../../store/api/news/news.endpoint"
import { Category } from "../../common/category/Category"
import { convertFormatDate } from "../../../utils/date/convertFormat.date"
import { H1 } from "../../ui/H1"
import { PostShare } from "./PostShare"

export const Post = () => {

	const { slug } = useParams()

	const { data, isLoading, error } = useGetNewsPageQuery(String(slug))

	console.log(data)

	return isLoading ? <H1 customStyles="mb-10">Loading...</H1> : !data || error ? <H1>Error</H1> : (
			<div className="pt-16 lg:pt-20">

				<div className="border-b border-grey-lighter pb-8 sm:pb-12">

					<Category category={data.categories} />

					<h2
						className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
						{data.title}
					</h2>

					<div className="flex items-center pt-5 sm:pt-8">

						<p className="pr-2 font-body font-light text-primary dark:text-white">
							{convertFormatDate(data.published_at)}
						</p>

					</div>

				</div>

				<div className="border-b border-grey-lighter py-8 dark:text-white sm:py-12">

					<span className="border-b border-grey-lighter py-8 sm:py-12">
						{data.description}
					</span>

					<img className="my-3" src={data.image_url}/>

					<blockquote>
						<p>{data.snippet}</p>
					</blockquote>
				</div>


				<PostShare />

			</div>
	)
}