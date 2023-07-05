import React, { useEffect } from 'react'
import { add } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { FetchProducts } from '../redux/productSlice'
import { useSelector } from 'react-redux';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Products = props => {

    const [products, setProducts] = React.useState()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(FetchProducts())

        // const fetchdata = async () => {
        //     await fetch('https://fakestoreapi.com/products').then((res) => {
        //         return res.json()
        //     }).then((res) => {
        //         res && setProducts(res)
        //     }).catch((er) => {
        //         console.log(er)
        //     })
        // }
        // fetchdata()
    }, [])

    const data = useSelector((re) => {
        return re.product
    })

    useEffect(() => {
        setProducts(data)

    }, [data])
    console.log(data)


    const handlesubmit = (product) => {
        dispatch(add(product))

    }

    return (
        <>
            {data && data.status === "loading" ? <Segment>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment> : <div className="container">
                {
                    data && data.data.map((res) => {
                        return <div className="box-con" key={res.id}>
                            <img width={"132px"} src={res.image} alt="" />
                            <h4>Product : {res.title}</h4>
                            <h4>${res.price}</h4>
                            <button onClick={() => handlesubmit(res)} className="btn">Add to cart</button>

                        </div>
                    })
                }
            </div>}
        </>
    )

}

Products.propTypes = {}

export default Products