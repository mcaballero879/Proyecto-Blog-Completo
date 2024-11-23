// componente contexto, ser accedido por demás componentes
import { createContext, useEffect, useState} from "react"
i
const AuthContext = createContext()

const AuthProvider = ({Children}) => {
    // estado logueado
    const [isLogged, setIslogged] = useState(()=>{ 
        const store = localStorage.getItem('isLogged') 
        return store ? store : false })
     
        useEffect( () => {
            localStorage.setItem("isLogged", isLogged)
        },[isLogged])
   
     return(
        <AuthContext.Provider value={{isLogged, setIslogged}}>
            {Children}
        </AuthContext.Provider>
        )       
    }

