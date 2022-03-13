import { React, useState } from 'react'
import '../index.css'
import { FaFacebookMessenger, FaHome, FaPlaceOfWorship, FaUserAlt } from "react-icons/fa"
import { MdHomeRepairService } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";



function Nav() {

    const [active, isactive] = useState('');

    return (
        <>
            {/********************************Floating Nav Section **************************************/}
            <nav className=' fixed flex flex-initial bg-[rgba(0,0,0,0.3)]  p-2 lg:opacity-20 xl:opacity-20 md:opacity-20 hover:opacity-100  w-max space-x-10 z-50  bottom-2 left-[50%] transform translate-x-[-50%] right-0 rounded-lg' >
                <a href='#' className={`${active === '#' ? 'active:bg-orange-500' : ''} hover:bg-orange-700 hover:rounded-full p-2 `} onClick={() => isactive('')}><FaHome /></a>
                <a href='#about' className={`${active === '#about' ? 'active:bg-orange-500' : ''} hover:bg-orange-700 hover:rounded-full p-2 `} onClick={() => isactive('#about')} ><FaUserAlt /></a>
                <a href='#experiance' className={`${active === '#experiance' ? 'active:bg-orange-500' : ''} hover:bg-orange-700 hover:rounded-full p-2 `} onClick={() => isactive('#experiance')}><FaPlaceOfWorship /></a>
                <a href='#services' className={`${active === '#services' ? 'active:bg-orange-500' : ''} hover:bg-orange-700 hover:rounded-full p-2 `} onClick={() => isactive('#services')} ><MdHomeRepairService /></a>
                <a href='#contact' className={`${active === '#contact' ? 'active:bg-orange-500' : ''} hover:bg-orange-700 hover:rounded-full p-2 `} onClick={() => isactive('#contact')} ><AiFillMessage /></a>
            </nav>
        </>

    )
}

export default Nav