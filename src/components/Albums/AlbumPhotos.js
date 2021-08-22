import React, { useEffect, useState } from 'react'
import MainHeader from '../MainHeader'
import Spinner from '../UI/Spinner'
import { useParams, useHistory } from 'react-router-dom'
import { getAlbumPhotos, updateAlbum } from '../../services/httpService'
import CreateModal from './CreateModal'

export default function AlbumPhotos() {
	const [loading, setLoading] = useState(false)
	const [photos, setPhotos] = useState([])
	const { id } = useParams()
	const history = useHistory()
	const [open, setOpen] = useState(false)
	const [title, setTitle] = useState('')

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

	const updateTitle = async (title, e) => {
		e.preventDefault()

		try {
			let res = await updateAlbum({ id, title })

			if (res?.title) {
				setTitle(title)
				alert('Updated Your Title!')

				return setOpen(false)
			}
			alert('Something Went Wrong!')

			return setOpen(false)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<MainHeader albums={true} />
			{loading ? (
				<div style={{ marginTop: '50vh' }}>
					<Spinner size="large" />
				</div>
			) : (
				<div
					className="albums"
					style={{ gridTemplateColumns: 'auto', marginTop: '5vh' }}
				>
					<CreateModal
						setOpen={setOpen}
						open={open}
						type="update"
						update={updateTitle}
					/>
					<button className="backButton kb-btn kb-btn-4" onClick={goBack}>
						&lt; to albums
					</button>

					<h1> {title || photos[0]?.title}</h1>
					<div>
						<img
							src={photos[0]?.url}
							alt="Album Pic"
							className="albumPicture"
						/>
					</div>
					<button
						className="backButton kb-btn kb-btn-4"
						onClick={() => setOpen(true)}
					>
						edit title
					</button>
				</div>
			)}
		</div>
	)
}
