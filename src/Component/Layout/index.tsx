
import Menu from '../Header/Menu/Index'
import { Footer } from '../Footer'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="bg-orange-600">
                <Menu />
            </nav>
            <main className="">
                <Outlet />
            </main>
            <footer className='footer bg-black'>
                <Footer />
            </footer>
        </>
    )
}

export default Layout