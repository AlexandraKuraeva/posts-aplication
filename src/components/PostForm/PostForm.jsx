import { useContext, useState } from 'react'

import Button from '../../UI/button/MyButton'
import Input from '../../UI/input/MyInput'

import PostsContext from '../../contexts/PostsProvider'

import './PostForm.scss'

export const PostFormType = {
	ADD: 'add',
	CHANGE: 'change',
	DELETE: 'delete',
}
function PostForm({ type, title, post, onClose }) {
	const [titlePost, setTitlePost] = useState(
		type === PostFormType.CHANGE ? post.title : ''
	)
	const [bodyPost, setBodyPost] = useState(
		type === PostFormType.CHANGE ? post.body : ''
	)

	const { posts, setPosts } = useContext(PostsContext)
	const [error, setError] = useState(false)

	function hasError(post) {
		if (post.title.trim() === '' || post.body.trim() === '') {
			setError(true)
			return true
		} else {
			return false
		}
	}
	const addNewPost = post => {
		const newPost = {
			title: titlePost,
			body: bodyPost,
			id: Date.now(),
		}

		if (hasError(newPost)) {
			return
		} else {
			setPosts([newPost, ...posts])

			localStorage.setItem('posts', JSON.stringify([newPost, ...posts]))
			onClose()
		}
	}

	const saveChangePost = post => {
		const changePost = {
			title: titlePost,
			body: bodyPost,
			id: post.id,
		}

		if (hasError(changePost)) {
			return
		} else {
			setPosts(posts.map(p => (p.id === post.id ? changePost : p)))

			localStorage.setItem(
				'posts',
				JSON.stringify(posts.map(p => (p.id === post.id ? changePost : p)))
			)

			onClose()
		}
	}
	return (
		<div className='form'>
			<h2 className='form__title'>{title}</h2>

			<div className='form__inputs'>
				<label className='form__label'>Заголовок поста</label>
				<Input
					className='myInput'
					value={titlePost}
					onChange={setTitlePost}
					autoFocus
				/>
				<label className='form__label'>Текст поста</label>
				<Input className='myInput' value={bodyPost} onChange={setBodyPost} />
			</div>

			{type === PostFormType.CHANGE && (
				<Button
					onClick={() =>
						saveChangePost({ title: titlePost, body: bodyPost, ...post })
					}
				>
					Сохранить изменения
				</Button>
			)}

			{type === PostFormType.ADD && (
				<Button
					onClick={() =>
						addNewPost({ title: titlePost, body: bodyPost, ...post })
					}
				>
					Добавить пост
				</Button>
			)}
			{error && (
				<div className='form__error'> Пожалуйста, заполните все поля</div>
			)}
		</div>
	)
}

export default PostForm
