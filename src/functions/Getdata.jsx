import axios from "axios"

const urlApi = 'https://api.coincap.io/v2'

export const getAssets = async () =>{
    const result = await axios.get(urlApi + '/assets')
    return result.data
}

export const getRates = async () =>{
    const result = await axios.get(urlApi + '/rates')
    return result.data
}

export const getAsset = async (id) =>{
    const result = await axios.get(urlApi + '/assets/' + id)
    return result.data
}