import { Hero } from "../../common/Hero"
import { ContactForm } from "./ContactForm"

export const Contact = () => {
	return (
		<Hero src="https://atlas.redpixelthemes.com/assets/img/icon-contact.png"
			description={"Got a question or proposal, or just want to say hello? Go ahead. You know what to do."}
			descriptionStyles="pr-2 pt-3 sm:pt-0 text-xl">

			<ContactForm />

		</Hero>
	)
}