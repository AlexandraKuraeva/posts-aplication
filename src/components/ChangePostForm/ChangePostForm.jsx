import PostForm, { PostFormType } from '../PostForm/PostForm'

function ChangePostForm({ post, onClose }) {
	return (
		<div>
			<PostForm
				type={PostFormType.CHANGE}
				title='Изменить пост'
				post={post}
				onClose={onClose}
			/>
		</div>
	)
}

export default ChangePostForm
