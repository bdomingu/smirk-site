'use client'
import { useState } from 'react';

const Nav: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-black p-4">
            <nav className="flex items-center justify-between">
                <div className="flex">
                    <div >
                    <img className='w-full h-auto max-w-52 md:w-48 sm:w-32' src='/images/smirkLogo.png'/>
                    <h4 className='sm:text-xs text-center text-white'>Six Meter International Radio Klub...</h4>
                    </div>
                    <img className='pl-5 w-full h-auto max-w-52 md:w-48 sm:w-24 pl-0' src='/images/smirkRadio.png'/>
                    <img className='w-full max-w-12 max-h-12 relative top-10 sm:w-6 sm:top-10 sm:h-6 ' src='/images/smirkEmoji.jpeg' alt='smirk emoji'/>
                </div>
                <div className="lg:hidden">
                    {/* Hamburger menu button */}
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex space-x-4">
                    {/* Regular navigation links for larger screens */}
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
            </nav>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <a href="#" className="block text-white py-2 text-center">Home</a>
                    <a href="#" className="block text-white py-2 text-center">About</a>
                    <a href="#" className="block text-white py-2 text-center">Services</a>
                    <a href="#" className="block text-white py-2 text-center">Contact</a>
                </div>
            )}
        </div>
    );
};

export default Nav;
