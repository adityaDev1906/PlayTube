import React from 'react'
import './home.css'
import Posts from './../Components/Posts';

const Home = () => {
  return (
    <>
      <h1 className='heading'>Welcome to PlayTube</h1>
      <Posts />
    </>
  )
}

export default Home