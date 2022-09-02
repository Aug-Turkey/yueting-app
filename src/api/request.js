// 封装 axios
import axios from 'axios'

const requests = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
})

export default requests