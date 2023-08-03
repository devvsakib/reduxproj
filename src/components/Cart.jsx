import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/createSlice"
const Cart = () => {
  const dispatch = useDispatch()
  const cartProd = useSelector(state => state.cart)

  const removeProd = id => dispatch(remove(id))

  return (
    <div>
      <h1>Cart</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-5">
            {cartProd.map((product) => (
              <div className="rounded-md flex gap-5 items-center justify-between p-3 shadow-md" key={product.id}>
                <div className="">
                  <img className="object-contain w-full h-12" src={product.image} alt={product.title} />
                </div>
                <h3 className="mt-3 font-semibold">{product.title}</h3>
                <p>${product.price}</p>
                <button onClick={() => removeProd(product.id)}>X</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          actions
        </div>
      </div>
    </div>
  )
}

export default Cart