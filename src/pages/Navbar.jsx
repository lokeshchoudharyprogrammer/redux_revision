import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// useSelector
const Navbar = () => {
    const [cartTotal, setcartTotal] = useState()

    const data = useSelector((re) => {
        return re.cart
    })

    useEffect(() => {
        setcartTotal(data.length)      
    }, [data])
    
    return (
        <div>
            <nav class="navbar">
                <Link to="/" class="navbar-logo">
                    <img class="navbar-logo logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7LnwQITE0JRuNQY8C8g0lUKrQkdfZFDsErY46OTSdxW-LWA5_3WGvE1VQtTxhwEr-qs&usqp=CAU" alt="Logo" />
                </Link>
                <Link to="/" class="navbar-link">Home</Link>
                <Link to="/cart" class="navbar-link">Cart</Link>
                <Link className="cart-count navbar-link">Cart Item : {data && data.length}</Link>
            </nav>

        </div>
    )
}

export default Navbar
