import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './navbar.css'

const logout = () => {
    localStorage.removeItem('auth_token')
    console.log("Cerrando cuenta")
    window.location.replace('/login')
}

const Navbar = () => {
    return (
        <div className="navbar-all">
            <header id="header-navbar">
                <img className="logo" src="https://cdn-icons.flaticon.com/png/512/4401/premium/4401470.png?token=exp=1639507305~hmac=81be90ce06a287c97ab0852249999f10" alt="logo"/>
                <nav>
                    <ul className="nav_links">
                        <li id="li-navbar"><Link to="/home" id="link-navbar">Inicio</Link></li>
                        <li id="li-navbar"><Link to="/projects" id="link-navbar">Proyectos</Link></li>
                        <li id="li-navbar"><Link to="/my-projects" id="link-navbar">Mis proyectos</Link></li>
                        <li id="li-navbar"><Link to="/dashboard" id="link-navbar">Ajustes</Link></li>
                        <li id="li-navbar" onClick={logout}>Logout</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;