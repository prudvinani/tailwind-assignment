import React from 'react'
import { GrSchedule } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
const Lastdata = () => {
  return (
    <div className='grid grid-cols-2 w-64 bg-red-100 p-2 flex-1 ml-6 mt-44'>
        <div className='flex flex-col items-center'>
<div className='bg-teal-400 rounded-lg p-2'>
<GrSchedule size={20} />

    </div>       
    
     <p style={{fontSize:"10px",fontWeight:500}}> Schedule a Webinar</p>
        </div>
        <div className='flex flex-col items-center'>
<div className='bg-teal-400 rounded-lg p-2'>
<FaPlus size={20} />

    </div>       
    
     <p style={{fontSize:"10px",fontWeight:500}}>Join a Webinar</p>
        </div>
        <div className='flex flex-col items-center mt-2 '>
<div className='bg-teal-400 rounded-lg p-2'>
<GrSchedulePlay size={20} />

    </div>       
    
     <p style={{fontSize:"10px",fontWeight:500}}> Open Recordings</p>
        </div>


        
        
    </div>


//
  )
}

export default Lastdata