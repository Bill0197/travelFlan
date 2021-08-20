import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
})

export const AuthContextProvider = props => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const loggedInData = localStorage.getItem('isLoggedIn')

		if (loggedInData === 'true') {
			setIsLoggedIn(true)
		}
	}, [])

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', 'true')
		setIsLoggedIn(true)
	}
  
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
