import axios from 'axios'

export const API_KEY = '5f98ec2b231ba42851b49e54'
export const ROOT_URL = 'https://chapters-74b6.restdb.io/rest/'

export const httpClient = axios.create({
    headers: {
        'x-apikey': API_KEY
    }
});