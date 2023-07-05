import React from 'react'
import { add } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const Products = props => {

    const [products, setProducts] = React.useState()
    const dispatch = useDispatch()

    React.useEffect(() => {
        const fetchdata = async () => {

            await fetch('https://fakestoreapi.com/products').then((res) => {
                return res.json()
            }).then((res) => {
                res && setProducts(res)
            }).catch((er) => {
                console.log(er)
            })
        }
        fetchdata()
    }, [])

    const handlesubmit = (product) => {
        dispatch(add(product))

    }

    return (
        <div className="container">
            {
                products && products.map((res) => {
                    return <div className="box-con" key={res.id}>
                        <img width={"132px"} src={res.image} alt="" />
                        <h4>{res.title}</h4>
                        <h4>{res.price}</h4>
                        <button onClick={() => handlesubmit(res)} className="btn">Add to cart</button>

                    </div>
                })
            }
        </div>
    )

}

Products.propTypes = {}

export default Products