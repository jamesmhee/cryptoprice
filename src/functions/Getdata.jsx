import axios from "axios"

const urlApi = 'https://api.coincap.io/v2'

export const getAssets = async () =>{
    return await axios.get(urlApi + '/assets')
}

export const getRates = async () =>{
    return await axios.get(urlApi + '/rates')
}

export const getAsset = async (id) =>{
    return await axios.get(urlApi + '/assets/' + id)
}