import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage'
import DiegoPage from './pages/DiegoPage'
import QuincyPage from './pages/QuincyPage'
import JQPage from './pages/JQPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<HomePage/>
    },
    {
      path: '/DiegoPage',
      element:<DiegoPage/>
    },
    {
    path: '/QuincyPage',
    element:<QuincyPage/>
    },
    {
      path: '/JQPage',
      element:<JQPage/>
    }
  ]);
  
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
};


export default App;