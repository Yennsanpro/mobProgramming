import { api } from './config'

export const signup = async (userData) => {
    const {data} = await api.post('/auth/signup', userData)
}