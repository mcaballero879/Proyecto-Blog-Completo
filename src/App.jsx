import {AuthProvider} from './Context/AuthContext'
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Paginas/Home'

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter> {/* enrutador */}
      <Router>
       <Header/> 
      <Route path='/blogs/:id' element={<DetalleBlog/>}></Route>
      <Route path='/crear-blog/:idblog' element={<></>}/>
      <Route path='/modificar-blog/:idblog' element={<></>}/>
      <Route path='/mis-blog/:idblog' element={<></>}/>
      <Route path='/login' element={<></>}/>
      <Route path='/register' element={<></>}/>
      <Route></Route>
      </Router>
      <Footer/>
      </BrowserRouter> {/*cierre de enrutador */}
      </AuthProvider>
     
    </>
  )
}

export default App
