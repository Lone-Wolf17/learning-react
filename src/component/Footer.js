import React, { useState } from 'react'

function Footer () {
    const [count, setCount] = useState (0)

    return (
        <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t">
            &copy; Copyright 2020
        </footer>    
    )
}

export default Footer