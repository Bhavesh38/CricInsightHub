import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const UserProfileSettings = () => {
    const navigate=useNavigate();
    const logoutCurrentSession = () => {
        localStorage.setItem('Batman',null);
        navigate('/login');
    }
    return (
        <div className='w-full p-0 sm:p-2 flex flex-col'>
            <button type='button' className='w-full bg-[#413d7b] text-gray-100 rounded-[3px] py-[2px] px-[4px] text-center hover:shadow hover:shadow-gray-400' title='Logou session.' onClick={logoutCurrentSession}>Log out</button>
        </div>
    )
}

export default UserProfileSettings
