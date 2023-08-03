import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store/createSlice"

const Products = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
    }, [])

    const addToCart = product => dispatch(add(product))


    return (
        <div>
            <h1>Products</h1>
            <div className="grid grid-cols-4 gap-5">
                {products.map((product) => (
                    <div className="rounded-md p-3 shadow-md" key={product.id}>
                        <div className="w-64 h-64">
                            <img className="object-contain w-full h-64" src={product.image} alt={product.title} />
                        </div>
                        <h3 className="mt-3 font-semibold">{product.title.length > 40 ? product.title.slice(0, 30) + "..." : product.title}</h3>
                        <p>${product.price}</p>
                        <div className="text-center">
                            <button onClick={() => addToCart(product)} className="bg-blue-400 text-white px-10 py-1 mt-2 rounded-full">Add To Card</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products