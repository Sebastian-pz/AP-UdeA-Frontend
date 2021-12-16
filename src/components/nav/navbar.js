import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './navbar.css'
import decodeToken from "../../controller/token/decodeToken"

const logout = () => {
    localStorage.removeItem('auth_token')
    console.log("Cerrando cuenta")
    window.location.replace('/login')
}

let token = decodeToken()

const Navbar = () => {

    if(token.role==='Leader'){
        return (
            <div className="navbar-all">
                <header id="header-navbar">
                    <p id="text">Líder</p>
                    <nav>
                        <ul className="nav_links">
                            <li id="li-navbar"><Link to="/home" id="link-navbar">Inicio</Link></li>
                            <li id="li-navbar"><Link to="/projects" id="link-navbar">Proyectos</Link></li>
                            <li id="li-navbar"><Link to="/leader/my-projects" id="link-navbar">Mis proyectos</Link></li>
                            <li id="li-navbar"><Link to="/dashboard" id="link-navbar">Ajustes</Link></li>
                            <li id="li-navbar"><Link to="/l/users" id="link-navbar">[A] Usuarios</Link></li>
                            <li id="li-navbar"><Link to="/admin/activate" id="link-navbar">Activar</Link></li>
                            <li id="li-navbar"><Link to="/createproject" id="link-navbar">Crear proyecto</Link></li>
                            <li id="li-navbar" onClick={logout}>Logout</li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    } else if (token.role === 'Admin') {
        return (
            <div className="navbar-all">
                <header id="header-navbar">
                <p id="text">Admin</p>
                    <nav>
                        <ul className="nav_links">
                            <li id="li-navbar"><Link to="/home" id="link-navbar">Inicio</Link></li>
                            <li id="li-navbar"><Link to="/projects" id="link-navbar">Proyectos</Link></li>
                            <li id="li-navbar"><Link to="/leader/my-projects" id="link-navbar">Mis proyectos</Link></li>
                            <li id="li-navbar"><Link to="/dashboard" id="link-navbar">Ajustes</Link></li>
                            <li id="li-navbar"><Link to="/l/users" id="link-navbar">[A] Usuarios</Link></li>
                            <li id="li-navbar"><Link to="/l/projects" id="link-navbar">[A] Proyectos</Link></li>
                            <li id="li-navbar"><Link to="/admin/activate" id="link-navbar">Activar</Link></li>
                            <li id="li-navbar"><Link to="/admin/projects" id="link-navbar">Estados</Link></li>
                            <li id="li-navbar" onClick={logout}>Logout</li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    } else if (token.role==='Student'){
        return (
            <div className="navbar-all">
                <header id="header-navbar">
                <p id="text">Estudiante</p>
                    <nav>
                        <ul className="nav_links">
                            <li id="li-navbar"><Link to="/home" id="link-navbar">Inicio</Link></li>
                            <li id="li-navbar"><Link to="/projects" id="link-navbar">Proyectos</Link></li>
                            <li id="li-navbar"><Link to="/dashboard" id="link-navbar">Ajustes de la cuenta</Link></li>
                            <li id="li-navbar" onClick={logout}>Logout</li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
    
}
export default Navbar;