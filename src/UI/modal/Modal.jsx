import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import { createPortal } from 'react-dom'
import styles from './styles.module.css'

function Modal({ isVisible, children, onClose, overlayClassName, className }) {
	return createPortal(
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={cx(styles.overlay, overlayClassName)}
					onClick={() => onClose()}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.2 } }}
				>
					<motion.div
						className={styles.modalPosition}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.2 } }}
						exit={{ opacity: 0, transition: { duration: 0.2 } }}
					>
						<motion.div className={styles.modalContainer}>
							<div
								className={cx(styles.modal, className)}
								onClick={e => e.stopPropagation()}
							>
								{children}
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	)
}

export default Modal
