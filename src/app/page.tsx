import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Interest from './components/Interest'
import Contact from './components/Contact'


export default function page() {
  return (
    <main>
      <Navbar/>
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-6xl font-extrabold">Hi, I&apos;m <span className="text-blue-600">Shamna</span></h1>
        <h3 className="mt-4 text-lg">Frontend Developer And AI/ML Enthusiast</h3>
      </section>
      <section id="about" className="min-h-screen py-20">
        <About/>
      </section>
      <section id="projects" className="min-h-screen py-20">
         <Projects/>
      </section>
      <section className="min-h-screen py-20">
        <Interest/>
      </section>
      <section className="min-h-screen py-20">
        <Contact/>
      </section>
    </main>
  )
}
