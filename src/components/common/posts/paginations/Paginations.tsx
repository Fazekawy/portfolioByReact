import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { PaginationsBtn } from "./PaginationsBtn"

import { usePaginations } from "./usePaginations"

import { IPaginations } from "./paginations.type"

export const Paginations = ({ pagesCount, currentPage, setCurrentPage }: IPaginations) => {

	const pages = usePaginations({pagesCount, currentPage})

	return (
		<div className="flex pt-8 lg:pt-16">

			{currentPage !== 1 && <PaginationsBtn
				isActive={false}
				to={`?page=${currentPage - 1}`}
				onClick={() => setCurrentPage(String(currentPage - 1))}
				customStyles="group mr-3 flex gap-1 items-center">
				<FaArrowLeft />
				Prev
			</PaginationsBtn>}

			{pages.map(el =>
				<PaginationsBtn
					key={el}
					isActive={el === currentPage}
					to={`?page=${el}`}
					onClick={el !== currentPage ? () => setCurrentPage(String(el)) : undefined}
					customStyles={el !== currentPage - 1 || el === pagesCount - 1 ? "first:ml-0 ml-3" : undefined}>
					{el}
				</PaginationsBtn>
			)
			}

			{currentPage !== pagesCount && <PaginationsBtn
				isActive={false}
				to={`?page=${currentPage + 1}`}
				onClick={() => setCurrentPage(String(currentPage + 1))}
				customStyles="group ml-3 flex gap-1 items-center">
				Next
				<FaArrowRight />
			</PaginationsBtn>}

		</div>
	)
}