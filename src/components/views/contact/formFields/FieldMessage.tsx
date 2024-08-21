import { UseFormRegister } from "react-hook-form"

import { Input } from "../../../common/Input"

import { IContactForm } from "../contactForm.type"

import { requiredValidator } from "../../../../shared/validation/required.validator"

export interface IFormField {
	register: UseFormRegister<IContactForm>,
	error?: string
}

export const FieldMessage = ({ register, error }: IFormField) => {
	return (
		<div className="w-full pt-6 sm:pt-10">

				<label
					className="block pb-3 font-body font-medium text-primary dark:text-white"
				>Message</label>

				<Input
					id="message"
					register={register("message", { ...requiredValidator, maxLength: 300, minLength: 5 })}
					placeholder="Tell me all the things that you think I need to hear…"
					isError={!!error}
					isTextarea={true}/>

				{error && <p className="text-red-600">{error}</p>}

			</div>
	)
}