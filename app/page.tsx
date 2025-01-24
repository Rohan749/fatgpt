"use client"

import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Burgernomics from './components/Burgernomics'
import Exchanges from './components/Exchanges'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='max-w-[2000px] overflow-x-hidden flex flex-col items-center m-auto'>
      <Header />
      <Hero />
      <About />
      <Burgernomics />
      <Exchanges />
      <Footer />
    </div>
  )
}

export default page