import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {


    const data = useSelector((re) => {
        return re.cart
    })

    useEffect(() => {
    }, [data])

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img className="navbar-logo logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7LnwQITE0JRuNQY8C8g0lUKrQkdfZFDsErY46OTSdxW-LWA5_3WGvE1VQtTxhwEr-qs&usqp=CAU" alt="Logo" />
                </Link>
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/cart" className="navbar-link">Cart</Link>
                <Link className="cart-count navbar-link">Cart Item : {data && data.length}</Link>
            </nav>

        </div>
    )
}

export default Navbar
