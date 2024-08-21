import { FieldName } from "./formFields/FieldName"
import { FieldEmail } from "./formFields/FieldEmail"
import { FieldMessage } from "./formFields/FieldMessage"
import { Button } from "../../ui/Button"

import { useContactForm } from "./useContactForm"

export const ContactForm = () => {

	const { register, errors, onSubmit } = useContactForm()

	return (
		<form className="pt-16" onSubmit={onSubmit}>

			<div className="flex flex-col sm:flex-row">

				<FieldName register={register} error={errors.name?.message} />

				<FieldEmail register={register} error={errors.email?.message} />

			</div>

			<FieldMessage register={register} error={errors.message?.message} />

			<Button
				customStyles="mt-10 mb-12 block sm:inline-block">
				Send Message
			</Button>

		</form>
	)
}