class DarkModeService {

	getIsDarkMode = (): boolean => {
		const isDarkMode = localStorage?.getItem("isDarkMode")

		if (!!isDarkMode) return isDarkMode === "true"

		const userMedia = window.matchMedia("(prefers-color-scheme: light)")
		if (userMedia.matches) return false

		return true
	}
}

export default new DarkModeService