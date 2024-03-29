import Link from 'next/link';
import React from 'react'
import { NavigationMenuDemo } from './navLink';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href={'#'}>Home</Link></li>
      <li>
        <details>
          <summary>Store</summary>
          <ul className="p-2">
            <li><Link href={'#'}>Mens</Link></li>
            <li><Link href={'#'}>Woman</Link></li>
            <li><Link href={'#'}>Mart</Link></li>
            <li><Link href={'#'}>Baby Shop</Link></li>
            <li><Link href={'#'}>Electronic</Link></li>
            <li><Link href={'#'}>Pet Food</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={'#'}>About</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   <div>
    <NavigationMenuDemo />
   </div>
  </div>
  <div className="navbar-end">
    {/* <a className="btn bg-white">Button</a> */}
  </div>
</div>
    </div>
  )
};

export default Navbar
