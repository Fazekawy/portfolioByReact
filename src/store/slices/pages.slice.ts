import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = ["intro", "news", "uses", "contact"]

export const { actions: pagesActions, reducer: pagesReducer } = createSlice({
	name: 'pages',
	initialState,
	reducers: {}
})