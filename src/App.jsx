import { useState } from 'react'
import './index.css'
import InputBox from './Pages/Calculator.jsx'
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
                <Route path="/" element={<InputBox />}/>
                <Route path="/pages" element={<InputBox />} />
                {/* <Route path='/pages' element={< />} /> */}
            </Routes>
        </BrowserRouter>

    )
}

export default App
