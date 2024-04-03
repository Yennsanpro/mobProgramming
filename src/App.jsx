import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'

import { NameContext } from './context/useContext'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([])


  return (
    <>
    <NameContext.Provider value={{setUser, user}}>
      <RouterProvider router={router}/>
    </NameContext.Provider> 
    </>
  )
}

export default App
