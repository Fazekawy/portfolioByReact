import { CategoryItem } from "./CategoryItem"

export const Category = ({ category }: { category: string[] | undefined }) => {
	return (
		<>

			{category?.map((el: string) => <CategoryItem key={el} title={el} />)}

		</>
	)
}