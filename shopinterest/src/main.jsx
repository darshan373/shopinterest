import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import "./index.css"
import Bag from './routes/Bag.jsx'
import Home from "./routes/Home.jsx"
import {Provider} from "react-redux"
import mynthraStore from './store/index.js'
import "bootstrap/dist/css/bootstrap.min.css"

import {     
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{path:"/",element:<Home/>},{path:"/bag",element: <Bag/>} ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mynthraStore}> <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>,
)
