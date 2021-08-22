import React, { useEffect, useState } from 'react'
import { getAlbums } from '../../services/httpService'
import MainHeader from '../MainHeader'
import Spinner from '../UI/Spinner'
import Album from './Album'
import { useHistory } from 'react-router'
import CreateModal from './CreateModal'

export default function Albums() {
	const [albums, setAlbums] = useState([])
	const [loading, setLoading] = useState(false)
	const history = useHistory()
	const [paginate, setPaginate] = useState(0)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		async function getAlbumsData() {
			setLoading(true)
			try {
				const res = await getAlbums(paginate)
				setAlbums(res?.data)

				setLoading(false)
			} catch (err) {
				console.log(err)
			}
		}

		getAlbumsData()
	}, [paginate])

	const goBack = () => {
		history.goBack()
	}

	const prev = () => {
		if (paginate === 0) return

		setPaginate(paginate - 1)
	}

	const next = () => {
		if (albums.length < 5) return

		setPaginate(paginate + 1)
	}

	return (
		<>
			<div style={{ width: '90vw', margin: 'auto' }}>
				<br />
				<br />
				<br />
				<br />
				<br />

				<MainHeader albums={true} />

				<button className="kb-btn kb-btn-1" onClick={goBack}>
					back to home
				</button>

				{loading ? (
					<div style={{ marginTop: '30vh' }}>
						<Spinner size="large" />
					</div>
				) : (
					<>
						<CreateModal setOpen={setOpen} open={open} type="create" />

						<div id="albumsContainer">
							<div className="albums" style={{ margin: '-1px auto 12px auto' }}>
								{albums.map(al => (
									<Album al={al} />
								))}
							</div>
							<div id="pagination">
								<button
									onClick={() => setOpen(true)}
									className="kb-btn kb-btn-3"
								>
									New Album
								</button>

								<button
									onClick={prev}
									disabled={paginate === 0}
									className="kb-btn kb-btn-1"
								>
									Previous
								</button>
								<button
									onClick={next}
									disabled={albums.length < 5}
									className="kb-btn kb-btn-3"
								>
									Next
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}
