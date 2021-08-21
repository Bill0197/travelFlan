import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './store/auth-context'
import Home from './components/Home'
import Albums from './components/Albums'
import Login from './components/Login'

export default function Routes() {
	const context = useContext(AuthContext)

	if (context.isLoggedIn) {
		return (
			<Switch>
				<Route path="/">
					<Home />
				</Route>

				<Route path="/albums" exact>
					<Albums />
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
