import { useEffect } from "react"
import { useTypiedSelector } from "../../../../../hooks/useTypiedSelector"
import { useActions } from "../../../../../hooks/useActions"

export const useDarkMode = () => {

	const { value: isDarkMode } = useTypiedSelector(state => state.isDarkMode)

	const { toggleIsDarkMode } = useActions()

	useEffect(() => {
		isDarkMode ? document.querySelector('body')?.classList.add('dark')
			: document.querySelector('body')?.classList.remove('dark')

		localStorage.setItem("isDarkMode", String(isDarkMode))

	}, [ isDarkMode ])



	return {
		isDarkMode,
		toggleIsDarkMode
	}

}