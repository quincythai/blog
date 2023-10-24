import { useState } from 'react'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// TODO: connect this to the pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
