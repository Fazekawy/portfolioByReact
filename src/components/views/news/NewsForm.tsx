import { SubmitHandler, useForm } from "react-hook-form"
import { emailValidator } from "../../../shared/validation/email.validator"
import { Input } from "../../common/Input"
import { Button } from "../../ui/Button"

interface IFormData {
	email: string
}

export const NewsForm = () => {

	const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>({
		mode: "onChange"
	})

	const onSubmit: SubmitHandler<IFormData> = (data) => {
		reset()
		alert(data)
	}

	return (
		<form className="flex flex-col flex-wrap py-12 sm:flex-row" onSubmit={handleSubmit(onSubmit)}>

			<Input
				id="subscribe"
				placeholder="Drop that email here…"
				register={register("email", emailValidator)}
				isError={!!errors.email}
				customStyles="sm:w-1/2"/>

			<Button customStyles="mt-5 sm:mt-0">
				Subscribe
			</Button>

			{errors.email && <p className="w-full text-red-600">{errors.email.message}</p>}

		</form>
	)
}