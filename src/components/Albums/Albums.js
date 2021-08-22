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

	const create = () => {
		console.log('create')
	}

	return (
		<>
			<div style={{ width: '90vw', margin: 'auto' }}>
				<h1>Albums page!</h1>
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
						<div id="modal" style={{ display: open ? 'block' : 'none' }}>
							<div className="sign-up-modal">
								<div
									id="close-modal-button"
									onClick={() => setOpen(false)}
								></div>

								<div className="logo-container">
									<svg className="logo" width="94.4px" height="56px">
										<g>
											<polygon points="49.3,56 49.3,0 0,28 	" />
											<path d="M53.7,3.6v46.3l40.7-23.2L53.7,3.6z M57.7,10.6l28.4,16.2L57.7,42.9V10.6z" />
										</g>
									</svg>
								</div>

								<form className="details">
									<div className="input-container">
										<input
											className="col-sm-12 email-input with-placeholder"
											id="email"
											type="email"
											placeholder="Email"
										/>
									</div>
									<div className="input-container">
										<input
											className="col-sm-5 username-input with-placeholder"
											id="username"
											type="text"
											placeholder="Username"
											maxlength="8"
										/>
									</div>
									<div className="input-container">
										<input
											className="col-sm-5 col-sm-push-2 password-input with-placeholder"
											id="password"
											type="password"
											placeholder="Password"
										/>
									</div>

									<input id="sign-up-button" type="submit" value="Create" />
								</form>
							</div>
						</div>
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
