import { HiMiniMoon } from "react-icons/hi2"
import { MdWbSunny } from "react-icons/md"
import { useDarkMode } from "./useDarkMode"
import { memo } from "react"

export const SwitchTheme = memo(({ customTheme }: { customTheme?: string }) => {

	const { isDarkMode, toggleIsDarkMode } = useDarkMode()

	return (
		<span className={`${customTheme} cursor-pointer text-3xl text-primary dark:text-white`}
			onClick={() => toggleIsDarkMode()}>

			{isDarkMode ? <MdWbSunny /> : <HiMiniMoon />}

		</span>
	)
})