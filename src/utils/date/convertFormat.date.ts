const month = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"]

export const convertFormatDate = (value: string) => {
	const date = new Date(value)

	/* July 19, 2020 */

	return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}