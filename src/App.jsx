import { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import NotPosts from './components/NotPosts/NotPosts.jsx'
import PostsList from './components/PostsList/PostsList.jsx'
import PostsContext from './contexts/PostsProvider.jsx'

import styles from './App.module.css'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const { posts, setPosts } = useContext(PostsContext)

	async function fetchPosts() {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=10'
			)
			const data = await response.json()
			setPosts(data)
			localStorage.setItem('posts', JSON.stringify(data))
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		setIsLoading(true)
		if (localStorage.getItem('posts')) {
			setPosts(JSON.parse(localStorage.getItem('posts')))
			console.log('posts from local storage')
			setIsLoading(false)
		} else {
			setTimeout(fetchPosts, 1000)
		}

		//return () => localStorage.clear()
	}, [])

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Header />
				{isLoading ? (
					<div>Загрузка...</div>
				) : posts.length ? (
					<PostsList />
				) : (
					<NotPosts />
				)}
			</div>
		</div>
	)
}

export default App
