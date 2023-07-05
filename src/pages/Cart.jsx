import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { remove } from '../redux/cartSlice'

const Cart = props => {

  const dispatch = useDispatch()

  const [products, setcartTotal] = useState()

  const data = useSelector((re) => {
    return re.cart
  })

  useEffect(() => {
    setcartTotal(data && data)
  }, [data, products])


  const handlesubmit = (id) => {

    dispatch(remove(id))



  }
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Cart</h3>

      <div className="container">
        {

          products && products.map((res) => {
            return <div className="box-con" key={res.id}>
              <img width={"132px"} src={res.image} alt="" />
              <h4>{res.title}</h4>
              <h4>{res.price}</h4>
              <button onClick={() => handlesubmit(res.id)} className="btn">Delete</button>

            </div>
          })
        }
      </div> 
    </div>
  )
}


let style = {
  h1tg: {
    textAlign: "center",
    fontSize: "xx-large",
    fontWeight: "700",
    fontStyle: "oblique"
  }
}

export default Cart