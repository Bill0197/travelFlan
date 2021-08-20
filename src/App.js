import React, { useContext } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import AuthContext from './store/auth-context'

function App() {
	const context = useContext(AuthContext)
	return (
		<React.Fragment>
			<main>
				{!context.isLoggedIn && <Login />}
				{context.isLoggedIn && <Home />}
			</main>
		</React.Fragment>
	)
}

export default App
