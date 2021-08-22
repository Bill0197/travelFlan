import React, { useEffect, useState } from 'react'
import { getAlbums } from '../../services/httpService'
import MainHeader from '../MainHeader'
import Spinner from '../UI/Spinner'
import Album from './Album'

export default function Albums() {
	const [albums, setAlbums] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function getAlbumsData() {
			setLoading(true)
			try {
				const res = await getAlbums()
				setAlbums(res?.data)

				setLoading(false)
			} catch (err) {
				console.log(err)
			}
		}

		getAlbumsData()
	}, [])

	return (
		<>
			<div>
				<h1>Albums page!</h1>
				<MainHeader albums={true} />

				{loading ? (
					<Spinner size="large" />
				) : (
					<div className="albums">
						{albums.map(al => (
							<Album al={al} />
						))}
					</div>
				)}
			</div>
		</>
	)
}
