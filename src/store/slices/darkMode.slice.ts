import { createSlice } from "@reduxjs/toolkit";
import darkModeService from "../../services/darkMode.service";

const initialState: { value: boolean } = {
	value: darkModeService.getIsDarkMode()
}

const darkModeSlice = createSlice({
	name: 'isDarkMode',
	initialState,
	reducers: {
		toggleIsDarkMode: state => {
			state.value = !state.value
		},
		setIsDarkMode(state, { payload }){
			state.value = payload
		}
	}
})

export const { actions: darkModeActions, reducer: darkModeReducer } = darkModeSlice