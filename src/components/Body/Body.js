import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import Error from '../Error/Error';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/browse',
    element: <Browse />,
  }
])

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
