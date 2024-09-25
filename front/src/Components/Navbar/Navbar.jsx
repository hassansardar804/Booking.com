import React from "react";
import logo from '../../assets/gallery/logo.png'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div className="bg-white ">
                <nav className="p-4 #ffffff bg-[#008080] ">
                    <div className="container flex items-center justify-between mx-auto">
                        {/* Left side - Navigation items */}
                        <div className="flex space-x-4 ">
                            <button className="relative bg-transparent text-[#e8d14e] font-semibold py-2 px-4 rounded-lg border-b-2 border-transparent flex items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="mr-2">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                                About
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e8d14e] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </button>
                            <button className="relative bg-transparent text-[#e8d14e] font-semibold py-2 px-4 rounded-lg border-b-2 border-transparent flex items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="mr-2">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                                Routes
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e8d14e] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </button>
                            <button className="relative bg-transparent text-[#e8d14e] font-semibold py-2 px-4 rounded-lg border-b-2 border-transparent flex items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="mr-2">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                                Map
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e8d14e] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </button>
                        </div>
                        <div className="text-2xl text-white">
                            <Link to="/">
                                <img src={logo} alt="" className="font-normal h-7 me-6" />
                            </Link>
                        </div>
                        <div className="flex gap-3">
                            <div>
                                <Link to='/login' className="text-white transition duration-300 ease-in-out transform bg-[#e8d14e] btn hover:bg-[#e8d14e] hover:ring-4 hover:ring-[#f2e07a] hover:scale-105"> Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
