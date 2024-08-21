import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, string> = {
	general: "bg-purple-600 text-purple-300",
	science: "bg-red-300 text-red-600",
	sports: "bg-purple-300 text-purple-600",
	business: "bg-green-light text-green",
	health: "bg-red-600 text-red-300",
	entertainment: "bg-yellow-light text-yellow-dark",
	tech: "bg-blue text-blue-light",
	politics: "bg-blue-light text-blue",
	food: "bg-yellow-dark text-yellow-light",
	travel: "bg-green text-green-light"
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {}
})

export const { actions: categoriesActions, reducer: categoriesReducer } = categoriesSlice