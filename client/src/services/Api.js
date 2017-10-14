import axios from 'axios'

export default () => {
    console.log('Client: hello from APIs!')
    return axios.create({
        baseURL: 'http://localhost:8081/'
    })
}