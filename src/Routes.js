import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './store/auth-context'
import Home from './components/Home'
import Albums from './components/Albums/Albums'
import Login from './components/Login'
import AlbumPhotos from './components/Albums/AlbumPhotos'

export default function Routes() {
	const context = useContext(AuthContext)

	if (context.isLoggedIn) {
		return (
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/albums" exact>
					<Albums />
				</Route>

				<Route path="/albums/photos/:id" exact>
					<AlbumPhotos />
				</Route>

				<Redirect to="/" />
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/">
				<Login />
			</Route>

			<Redirect to="/" />
		</Switch>
	)
}
