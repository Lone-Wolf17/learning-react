import React, { useState } from 'react'
import Navigation from './Navigation'

function Header () {
    const [count, setCount] = useState (0)

    return (
        <header className="border-b p-3 flex justify-between items-center">
            <div className="font-bold">
                AppName

                Test
        
                
            </div>
            <span><Navigation /></span>
        </header>
        
    )
}

export default Header