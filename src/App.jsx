import AuthProvider from './Context/AuthContext'
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'

function App() {
  

  return (
    <>
      <AuthProvider>
      <BrowserRouter> {/* enrutador */}
      <Router>
       <Header/> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route></Route>
      </Router>
      <Footer/>
      </BrowserRouter> {/*cierre de enrutador */}
      </AuthProvider>
     
    </>
  )
}

export default App
