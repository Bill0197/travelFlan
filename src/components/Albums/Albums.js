import React, { useEffect, useState } from 'react'
import { getAlbums } from '../../services/httpService'
import MainHeader from '../MainHeader'
import Spinner from '../UI/Spinner'
import Album from './Album'
import { useHistory } from 'react-router'

export default function Albums() {
	const [albums, setAlbums] = useState([])
	const [loading, setLoading] = useState(false)
	const history = useHistory()

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

	const goBack = () => {
		history.goBack()
	}

	return (
		<>
			<div>
				<h1>Albums page!</h1>
				<MainHeader albums={true} />

				<button className="backButton" onClick={goBack}>
					back to home
				</button>

				{loading ? (
					<div style={{ marginTop: '30vh' }}>
						<Spinner size="large" />
					</div>
				) : (
					<>
						<div className="albums" style={{ marginTop: '-1px' }}>
							{albums.map(al => (
								<Album al={al} />
							))}
						</div>
					</>
				)}
			</div>
		</>
	)
}
