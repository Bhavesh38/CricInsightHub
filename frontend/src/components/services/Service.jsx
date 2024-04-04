
import { useState } from 'react'
import { ServicesContent } from '../../utilities/utilityContent'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <div className='flex items-center justify-center w-full h-[calc(100vh-45px)]'>
            <div className='w-full sm:w-fit border-0 sm:border-[1px] rounded-[3px] bg-gray-100 border-gray-600 shadow shadow-gray-400 p-2 flex flex-col gap-2'>

                {
                    ServicesContent.map((item, index) => {
                        return (
                            <Link to={item.path} key={index} className='underline rounded-[2px] px-[12px] py-[1px] font-[500] text-[#3f4589] text-[22px]'>
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Service
