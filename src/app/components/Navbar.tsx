import React from 'react'

function Navbar() {
  return (
    <header className="w-full bg-white text-black shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shamna pv</h1>
        <nav className="flex space-x-6 text-sm font-medium">
           <a href="#about" className="hover:text-blue-400 transition">About</a>  
           <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
           <a href="#interest" className="hover:text-blue-400 transition">Interests</a>
           <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
    </div>
    </header>
    
  )
}

export default Navbar
