import { api } from './config'

export const signup = async (userData) => {
    
    const {data} = await api.post('/auth/signup', userData)
    console.log("llega")
    return data
}
export const login = async (userData) => {
    const {data} = await api.post('/auth/login', userData)
    return data
}

