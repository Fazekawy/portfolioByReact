import { categoriesActions } from "../store/slices/categories.slice";
import { darkModeActions } from "../store/slices/darkMode.slice";
import { pagesActions } from "../store/slices/pages.slice";
import { stackActions } from "../store/slices/stack.slice";

export const rootAction = {
	...darkModeActions,
	...categoriesActions,
	...pagesActions,
	...stackActions
}