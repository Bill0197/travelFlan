import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const MainHeader = props => {
	return (
		<header className="main-header">
			<Link to="/">
				<h1>Travel Flan</h1>
			</Link>
			<Navigation {...props} />
		</header>
	)
}

export default MainHeader
