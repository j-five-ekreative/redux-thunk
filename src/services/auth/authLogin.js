import axios from '../axios'

export const login = async (email, password) => {
	try {
		let authData = { email, password }
		let url = '/login'
		const response = await axios.post(url, authData)
		return response.data
	} catch (error) {
		throw error.response.data
	}
}

