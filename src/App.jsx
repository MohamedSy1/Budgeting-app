import { useState } from 'react'
import './index.css'
import Calculator from './Pages/Calculator.jsx'
import results from './Pages/Results.jsx';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="./pages/Calculator.jsx" element={<Calculator/>}/>
                <Route path="./pages/Home.jsx" element={<Home/>} />
                <Route path="./pages/Results.jsx" element={<results/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default App
