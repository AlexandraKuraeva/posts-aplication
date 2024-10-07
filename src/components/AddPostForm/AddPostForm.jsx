import React from 'react'
import PostForm, { PostFormType } from '../PostForm/PostForm'

function AddPostForm({ onClose }) {
	return (
		<div>
			{' '}
			<PostForm
				type={PostFormType.ADD}
				title='Добавить пост'
				onClose={onClose}
			/>
		</div>
	)
}

export default AddPostForm
