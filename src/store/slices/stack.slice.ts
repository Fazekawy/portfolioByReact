import { createSlice } from "@reduxjs/toolkit";
import { IStackEl } from "../../types/stack.type";

const initialState: IStackEl[] = [
	{
		title: "HTML + CSS + JS",
		description: "The three main languages used for web development",
		link: "https://en.wikipedia.org/wiki/Front-end_web_development"
	},
	{
		title: "React",
		description: "The open-source JavaScript library for building front end user interfaces",
		link: "https://react.dev/"
	},
	{
		title: "TypeScript",
		description: "A free and open-source high-level programming language",
		link: "https://www.typescriptlang.org/"
	},
	{
		title: "Tailwind",
		description: "The utility-based CSS framework used for building websites quickly",
		link: "https://tailwindcss.com/"
	},
	{
		title: "Sass/Scss",
		description: "The preprocessor scripting language into CSS",
		link: "https://sass-lang.com/"
	},
	{
		title: "Other",
		description: "Vite, React router DOM, react hook form, axios, redux, redux/toolkit, RTK query, Zustand, Tanstack query, json server, react and lucide icons",
		link: "https://vitejs.dev/"
	}
]

export const { actions: stackActions, reducer: stackReducer } = createSlice({
	name: 'stack',
	initialState,
	reducers: {}
})