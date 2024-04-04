import { useState } from 'react'
import NewPostModal from './NewPostModal';

const CreateNewPost = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='flex items-center gap-3 w-ful'>
            <span onClick={() => setIsModalOpen(true)} className='flex-grow py-[2px] px-[12px] rounded-[19px] border-[1px] border-gray-500 bg-gray-300 hover:bg-gray-200 cursor-pointer'>Create new post</span>

            {
                isModalOpen && (
                    <NewPostModal setIsModalOpen={setIsModalOpen} />
                )
            }
        </div>
    )
}

export default CreateNewPost
