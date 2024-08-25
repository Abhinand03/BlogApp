import { Routes,Route } from 'react-router-dom'

import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Blogdetails from './Components/Blogdetails'
import Posts from './Pages/Posts'

function App() {

  return (
    <>
   <Routes>
      <Route path={'/'} element={<Auth/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'/blogs'} element={<Blogdetails/>}/>
      <Route path={'/post'}  element={<Posts/>}/>
    </Routes>
    
      
    </>
  )
}

export default App
