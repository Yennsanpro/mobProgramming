import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayouts'
import Landing from '../Pages/Landing/Landing'
import Signup from '../Pages/Signup/Signup'


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Landing/>,
            },
            {
                path: 'signup',
                element: <Signup/>
            }
        ]
    }
])