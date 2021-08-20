import React, {
	useState,
	useEffect,
	useReducer,
	useRef,
	useContext,
} from 'react'
import Input from './UI/Input/Input'
import AuthContext from '../store/auth-context'

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') }
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') }
	}
	return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 }
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 }
	}
	return { value: '', isValid: false }
}

const Login = props => {
	const ctx = useContext(AuthContext)
	const [formIsValid, setFormIsValid] = useState(false)

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	})
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	})
	const { isValid: emailIsValid } = emailState
	const { isValid: passwordIsValid } = passwordState

	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	useEffect(() => {
		const time = setTimeout(() => {
			setFormIsValid(emailState.isValid && passwordState.isValid)
		}, 500)
		return () => {
			clearTimeout(time)
		}
	}, [emailIsValid, passwordIsValid])

	const emailChangeHandler = event => {
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
	}

	const passwordChangeHandler = event => {
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
	}

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' })
	}

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' })
	}

	const submitHandler = event => {
		event.preventDefault()

		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value)
		} else if (!emailIsValid) {
			emailInputRef.current.focus()
		} else {
			passwordInputRef.current.focus()
		}
	}

	return (
		<div className="login">
			<div class="login-page">
				<div class="form">
					<form class="login-form" onSubmit={submitHandler}>
						<Input
							ref={emailInputRef}
							id="email"
							label="E-Mail"
							type="email"
							isValid={emailIsValid}
							value={emailState.value}
							onChange={emailChangeHandler}
							onBlur={validateEmailHandler}
							placeholder="Your Email"
						/>
						<Input
							placeholder="Your Email"
							ref={passwordInputRef}
							id="password"
							label="Password"
							type="password"
							isValid={passwordIsValid}
							value={passwordState.value}
							onChange={passwordChangeHandler}
							onBlur={validatePasswordHandler}
						/>
						<button type="submit" className="btn">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
