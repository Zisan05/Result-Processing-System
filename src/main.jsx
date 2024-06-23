import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import DashboardPage from './Components/Dashboard Page/DashboardPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
      path: "/",
      element: <Home></Home>
    },

    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: '/dashboard',
          element: <DashboardPage></DashboardPage>
        }
      ]
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
