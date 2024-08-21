import { API_KEY } from "../../../const/api.const";

import { newsApi } from "./news.api";

import { IData } from "./newsApi.type";

export const { useGetNewsPageQuery } = newsApi.injectEndpoints({
	endpoints: builder => ({
		getNewsPage: builder.query<IData, string>({
			query: (slug) => {
				return `uuid/${slug}?${API_KEY}`
			}
		})
	})
})