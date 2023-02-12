import { API_KEY, API_URL } from '../config/env'

class DataService {

    getLocation = async (ip: string): Promise<any> => {
        try {
            const response = await fetch(`${API_URL}apiKey=${API_KEY}&ipAddress=${ip}`)
            return await response.json()
        } catch (error) {
            return error
        }
    }

}

export default new DataService()