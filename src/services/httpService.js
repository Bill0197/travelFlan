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
			id: Math.random() * 1.3424,
		})

		return res
	} catch (err) {
		throw err
	}
}
