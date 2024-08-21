import { useForm } from "react-hook-form"
import { IContactForm } from "./contactForm.type"

export const useContactForm = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactForm>({
		mode: "onBlur"
	})

	const onSubmit = handleSubmit((data) => {
		console.log(data)
		reset()
	})

	return {
		register,
		errors,
		onSubmit
	}
}