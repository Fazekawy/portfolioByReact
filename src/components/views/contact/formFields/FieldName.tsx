import { UseFormRegister } from "react-hook-form"

import { requiredValidator } from "../../../../shared/validation/required.validator"

import { Input } from "../../../common/Input"

import { IContactForm } from "../contactForm.type"

export interface IFormField {
	register: UseFormRegister<IContactForm>,
	error?: string
}

export const FieldName = ({ register, error }: IFormField) => {
	return (
		<div className="w-full sm:mr-3 sm:w-1/2">

			<label className="block pb-3 font-body font-medium text-primary dark:text-white"
			>Your Name</label>

			<Input
				id="name"
				register={register("name", { ...requiredValidator, maxLength: 30 })}
				placeholder="What should I call you?"
				isError={!!error} />

			{error && <p className="text-red-600">{error}</p>}

		</div>
	)
}