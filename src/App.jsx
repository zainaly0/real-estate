import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'


export default function App() {
  return <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-out' element={<SignOut />} />

        </Routes>


  </BrowserRouter>
}
