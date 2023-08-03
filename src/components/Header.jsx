import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
    const cartProd = useSelector(state => state.cart) 
    return (
        <div className="flex justify-between py-3">
            <ul className="flex gap-5">
                <li className="hover:text-blue-400">
                    <Link to='/'>Products</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link to='/cart'>Cart</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
            <button>
                Cart: {cartProd.length}
            </button>
        </div>
    )
}

export default Header