import { H1 } from "../../ui/H1"
import { Paginations } from "./paginations/Paginations"
import { Post } from "./post/Post"
import { IPost } from "./post/post.type"

import { usePosts } from "./usePosts"

export const Posts = ({ isPaginationActive }: { isPaginationActive?: boolean }) => {

	const { data, isFetching, error, setCurrentPage } = usePosts()

	return isFetching ? <H1>Loading...</H1> : !data || data.error || error ? <H1>Error</H1> : (
		<>
			<div className="pt-8 lg:pt-12">

				{data.data ?
						data.data?.map(({ title, published_at, categories, uuid }: IPost) => <Post key={title} title={title} published_at={published_at} categories={categories} uuid={uuid} />)
						: <H1>Error</H1>}
			</div>

			{isPaginationActive && data.meta !== undefined && <Paginations
			currentPage={data.meta.page}
			setCurrentPage={setCurrentPage}
			pagesCount={6666} />}
		</>
	)
}