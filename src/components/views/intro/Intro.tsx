import { Hero } from "../../common/Hero"
import { Button } from "../../ui/Button"
import { About } from "./about/About"
import { News } from "./news/News"
import { Stacks } from "./stacks/Stacks"

export const Intro = () => {
	return (
		<main className="">

			<Hero
				src="https://cdn0.youla.io/files/images/360_360/5f/ad/5fad65d82077e0043069d78a-1.jpg"
				description="A front end developer"
				descriptionStyles="text-xl">
				<a href="/">
					<Button
						onClick={() => alert("hi")}
						customStyles="mt-12 block sm:inline-block">
						Say Hello!
					</Button>
				</a>
			</Hero>

			<About />

			<News />

			<Stacks />

		</main>
	)
}