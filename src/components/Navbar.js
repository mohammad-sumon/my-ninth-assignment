import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 bg-cyan-200 w-full">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <Link
          className="flex items-center p-2 text-4xl font-bold text-orange-600"
          to="/"
        >
          Dev Quiz
        </Link>
        <ul className={`bg-cyan-200 md:flex justify-center absolute md:static ${open ? 'top-3 right-8' : 'top-[-120px]'}`}>
          <li className="mr-10">
            <Link
              className="text-xl text-orange-500"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-10">
            <Link
              className="text-xl text-orange-500"
              to="statistics"
            >
              Statistics
            </Link>
          </li>
          <li className="mr-10">
            <Link
              className="text-xl text-orange-500"
              to="blog"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div onClick={()=> setOpen(!open)} className="h-6 w-6 ml-4 text-orange-300 cursor-pointer md:hidden">
          {
            open ? <XMarkIcon /> : <Bars3Icon/>
          }
      </div>
      </div> 
    </nav>
  );
};

export default Navbar;
