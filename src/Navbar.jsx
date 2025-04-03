import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0  border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://framerusercontent.com/images/5RXXC8eXKTrJ1XcjXiA8NNoFHuE.png"
            className="h-8 border-inherit object-contain object-center block "
            alt="Company Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-black border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-200"
          >
            Join Us
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 "
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className={`absolute block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2' : '-translate-y-1.5'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black lg:gap-8">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                People
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;