import React from 'react'

import './MyInput.scss'

function MyInput(props) {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,

		...otherProps
	} = props

	const onChangeHandler = e => {
		onChange?.(e.target.value)
	}

	return (
		<input
			type={type}
			value={value}
			onChange={onChangeHandler}
			{...otherProps}
			className={className}
		></input>
	)
}

export default MyInput
