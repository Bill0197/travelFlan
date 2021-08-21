import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './store/auth-context'
import Home from './components/Home'
import Login from './components/Login'

export default function Routes() {
	const context = useContext(AuthContext)

	console.log(context, 'ctnx')

	return (
		<div>
			{!context.isLoggedIn && <Login />}
			{context.isLoggedIn && <Home />}
		</div>
	)
}
