import { Sup } from "../../../ui/Sup"
import { AboutText } from "./AboutText"

export const About = () => {
	return (
		<section className="border-b border-grey-lighter py-16 lg:py-20">

			<Sup src="https://atlas.redpixelthemes.com/assets/img/icon-story.png" title={"My Story"} />

			<AboutText />

		</section>
	)
}