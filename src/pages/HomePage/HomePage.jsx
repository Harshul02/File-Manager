import React from 'react'
import Navbar from '../../components/HomePageComponent/NavBar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='container mt-20 mx-auto'>
        <h1 className='text-3xl mt-20'>Welcome to File Management System</h1>
      </div>
    </div>
  )
}

export default HomePage
