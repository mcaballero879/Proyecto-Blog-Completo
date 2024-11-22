
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Encabezado from './Componentes/Encabezado'
import PieDePagina from './Componentes/PieDePagina'

function App() {
  

  return (
    <>
      <BrowserRouter> {/* enrutador */}
      <Router>
       <Encabezado/> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route></Route>
      </Router>
      <PieDePagina/>
      </BrowserRouter> {/*cierre de enrutador */}
    </>
  )
}

export default App
