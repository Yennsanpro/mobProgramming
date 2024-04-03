import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayouts'
import Landing from '../Pages/Landing'


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: ' ',
                element: <Landing/>,
            }
        ]
    }
])