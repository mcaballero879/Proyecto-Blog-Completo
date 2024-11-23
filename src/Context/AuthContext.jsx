// componente contexto, ser accedido por demás componentes
import { createContext, useEffect, useState} from "react"
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
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
export default AuthProvider
