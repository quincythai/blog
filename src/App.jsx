import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage'
import DiegoPage from './pages/DiegoPage'
import QuincyPage from './pages/QuincyPage'
import JQPage from './pages/JQPage'
import AboutPage from './pages/about'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transition from './components/Transition';

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element:<HomePage/>
  //   },
  //   {
  //     path: '/DiegoPage',
  //     element:<DiegoPage/>
  //   },
  //   {
  //   path: '/QuincyPage',
  //   element:<QuincyPage/>
  //   },
  //   {
  //     path: '/JQPage',
  //     element:<JQPage/>
  //   },
  //   {
  //     path: '/about',
  //     element: <AboutPage/>
  //   },
  // ]);
  // return <RouterProvider router={router} />;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Transition>
            <HomePage />
          </Transition>
        } />
        <Route path="DiegoPage" element={
        <Transition>
        <DiegoPage/>
        </Transition>} />
        <Route path="/QuincyPage" element={
        <Transition>
          <QuincyPage/>
        </Transition>} />
        <Route path="/JQPage" element={<Transition>
          <JQPage/>
          </Transition>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </BrowserRouter>
      <Footer/>
    </>
  )
};


export default App;