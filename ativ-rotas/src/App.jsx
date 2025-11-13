import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Home from './pages/SobreNos'
import Home from './pages/FaleConosco'

import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className='app'> 
      <Header/> 
      <main> 
        <Routres> 
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nós' element={<SobreNos />}/>
          <Route path='/fale-conosco' element={<FaleConosco/>}/>
        </Routres>
      </main> 
      <Footer />
    </div> 
    <h1>SENAI</h1>
    </>
  )
}

export default App
