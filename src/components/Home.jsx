import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center'>
    <div className=' inset-0 text-white'>
        <Link to={'/search'} className='border-2 border-blue-600 p-2 text-xl bg-blue-600  rounded-sm hover:bg-blue-500 m-3'>Open search</Link>
        <Link to={'/shelf'} className='border-2 border-blue-600 p-2 text-xl bg-blue-600  rounded-sm hover:bg-blue-500 m-3'>Open Shelf</Link>
    </div>
    </div>
  )
}

export default Home;