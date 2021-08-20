import React, { useRef, useImperativeHandle } from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef()

	const activate = () => {
		inputRef.current.focus()
	}

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		}
	})

	const {
		type,
		autocomplete,
		id,
		value,
		onBlur,
		required,
		minLength,
		onChange,
	} = props

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ''
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputRef}
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				required={required}
				minLength={minLength}
				autocomplete={autocomplete}
			/>
		</div>
	)
})

export default Input
