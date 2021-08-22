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
