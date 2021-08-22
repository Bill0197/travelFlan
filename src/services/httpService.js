import axios from 'axios'

export const getAlbums = async () => {
	try {
		let res = await axios.get(
			'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=10'
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
