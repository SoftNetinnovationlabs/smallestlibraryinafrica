import {useEffect} from 'react'
import axios from 'axios'
import baseURL from '../../../config'
const KeepAlive = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const response = axios.get(`${baseURL}/auth/ping`)
            response.then((res) => {
                if (res.status === 200) {
                    console.log('Server is alive')
                } else {
                    console.log('Server is down')
                }
            }).catch((error) => {
                console.error('Error pinging server:', error)
            })

    }, 80)
    return () => clearInterval(interval)
    }, [])
    return null
}

export default KeepAlive
