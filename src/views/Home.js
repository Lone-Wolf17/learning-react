import React, { useState, useEffect } from 'react'
import Loader from '../component/Loader'
import ProductCard from '../component/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {

    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null
    

    if (products.error) {
        content = <p>There was an Error, please refresh or try again later</p>
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content = products.data.map((product, key) => 
            <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard 
                    product={product} 
                />
            </div>
        )
    }



    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>

            <div className="md:flex flex-wrap md:-mx-3">
                {content}
            </div>
            
        </div>
    )
}

export default Home