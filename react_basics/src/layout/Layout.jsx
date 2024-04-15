import { Link, Outlet } from "react-router-dom";

function Layout() {
    return <>
        <header className="border-b pb-3">
            <nav className="flex justify-between">
                <h1 className="text-indigo-700 text-xl" >Blog</h1>
                <div>
                    <Link className="px-3 py-1 transition hover:text-white hover:bg-indigo-700 rounded-md" to="/">Home</Link>
                    <Link className="px-3 py-1 transition hover:text-white hover:bg-indigo-700 rounded-md" to="/create">New Post</Link>
                </div>
            </nav>
        </header>
        <main className="px-2 py-5">
            <Outlet/>
        </main>
    </>
}

export default Layout;