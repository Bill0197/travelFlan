import React from 'react'
import { Link } from 'react-router-dom'

export default function Album(props) {
	const { id, title, userId } = props.al

	return (
		<Link to='/albums/photos/1'>
			<div className="album">
				<h1>Each Albums</h1>
			</div>
		</Link>
	)
}
