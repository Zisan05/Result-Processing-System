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
import TeacherDashboard from './Components/Teacher Panel/Teacher Dashboard/TeacherDashboard';
import TeacherHome from './Components/Teacher Panel/TeacherHome/TeacherHome';
import StudentCalendar from './Components/StudentCalendar/StudentCalendar';
import TeacherCalendar from './Components/TeacherCalendar/TeacherCalendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
      path: "/",
      element: <Home></Home>
    },


// For student dashboard 
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: '/dashboard',
          element: <DashboardPage></DashboardPage>
        },
        {
          path: "/dashboard/scalendar",
          element : <StudentCalendar></StudentCalendar>
        }
      ]
    },

    // For teacher Dashboard

    {
      path : "/teacher",
      element : <TeacherDashboard></TeacherDashboard>,
      children : [
        {
          path : "/teacher",
          element : <TeacherHome></TeacherHome>
        },


        {
          path : "/teacher/tcalendar",
          element : <TeacherCalendar></TeacherCalendar>
        },
      ]
    },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
