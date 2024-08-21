import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { INewsResult } from './newsApi.type'
import { API_KEY } from '../../../const/api.const'

export const newsApi = createApi({
	reducerPath: "newsApi",
	// tagTypes: ["news"],
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.thenewsapi.com/v1/news",
		// headers: {
		// 	"API_KEY": "pHGZD6nZ6HiBeU8hsOC0tWt_cEaga5L_vtNg8xAtrcJb-x8O"
		// }
	}),
	endpoints: (builder) => ({
		getNews: builder.query<INewsResult, string>({
			query: (data) => {
				return `all?${API_KEY}&language=en&page=${Math.abs(Number(data))}`
			}
		})
	})
})

export const { useGetNewsQuery } = newsApi