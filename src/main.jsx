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
import StudentSemester from './Components/StudentSemester/StudentSemester';
import GPA from './Components/GPA/GPA';
import TeacherSemester from './Components/Teacher Semester/TeacherSemester';
import Privet from './Components/Privet/Privet';

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
      element:<DashBoard></DashBoard>,
      children: [
        {
          path: '/dashboard',
          element: <Privet><DashboardPage></DashboardPage></Privet>
        },

        {
          path: "/dashboard/scalendar",
          element : <Privet><StudentCalendar></StudentCalendar></Privet>
        },

        {
          path : "/dashboard/semester/:id",
          element : <Privet><StudentSemester></StudentSemester></Privet>
        },

        {
          path : "/dashboard/gpa",
          element : <GPA></GPA>
        }
      ]
    },

    // For teacher Dashboard

    {
      path : "/teacher",
      element : <Privet><TeacherDashboard></TeacherDashboard></Privet>,
      children : [
        {
          path : "/teacher",
          element : <Privet><TeacherHome></TeacherHome></Privet>
        },


        {
          path : "/teacher/tcalendar",
          element : <Privet><TeacherCalendar></TeacherCalendar></Privet>
        },


        {
          path : "/teacher/semester/:_id",
          element : <Privet><TeacherSemester></TeacherSemester></Privet>
        }
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
