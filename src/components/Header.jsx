import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="py-3">
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
        </div>
    )
}

export default Header