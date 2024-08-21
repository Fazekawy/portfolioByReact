import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { darkModeReducer } from "./slices/darkMode.slice";
import { newsApi } from "./api/news/news.api";
import { categoriesReducer } from "./slices/categories.slice";
import { pagesReducer } from "./slices/pages.slice";
import { stackReducer } from "./slices/stack.slice";

const reducer = combineReducers({
	isDarkMode: darkModeReducer,
	categories: categoriesReducer,
	pages: pagesReducer,
	stack: stackReducer,
	[newsApi.reducerPath]: newsApi.reducer,
})

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(newsApi.middleware),
})

export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']