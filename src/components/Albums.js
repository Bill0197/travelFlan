import React from 'react'
import MainHeader from './MainHeader'

export default function Albums() {
	return (
		<div className="home">
			<h1>Albums page!</h1>

			<MainHeader albums={true} />
		</div>
	)
}
