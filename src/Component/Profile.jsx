import React from 'react'
import profile from "../assets/profile.jpeg"
const Profile = () => {
  return (
    <div className='drop-shadow-md p-5 bg-white  rounded-lg flex flex-col justify-center items-center w-full' >
        
         <img src={profile} width={100}  height={100} className='rounded-md'/>
        <p className='mt-2 font-bold text-lg'>Palvai prudvi</p>
        <p className='text-gray-600 text-sm'>palvaiprudvi01@gmail.com</p>
        <p className='text-gray-600 text-sm'>9199009890</p>
        <p className='mt-1 font-semibold text-gray-600 text-sm'>Hyderbad,India</p>
    </div>
  )
}

export default Profile