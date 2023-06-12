import React from 'react';
import { NavLink } from 'react-router-dom';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/Signup">Sign Up</NavLink></li>
        <li><NavLink to="/Signin">Sign In</NavLink></li>
        <li><NavLink to="/Profile">Profile</NavLink></li>
      </ul>
    </nav>
  );
}


export default Navbar;
