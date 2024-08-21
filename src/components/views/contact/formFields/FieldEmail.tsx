import { UseFormRegister } from "react-hook-form"

import { Input } from "../../../common/Input"

import { IContactForm } from "../contactForm.type"

import { emailValidator } from "../../../../shared/validation/email.validator"

export interface IFormField {
	register: UseFormRegister<IContactForm>,
	error?: string
}

export const FieldEmail = ({ register, error }: IFormField) => {
	return (
		<div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">

			<label className="block pb-3 font-body font-medium text-primary dark:text-white"
			>Email Address</label>

			<Input
				id="email"
				register={register("email", emailValidator)}
				placeholder="Drop that email here…"
				isError={!!error}
			/>

			{error && <p className="text-red-600">{error}</p>}

		</div>
	)
}