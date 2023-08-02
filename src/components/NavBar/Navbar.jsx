import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='text-black relative w-full py-4 border-b-2 border-gray-200'>
      <Logo />
    </nav>
  )
}

export default Navbar