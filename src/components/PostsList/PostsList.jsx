import { useContext, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostsContext from '../../contexts/PostsProvider'
import Modal from '../../UI/modal/Modal'
import ChangePostForm from '../ChangePostForm/ChangePostForm'
import PostItem from '../PostItem/PostItem'

import styles from './PostsList.module.css'
function NewsList() {
	const [isModalActive, setIsModalActive] = useState(false)
	const [currentPost, setCurrentPost] = useState({})

	const { posts, setPosts } = useContext(PostsContext)

	const onModalOpen = () => {
		setIsModalActive(true)
	}

	const onModalClose = () => {
		setIsModalActive(false)
	}

	const handleChangePost = post => {
		setCurrentPost(post)
		setIsModalActive(true)
	}

	const deletePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
		localStorage.setItem(
			'posts',
			JSON.stringify(posts.filter(p => p.id !== post.id))
		)
	}
	console.log(posts.length)
	return (
		<>
			<ul className={styles.posts}>
				<TransitionGroup>
					{posts.map((post, index) => (
						<CSSTransition key={post.id} timeout={500} classNames='post'>
							<PostItem
								number={index + 1}
								post={post}
								handleChangePost={handleChangePost}
								deletePost={deletePost}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ul>

			<Modal isVisible={isModalActive} onClose={() => setIsModalActive(false)}>
				<ChangePostForm post={currentPost} onClose={onModalClose} />
			</Modal>
		</>
	)
}

export default NewsList
