import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'

const Home = () => {
	return (
		<div className="home">
			<h1>Welcome back to Travel Flan!</h1>
			<MainHeader home={true} />

			<Link to="/albums">
				<button className="kb-btn kb-btn-1">Explore</button>
			</Link>
		</div>
	)
}

export default Home
