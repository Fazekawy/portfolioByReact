import { PartialBy } from "../../../../types/partialBy.type"
import { IPaginations } from "./paginations.type"

export const usePaginations = ({pagesCount, currentPage}: PartialBy<IPaginations, "setCurrentPage">) => {
	let pages: number[] = []

	for (let i = 1; i <= pagesCount; i++) {
		switch (currentPage) {
			case 1: {
				pages = [1, 2, 3]
				break
			}
			case pagesCount: {
				pages = [pagesCount - 2, pagesCount - 1, pagesCount]
				break
			}
			case i: {
				pages = [i - 1, i, i + 1]
				break
			}
			default: continue
		}
		break
	}

	return pages
}