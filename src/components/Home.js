import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'

const Home = props => {
	const ctx = useContext(AuthContext)
	return (
		<div className="home">
			<h1>Welcome back!</h1>
			<button onClick={ctx.onLogout}>LogOut</button>
		</div>
	)
}

export default Home
