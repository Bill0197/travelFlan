import React, { useState } from 'react'
import { createAlbum } from '../../services/httpService'

export default function CreateModal({ setOpen, open }) {
	const [state, setState] = useState({
		title: '',
		body: '',
	})

	const changeHandler = e => {
		const { name, value } = e.target

		setState({
			...state,
			[name]: value,
		})
	}

	const create = async () => {
		try {
			let res = await createAlbum(state)

			if (res?.status === 201) {
				alert('Created Your Album!')

				return setOpen(false)
			}
			alert('Something Went Wrong!')

			return setOpen(false)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div id="modal" style={{ display: open ? 'block' : 'none' }}>
			<div className="sign-up-modal">
				<div id="close-modal-button" onClick={() => setOpen(false)}></div>

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
							className="col-sm-12 title-input with-placeholder"
							type="text"
							name="title"
							placeholder="Title"
							onChange={changeHandler}
							value={state.tile}
						/>
					</div>
					<div className="input-container">
						<input
							name="body"
							className="col-sm-5 body-input with-placeholder"
							type="text"
							placeholder="Body"
							onChange={changeHandler}
							value={state.body}
						/>
					</div>

					<button
						className="kb-btn kb-btn-2 w-full"
						disabled={state.tile === '' || state.body === ''}
						type="button"
						value="Create"
						onClick={create}
					>
						Create
					</button>
				</form>
			</div>
		</div>
	)
}
