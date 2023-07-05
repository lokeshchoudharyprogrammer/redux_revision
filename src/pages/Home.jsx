import React from 'react'

import Products from './Products'
const Home = props => {
  return (
    <div className="product">

      <h2>Welcome to tool-kit store</h2>
        <h3>Products</h3>
      <section>
        <Products />
      </section>

    </div>
  )
}

Home.propTypes = {}

export default Home