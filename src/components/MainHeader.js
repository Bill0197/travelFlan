import React from 'react'
import Navigation from './Navigation'

const MainHeader = props => {
	return (
		<header className="main-header">
			<h1>Travel Flan</h1>
			<Navigation {...props} />
		</header>
	)
}

export default MainHeader
