import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CricHubNavbarContent, NavbarContent } from '../../utilities/utilityContent';
import { useSelector, useDispatch } from 'react-redux'
import { setNavbarActive } from '../../reduxStore/profileSlice';
import { getUserDetailsAction } from '../../actions/profileActions';
const CricHubNavbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { navbarActive } = useSelector(state => state.profileSlice);

    useEffect(() => {
        const url = window.location.href;
        const { pathname } = new URL(url);
        dispatch(setNavbarActive(pathname.slice(1)))
    }, []);

    return (
        <div className='fixed w-[100vw] top-0 p-2 bg-[#00175f] text-gray-200 flex justify-between items-center border-b-[1px] border-b-gray-300 bg-opacity-60'>
            <div>
                <Link to='/'>
                    Logo
                </Link>
            </div>
            <div className='flex items-center gap-3 font-semibold sm:pr-3'>
                {
                    CricHubNavbarContent.map((item, index) => {
                        return (
                            <Link onClick={() => dispatch(setNavbarActive(item.title))} to={item.path} key={index} className={`flex flex-col items-center gap-1 px-[6px] py-[2px] ${navbarActive.toLowerCase() === item.title.toLowerCase() ? 'text-[#00175f] bg-gray-100' : 'text-gray-200 border-[1px] border-gray-200 hover:bg-gray-300 hover:text-[#00175f]'} rounded-[2px]`}>
                                {item.title}
                            </Link>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default CricHubNavbar
