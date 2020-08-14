import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Product() {

    const { id } = useParams()

    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data)
        })
    
    }, [url])
    
    if (product) {
        content = 
        <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.name}
                </h1>
                <div>
                    <img 
                        src={product.images[0].imageUrl}
                        alt=
                    />
                </div>
                
            </div>
    }

    return (
        <div>
            { content }
            
        </div>
    )
}

export default Product