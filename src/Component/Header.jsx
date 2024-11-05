import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import anime from "../assets/anime.jpg"
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(true);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};



const Header = ({ SidebarOpen, setSidebarOpen }) => {

    const isDesktop = useMediaQuery("(min-width:768px)")
    useEffect(() => {
        if (isDesktop == false) {
            setSidebarOpen(false)
        } else {
            setSidebarOpen(true)
        }
    }, [isDesktop])


    if (!SidebarOpen) {
        return (<div className='left-0  top-0  transition ease-in-out delay-150drop-shadow-md h-screen '>
            <MdOutlineMenu onClick={() => setSidebarOpen(!SidebarOpen)} className='cursor-pointer m-3 text-right z-50' size={20} />



        </div>
        )
    }
    return (


        <div className={`w-72 h-screen  z-50 bg-white  md:z-0 fixed top-0 left-0 md:relative`}>

            <p className='cursor-pointer m-3 text-black z-50 font-semibold' onClick={() => setSidebarOpen(!SidebarOpen)}>✖</p>

            <div>


          

                <div className='flex justify-between p-3 cursor-pointer hover:bg-gray-200 m-3 rounded-lg'>
                    <p className='font-semibold text-blue-950'>
                        Home
                    </p>
                    <FaHome size={20} />





                </div>
                <div className='flex justify-between p-3 cursor-pointer hover:bg-gray-200 m-3 rounded-lg'>
                    <p className='font-semibold text-blue-950'>
                        People
                    </p>
                    <IoIosPeople size={20} />





                </div>
                <div className='flex justify-between p-3 cursor-pointer hover:bg-gray-200 m-3 rounded-lg'>
                    <p className='font-semibold text-blue-950'>
                        Billing
                    </p>
                    <FaWallet size={17} />





                </div>
                <div className='flex justify-between p-3 cursor-pointer hover:bg-gray-200 m-3 rounded-lg'>
                    <p className='font-semibold text-blue-950'>
                        User Management
                    </p>
                    <CgProfile size={20} />





                </div>

                <div className='flex justify-between p-3 cursor-pointer hover:bg-gray-200 m-3 rounded-lg'>
                    <p className='font-semibold text-blue-950'>
                        Setting
                    </p>
                    <IoIosSettings size={20} />





                </div>



            </div>
        </div>
    )
}

export default Header