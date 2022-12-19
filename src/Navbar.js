import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active-route' : '')}>Home</NavLink>
                <NavLink to="/blogs/create" className={({ isActive }) => (isActive ? 'active-route' : '')}>New Blog</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;