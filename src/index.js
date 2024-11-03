import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from './Components/About';
import Demo from './Components/Demo';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "/skills",
      element: <Skills/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/test",
      element: <Demo />,
    },
    
    
  ]);
root.render(
  // <App/>
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
