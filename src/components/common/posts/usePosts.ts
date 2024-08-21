import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useGetNewsQuery } from "../../../store/api/news/news.api"

export const usePosts = () => {
	const { search } = useLocation()

	console.log(search.slice(search.indexOf("pages=") + 7, search.length))

	const [ currentPage, setCurrentPage ] = useState<string>(search.slice(search.indexOf("pages=") + 7, search.length) || "1")

	const { data, isFetching, error } = useGetNewsQuery(currentPage)

	console.log(data)

	return {
		data,
		isFetching,
		error,
		setCurrentPage
	}
}