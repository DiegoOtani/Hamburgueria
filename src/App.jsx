import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return <div className='App'>
    <Sidebar/>
    <Outlet/>
    <Footer/>
  </div>
}

export default App
