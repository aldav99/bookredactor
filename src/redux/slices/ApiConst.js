import axios from 'axios'

const API_KEY = '5f98ec2b231ba42851b49e54'
const ROOT_URL = 'https://chapters-74b6.restdb.io/rest/'

export const httpClient = axios.create({
    baseURL: ROOT_URL,
    headers: {
        'x-apikey': API_KEY
    }
});