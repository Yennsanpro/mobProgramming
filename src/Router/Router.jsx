import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayouts'
import Landing from '../Pages/Landing/Landing'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import All from '../Pages/All/All'
import One from '../Pages/One/One'




export const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
             {
                path: '',
                element: <Landing/>,
                loader: () => {
                    if(!localStorage.getItem('token')) {
                        return null
                    } else{
                        return redirect ('/home') // si tienes token te lleva al home
                    }
                }
            },
            
            {
                path: 'signup',
                element: <Signup/>
            },
            {
                path: 'login',
                element: <Login/>
            }, 
            {
                path: 'home',
                element: <Home/>
            }, 
            {
                path: 'all',
                element: <All/>
            }, 
            {
                path: 'one',
                element: <One/>
            }, 
            
        ]
    }
])