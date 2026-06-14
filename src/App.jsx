import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './components/main/Roots';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Roots/>,
    children:[
      {
        index:true,
        element:<HomePage />
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App