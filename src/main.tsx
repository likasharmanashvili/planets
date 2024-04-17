
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Jupiter from './pages/jupiter.tsx'
import Mars from './pages/mars.tsx'
import Mercury from './pages/mercury.tsx'
import Neptune from './pages/neptune.tsx'
import Saturn from './pages/saturn.tsx'
import Uranus from './pages/uranus.tsx'
import Venus from './pages/venus.tsx'
import EarthD from './pages/Earth.tsx'


const router = createBrowserRouter(
  [
    {
      path : "/",
      element: <App />
    },
  
    {
      path: "/jupiter",
      element: <Jupiter/>

    },

    {
         path: "/mars",
         element: <Mars />
    },
    {
      path: "/mercury" , 
      element: <Mercury />

    } ,
    {
      path: "/neptune",
      element: <Neptune />
    },
    {
      path: "/saturn",
      element: <Saturn/>
    },
    {
      path: "/uranus",
      element: <Uranus />
    },
    {
      path: "/venus",
      element: <Venus />
    },
    {
      path: "/Earth",
      element: <EarthD/>

    }
   
  ]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router = {router} />
)
