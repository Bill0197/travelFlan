import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'

const Navigation = () => {
	const context = useContext(AuthContext)

	return (
		<nav className="nav">
			<ul>
				{context.isLoggedIn && (
					<li>
						<a href="/albums">Albums</a>
					</li>
				)}
				{context.isLoggedIn && (
					<li>
						<a href="/admin">Admin</a>
					</li>
				)}
				{context.isLoggedIn && (
					<li>
						<button onClick={context.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default Navigation
