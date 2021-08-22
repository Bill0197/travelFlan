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
