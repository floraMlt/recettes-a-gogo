import axios from 'axios'

export const api = axios.create({baseURL:"http://api.antoine-libert.com:3210/api/"})
/*export const api = axios.create({baseURL:"http://localhost:3210/api/"})*/