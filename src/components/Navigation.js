import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'
import { Link } from 'react-router-dom'

const Navigation = props => {
	const { home, albums } = props

	const context = useContext(AuthContext)

	return (
		<nav className="nav">
			<ul>
				{context.isLoggedIn && (
					<li>
						{!albums && <Link to="/albums">Albums</Link>}
						{!home && <Link to="/">Home</Link>}
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
