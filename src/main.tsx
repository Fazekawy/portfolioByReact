import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import './index.css'

import { store } from './store/store.ts'
import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/Layout.tsx'
import { Intro } from './components/views/intro/Intro.tsx'
import { News } from './components/views/news/News.tsx'
import { Uses } from './components/views/uses/Uses.tsx'
import { Contact } from './components/views/contact/Contact.tsx'
import { Post } from './components/views/post/Post.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Intro />
			},
			{
				path: "/news",
				element: <News />,
			},
			{
				path: "news/:slug",
				element: <Post />
			},
			{
				path: "/uses",
				element: <Uses />
			},
			{
				path: "/contact",
				element: <Contact />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
)
