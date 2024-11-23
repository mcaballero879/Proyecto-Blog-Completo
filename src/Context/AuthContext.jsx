// componente contexto, ser accedido por demás componentes
import { createContext, useEffect, useState} from "react"

export const AuthContext = createContext()

export const AuthProvider = ({Children}) => {
    // estado logueado
    const [isLogged, setIsLogged] = useState(()=>{ 
        const store = localStorage.getItem("isLogged") 
        return store ? store : false })
     
        useEffect( () => {
            localStorage.setItem("isLogged", isLogged);
        },[isLogged]);
   
     return(
        <AuthContext.Provider value={{isLogged, setIsLogged}}>
            {Children}
        </AuthContext.Provider>
        )       
    }

