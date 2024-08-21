import { useTypiedSelector } from "../../../hooks/useTypiedSelector"


export const CategoryItem = ({ title }: { title: string }) => {

	const categories = useTypiedSelector(state => state.categories)

	return (
		<span
			className={`mb-4 first:ml-0 ml-1 inline-block rounded-full px-2 py-1 font-body text-sm ${categories[title]}`}>
			{title}
		</span>
	)
}