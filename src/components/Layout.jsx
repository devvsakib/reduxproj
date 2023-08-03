import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Provider } from "react-redux"
import store
    from "../store/store"
const Layout = () => {
    return (
        <Provider store={store}>
            <main className=' max-w-[1280px] mx-auto'>
                <Header />
                <Outlet />
            </main>
        </Provider>
    )
}

export default Layout