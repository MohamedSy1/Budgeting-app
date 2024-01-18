import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="w-full top-0">
            <div className="flex justify-between items-center bg-[white] w-full p-4">
                <img className="w-[15rem]" src="#" alt="Budget-logo" />
                <ul className="flex flex-row gap-[2rem]">
                   <li>
                    <Link></Link>
                       <a href="../App.jsx" className="hover:text-blue-500 hover:underline">Home</a>
                   </li>
                   <li>
                        <Link to="/pages" className="hover:text-blue-500 hover:underline">Calculator</Link>
                   </li>
                   <li>
                       <a href="" className="hover:text-blue-500 hover:underline">Contact</a>
                   </li>
                </ul>
            </div>
        </header>
    )
 }

export default Navbar;