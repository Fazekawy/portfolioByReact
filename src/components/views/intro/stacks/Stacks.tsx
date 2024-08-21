import { useTypiedSelector } from "../../../../hooks/useTypiedSelector"
import { Sup } from "../../../ui/Sup"
import { StackItem } from "./StacksItem"

export const Stacks = () => {

	const stacks = useTypiedSelector(state => state.stack)

	return (
		<section className="pb-16 lg:pb-20">

				<Sup src="https://atlas.redpixelthemes.com/assets/img/icon-project.png" title="My Stack"/>

				{stacks.map(el => <StackItem key={el.title} {...el} />)}

		</section>
	)
}