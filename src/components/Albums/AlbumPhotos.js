import React, { useEffect, useState } from 'react'
import MainHeader from '../MainHeader'
import Spinner from '../UI/Spinner'
import { useParams, useHistory } from 'react-router-dom'
import { getAlbumPhotos } from '../../services/httpService'

export default function AlbumPhotos() {
	const [loading, setLoading] = useState(false)
	const [photos, setPhotos] = useState([])
	const { id } = useParams()
	const history = useHistory()

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

	const goBack = () => {
		history.goBack()
	}

	return (
		<div>
			<MainHeader albums={true} />
			{loading ? (
				<div style={{ marginTop: '50vh' }}>
					<Spinner size="large" />
				</div>
			) : (
				<div className="albums" style={{ gridTemplateColumns: 'auto' }}>
					<button className="backButton kb-btn kb-btn-4" onClick={goBack}>
						back to albums
					</button>

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
