// este encabezado se verá en muchos componentes
// import useContext mas el contexto
import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom"
const Header = () => {
    const {isLogin} = useContext(AuthContext) 
    
    return(
        <div>
            <Link to="/">Home</Link>
            {isLogin && <Link to="/mis-blogs">Blogs</Link> }
            {isLogin && <Link to="/mis-blogs">Crear Blog</Link> }
            {isLogin && <Link to="/mis-blogs">Cerrar session</Link> }
            {!isLogin && <Link to="/login">Login</Link> }
            {!isLogin && <Link to="/register">register</Link> }
        </div>
    )
    
}
export default Header