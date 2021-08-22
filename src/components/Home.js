import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'
import MainHeader from './MainHeader'

const Home = () => {
	const ctx = useContext(AuthContext)
	return (
		<div className="home">
			<h1>Welcome back to Travel Flan!</h1>
			<MainHeader home={true} />
			<button className="kb-btn kb-btn-1" onClick={ctx.onLogout}>
				LogOut
			</button>
		</div>
	)
}

export default Home
