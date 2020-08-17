import React, { useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGet(url) {

    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {

        setRequest({
            loading: true,
            data: null
        })

        axios.get(url).then(response => {
            setRequest({
                loading: false,
                data: response.data
            })
        })
        .catch (() => {
            setRequest({
                loading: false,
                data: null,
                error: true
            })
        })
    
    }, [url])

    return request


}