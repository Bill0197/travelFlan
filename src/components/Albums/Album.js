import React from 'react'
import { Link } from 'react-router-dom'

export default function Album(props) {
	const { id, title } = props.al

	return (
		<Link to={`/albums/${id}/photos`}>
			<div className="album">
				<h1>{title}</h1>
			</div>
		</Link>
	)
}
