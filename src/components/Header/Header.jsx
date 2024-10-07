import { useState } from 'react'
import MyButton from '../../UI/button/MyButton'
import Modal from '../../UI/modal/Modal'
import AddPostForm from '../AddPostForm/AddPostForm'
import styles from './Header.module.css'

function Header() {
	const [isModalActive, setIsModalActive] = useState(false)

	const onModalClose = () => {
		setIsModalActive(false)
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>Posts</h1>
					<MyButton onClick={() => setIsModalActive(true)}>
						Создать пост
					</MyButton>
				</div>
			</header>

			<Modal isVisible={isModalActive} onClose={onModalClose}>
				<AddPostForm onClose={onModalClose} />
			</Modal>
		</>
	)
}

export default Header
