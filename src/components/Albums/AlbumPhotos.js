import React, { useEffect, useState } from 'react'
import MainHeader from '../MainHeader'
import Spinner from '../UI/Spinner'
import { useParams } from 'react-router-dom'
import { getAlbumPhotos } from '../../services/httpService'

export default function AlbumPhotos() {
	const [loading, setLoading] = useState(false)
	const [photos, setPhotos] = useState([])
	const { id } = useParams()

	useEffect(() => {
		async function getAlbumData() {
			setLoading(true)
			try {
				const res = await getAlbumPhotos(id)
				setPhotos(res?.data.slice(0, 1))

				setLoading(false)
			} catch (err) {
				console.log(err)
			}
		}

		getAlbumData()
	}, [id])

	return (
		<div>
			<MainHeader albums={true} />
			{loading ? (
				<div style={{ marginTop: '30vh' }}>
					<Spinner size="large" />
				</div>
			) : (
				<div className="albums" style={{ gridTemplateColumns: 'auto' }}>
					<h1>{photos[0]?.title}</h1>
					<div>
						<img
							src={photos[0]?.url}
							alt="Album Pic"
							className="albumPicture"
						/>
					</div>
				</div>
			)}
		</div>
	)
}
