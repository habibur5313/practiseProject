import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Banner from './Component/Home/Banner';
import Home from './Component/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <div className='min-h-96 flex flex-col justify-center items-center'><h1 className='text-6xl text-red-600 font-extrabold '>Page not found (404)</h1></div>,

    children: [
      {path: '/',
        element: <Banner></Banner> 
},
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
