import React from 'react'
import { useHistory } from 'react-router-dom'
import { deleteAlbumData } from '../../services/httpService'

export default function Album(props) {
	const { id, title } = props.al
	const history = useHistory()

	const deleteAlbum = async e => {
		e.preventDefault()

		try {
			let res = await deleteAlbumData(id)

			if (res) {
				const { setAlbums, albumsLength, getAlbumsDataWithoutLoading } = props

				setAlbums(prev => {
					return prev.filter(al => al.id !== id)
				})
				alert('Deleted Album!')

				if (albumsLength === 1) {
					return getAlbumsDataWithoutLoading(2)
				}
			} else {
				alert('Something Went Wrong!')
			}
		} catch (err) {
			console.log(err)
		}
	}

	const redirectToPhoto = e => {
		if (e.target.tagName !== 'BUTTON') history.push(`/albums/${id}/photos`)
	}

	return (
		<div className="album" onClick={redirectToPhoto}>
			<h2>{title}</h2>
			<button className="kb-btn kb-btn-1" onClick={e => deleteAlbum(e)}>
				delete
			</button>
		</div>
	)
}
