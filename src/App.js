import React, { useContext } from 'react'
import Home from './components/Home'
import AuthContext from './store/auth-context'

function App() {
	const context = useContext(AuthContext)
	return (
		<React.Fragment>
			<MainHeader />
			<main>
				{context.isLoggedIn && <Home />}
			</main>
		</React.Fragment>
	)
}

export default App
