import axios from 'axios'

export const getAlbums = async paginate => {
	try {
		let res = await axios.get(
			`https://jsonplaceholder.typicode.com/albums?_start=${
				paginate || 0
			}&_limit=5`
		)

		return res
	} catch (err) {
		throw err
	}
}

export const getAlbumPhotos = async id => {
	try {
		let res = await axios.get(
			`https://jsonplaceholder.typicode.com/albums/${id}/photos`
		)

		return res
	} catch (err) {
		throw err
	}
}

export const createAlbum = async data => {
	try {
		let res = await axios.post(`https://jsonplaceholder.typicode.com/albums`, {
			...data,
			id: Math.floor(Math.random() * 100),
		})

		return res
	} catch (err) {
		throw err
	}
}

export const updateAlbum = async ({ id, title }) => {
	try {
		let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				title,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then(response => response.json())
			.then(data => data)
			.catch(err => console.log(err))

		return res
	} catch (err) {
		throw err
	}
}

export const deleteAlbumData = async id => {
	try {
		let res = await axios.delete(
			`https://jsonplaceholder.typicode.com/albums/${id}`
		)

		return res
	} catch (err) {
		throw err
	}
}
