import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { rootAction } from "../const/rootAction.const"

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => {
		return bindActionCreators(rootAction, dispatch)
	}, [ dispatch ])
}