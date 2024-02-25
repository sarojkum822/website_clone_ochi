import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Pages/Services.jsx';
import Home from './components/Home.jsx'

// { path: '/services', label: 'Services' },
// { path: '/ourwork', label: 'Our Work' },
// { path: '/aboutus', label: 'About us' },
// { path: '/insights', label: 'Insights' },
// { path: '/contactus', label: 'Contact Us' }

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 text-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ourwork' element={<Services />} />
          <Route path='/aboutus' element={<Services />} />
          <Route path='/insights' element={<Services />} />
          <Route path='/contactus' element={<Services />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App