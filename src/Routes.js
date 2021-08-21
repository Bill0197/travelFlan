import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './store/auth-context'

export default function Routes() {
	const context = useContext(AuthContext)

	console.log(context, 'ctnx')

	return (
		<div>
			<h1>Routes</h1>
		</div>
	)
}
