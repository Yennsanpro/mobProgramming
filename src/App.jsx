import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import MainLayout from './Layouts/MainLayouts'

function App() {

  return (
    <>
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App
