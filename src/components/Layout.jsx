import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
    return (
        <main className=' max-w-[1280px] mx-auto'>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout