import MyButton from '../../UI/button/MyButton'
import styles from './PostItem.module.css'

function PostItem({ post, number, handleChangePost, deletePost }) {
	return (
		<div className={styles.post}>
			<strong className={styles.number}>{number}.</strong>
			<h3 className={styles.title}>{post.title}</h3>
			<p className={styles.text}>{post.body}</p>
			<div className={styles.btns}>
				<MyButton onClick={() => handleChangePost(post)}>
					Редактировать
				</MyButton>
				<MyButton onClick={() => deletePost(post)}>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem
