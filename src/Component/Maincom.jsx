import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import profile from "../assets/profile.jpeg"
import { GrSchedule } from "react-icons/gr";
import anime from "../assets/anime.jpg"
import { FaPlus } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
const Maincom = () => {
  return (
<>

<div className='   w-full  '>
<div className='h-24 bg-black -z-10'>

</div>

<div className='h-48 w-full  '>
<div className='grid  md:grid-cols-10 gap-6 p-8 grid-rows-1'>



<div className='h-[410px] rounded-xl md:z-50 z-0 relative bg-white shadow-md col-span-2 -translate-y-14 text-center flex-1 p-5  md:ml-0 w-full'>
<div className='  rounded-lg flex flex-col justify-center items-center  ' >
        {/* <img src={react}/>
         */}
         <img src={anime} alt="" className='w-full' width={100} height={100} />
        <p className='mt-2 font-bold text-lg'>Palvai prudvi</p>
        <p className='text-gray-600 text-sm pt-1'>palvaiprudvi01@gmail.com</p>
        <p className='text-gray-600 text-sm pt-1'>9199009890</p>
        <p className='mt-1 font-semibold text-gray-600 pt-1 text-sm'>Hyderbad,India</p>
    </div>
</div>



<div className='h-96 rounded-xl  col-span-5  -translate-x-10   md:-translate-x-0  text-center md:text-left w-full'>
<p className='ml-4  text-black '>Sunday, 11 November </p>
<p className='font-bold  text-black text-xl ml-4'>Good morning, Sumanth.👋 </p>    
<div className='bg-white drop-shadow-2xl p-11 -translate-x-3 ml-5 rounded-lg md:mt-0'>



<div className='' >
<div className='flex items-center justify-between '>
<div className='flex items-center mb-4'>
<SlCalender className='mr-2' />
<p className='font-semibold md:text-lg'>Sunday, 11 November </p>
<FaChevronDown  className='mt-1 ml-1'/>
</div>
<div className='flex items-center'>
<FaArrowLeft  className='mr-1 text-gray-600'/>
<FaArrowRight className='ml-2 text-gray-600'/>

</div>
</div>


<div className='divide-y divide-slate-400'>
<div className='flex items-center   '>
<div className='flex flex-col   border-r-2 border-gray-200'>
    <p className='tex-lg text-blue-950 font-bold tracking-tighter mr-2 '>11:30 AM</p>
    <p className='text-sm font-semibold text-gray-500 mb-3'>11:30 AM</p>

</div>



<div className='flex flex-col ml-3'>
    <div className='flex items-center'>
        <p>Live</p>
        <FaVideo className='text-red-400 mt-1 ml-1'/>
    </div>

    <p className='mb-3 font-semibold text-lg'>UX Webinar</p>
</div>
</div>

<div className='flex items-center  '>
<div className='flex flex-col border-r-2 border-gray-200 '>
    <p className='tex-lg text-blue-950 font-bold tracking-tighter mr-2 '>11:30 AM</p>
    <p className='text-sm text-gray-500 mb-3 font-semibold'>11:30 AM</p>

</div>
<div className='flex flex-col ml-3'>
    <div className='flex items-center'>
        <p>Upcoming</p>
        <FaVideo className='text-blue-400 mt-1 ml-1'/>
    </div>

    <p className='mb-3 text-lg font-semibold'>My first Webinar</p>
</div>
</div>
<div className='flex items-center   '>
<div className='flex flex-col border-r-2 border-gray-200  '>
    <p className='tex-lg text-blue-950 font-bold tracking-tighter mr-2 '>11:30 AM</p>
    <p className='text-sm font-semibold text-gray-500 mb-3'>11:30 AM</p>

</div>
<div className='flex flex-col ml-3'>
    <div className='flex items-center'>
        <p>Upcoming</p>
        <FaVideo className='text-blue-400 mt-1 ml-1'/>
    </div>

    <p className='mb-3 text-lg font-semibold'>Important Webinar</p>
</div>
</div>


<div className='flex items-center   '>
<div className='flex flex-col border-r-2 border-gray-200   '>
    <p className='tex-lg text-blue-950 font-bold tracking-tighter mr-2 '>11:30 AM</p>
    <p className='text-sm font-semibold text-gray-500 mb-3'>11:30 AM</p>

</div>
<div className='flex flex-col ml-3'>
    <div className='flex items-center'>
        <p>Upcoming</p>
        <FaVideo className='text-blue-400 mt-1 ml-1'/>
    </div>

    <p className='mb-3 font-semibold text-lg'>Webinar</p>
</div>
</div>



</div>





</div>


</div>



</div>



<div className='h-52 rounded-xl col-span-3 drop-shadow-md py-5 mt-16 bg-white w-80 text-center ml-6 md:ml-0  -translate-x-8 md:-translate-x-0'>

<div className='grid grid-cols-2    '>
        <div className='flex flex-col items-center'>
<div className='bg-teal-400 rounded-lg p-2'>
<GrSchedule size={25} />

    </div>       
    
     <p style={{fontSize:"13px",fontWeight:500}}> Schedule a Webinar</p>
        </div>
        <div className='flex flex-col items-center '>
<div className='bg-teal-400 rounded-lg p-2'>
<FaPlus size={20} />

    </div>       
    
     <p style={{fontSize:"13px",fontWeight:500}}>Join a Webinar</p>
        </div>




        <div className='flex flex-col items-center mt-5 '>
<div className='bg-teal-400 rounded-lg p-2'>
<GrSchedulePlay size={25} />

    </div>       
    
     <p style={{fontSize:"13px",fontWeight:500}}> Open Recordings</p>
        </div>


        
        
    </div>


</div>




</div>
</div>

</div>


    
    </>
  )
}

export default Maincom



