// este encabezado se verá en muchos componentes
// import useContext mas el contexto
import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"



const Header = () => {
    const [isLogin, setIsLogged] = useContext(AuthContext)

        useEffect( ()=> {
            setIsLogged(true)
        },[])

    return(  
        <header>
            <p>Bienvenido al Blog de PLAYTEGHAME</p>
            <h1>{isLogin}</h1>
            
        </header>                
    )
}
export default Header