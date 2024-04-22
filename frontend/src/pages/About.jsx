import React from 'react'
import img from '../assets/profile.jpg'
export const About = () => {
  return (
    <>
    <div className='flex mx-40'>
        <div className='w-1/2'><h1 className='text-5xl font-bold font-sans mx-auto my-6'>About Me</h1>
        <h1 className='font-bold text-3xl my-4'>Hi! I'm Shashank Bisht</h1>
        <h1 className='font-bold text-3xl my-4'>Currently learning full stack development </h1>
        <p className='text-xl'>I'm a full stack developer specializing in creating user-centric web applications. With expertise in both frontend and backend technologies, I bring ideas to life with elegant designs and scalable solutions.</p>
        <a href="/path/to/your/cv.pdf" download className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 my-5 rounded inline-block">Download CV</a>
        </div>
        <div className='w-1/2 flex justify-center'>
            <img className='rounded-full w-96 h-96' src={img} alt="" />
        </div>
    </div>
    </>
  )
}
