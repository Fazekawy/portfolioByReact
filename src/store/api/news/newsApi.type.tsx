export interface IData {
	uuid: string,
	title: string,
	description: string,
	keywords: string,
	snippet: string,
	url: string,
	image_url: string,
	language: string,
	published_at: string,
	source: string,
	categories: string[],
	relevance_score: null | number
}

interface IMeta {
	found: number,
	returned: number,
	limit: number,
	page: number
}

export interface IError {
	code: string,
	message: string
}

export interface INewsResult {
	error?: IError,
	meta?: IMeta,
	data?: IData[]
}

