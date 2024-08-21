import { UseFormRegisterReturn } from "react-hook-form"

interface IInput {
	isError: boolean,
	placeholder: string,
	id: string,
	register: UseFormRegisterReturn,
	isTextarea?: boolean,
	customStyles?: string
}

export const Input = ({ isError, isTextarea, register, customStyles, ...settings }: IInput) => {

	const styles = `w-full border border-primary bg-grey-lightest px-5 py-4
		font-body font-light text-primary placeholder-primary transition-colors
		focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary
		${isError && "focus:!ring-red-600 !border-red-600"} ${customStyles}`

	if(isTextarea) return (
		<textarea
		cols={30} rows={9}
		{...settings}
		{...register}
		className={styles}/>
	)

	return (
		<input
			type="text"
			{...settings}
			{...register}
			className={styles} />
	)
}