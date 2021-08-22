import React, {
	useState,
	useEffect,
	useReducer,
	useRef,
	useContext,
} from 'react'
import Input from './UI/Input/Input'
import AuthContext from '../store/auth-context'
import MainHeader from './MainHeader'
import { passwordReducer } from '../reducers/passwordReducer'
import { emailReducer } from '../reducers/emailReducer'

const Login = () => {
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
			<MainHeader />
			<div>
				<div className="form">
					<form onSubmit={submitHandler}>
						<Input
							ref={emailInputRef}
							id="email"
							label="E-Mail"
							type="email"
							isValid={emailIsValid}
							value={emailState.value}
							onChange={emailChangeHandler}
							onBlur={validateEmailHandler}
							required={true}
							autoComplete="email"
						/>
						<p>
							{!emailState.isValid &&
								emailState.value !== '' &&
								'Email is not Valid'}
						</p>

						<Input
							required={true}
							ref={passwordInputRef}
							minLength="8"
							id="password"
							label="Password"
							type="password"
							isValid={passwordIsValid}
							value={passwordState.value}
							onChange={passwordChangeHandler}
							onBlur={validatePasswordHandler}
							autoComplete="password"
						/>

						<p>
							{!passwordState.isValid &&
								passwordState.value !== '' &&
								'Password must be more than 8 characters'}
						</p>
						<button type="submit" className="kb-btn kb-btn-4">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
