import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Education', path:'/Education' },
        { title: 'Skills', path: '/skill' },
        { title: 'Projects', path: '/project' },
        { title: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="w-full bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link to="/" className=" nav_item  text-xl font-bold text-slate-300 hover:text-gray-600">
                            Portfolio
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4 ">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="text-slate-300 hover:text-gray-600 hover:border-b-4 border-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white ">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;






// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <>
//             <div className="container nav_bar" 
//         data-aos="fade-down"
//      data-aos-duration="1500"
//             >
//                 <div className="left nav_item">Protfolio</div>
//                 <div className="Right">
//                     <Link to="/" className="nav_item">Home </Link>
//                     <Link to="/Eduction" className="nav_item">Eduction</Link>
//                     <Link to="/skill" className="nav_item">Skill</Link>
//                     <Link to="/Project" className="nav_item">Project</Link>
//                     <Link to="/Contact" className="nav_item">Contact</Link>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Navbar
