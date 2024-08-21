import { ReactElement } from "react";

export interface IUIProps {
	children: string | (ReactElement | string | JSX.Element)[] | ReactElement,
	customStyles?: string
}