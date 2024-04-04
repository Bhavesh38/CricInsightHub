import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { getProfileAction, registerNewUserAction } from '../../actions/userActions';
import { validateEmail, validatePassword } from '../../utilities/userUtil';
import { setUserEmail } from '../../reduxStore/userSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errorMesage, setErrorMessage] = useState('');

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Password and Confirm Password must be same');
            return;
        }
        if (!validateEmail(formData.email)) {
            setErrorMessage('Invalid Email');
            return;
        }
        if (!validatePassword(formData.password)) {
            setErrorMessage('Invalid Password');
            return;
        }
        const data = await dispatch(registerNewUserAction({ email: formData.email, password: formData.password }));
        if (data.message === 'SUCCESS') {
            dispatch(setUserEmail(formData.email));
            setErrorMessage('');
            setFormData({
                email: '',
                password: '',
                confirmPassword: ''
            });
            navigate('/login');
        } else {
            setErrorMessage(data.message);
        }
    }
    return (
        <div className='w-full h-full flex justify-center items-cente sm:mt-[100px]'>
            <div className='w-full sm:w-1/2 md:w-1/3 sm:border-[1px] border-gray-500 p-2 rounded-[3px] bg-gray-100' >
                <h1 className='text-2xl font-bold text-[24px] text-[#00175f]'>Sign up</h1>
                <div>Already have Account? <Link className='text-[#3f44e1] hover:underline' to='/login'>Sign In</Link></div>
                <form className='flex flex-col gap-4 my-2' onSubmit={handleFormSubmit}>
                    <div className=''>
                        <label htmlFor='email' className='block'>Email*</label>
                        <input required type='email' id='email' className='w-full p-1 px-2 border-[1px] border-gray-500 rounded-[3px] outline-none focus:border-[#3f44e1]' placeholder='Enter your email' onChange={handleFormChange} />
                    </div>
                    <div className=''>
                        <label htmlFor='password' className='block'>Password*</label>
                        <input required type='password' id='password' className='w-full p-1 px-2 border-[1px] border-gray-500 rounded-[3px] outline-none focus:border-[#3f44e1]' placeholder='Password' onChange={handleFormChange} />
                    </div>
                    <div className=''>
                        <label htmlFor='confirmPassword' className='block'>Confirm Password*</label>
                        <input required type='password' id='confirmPassword' className='w-full p-1 px-2 border-[1px] border-gray-500 rounded-[3px] outline-none focus:border-[#3f44e1]' placeholder='Confirm Password' onChange={handleFormChange} />
                    </div>
                    <div className=''>
                        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-[3px]'>Signup</button>
                    </div>
                    {
                        errorMesage ? <div className='text-red-500 text-[14px]'>{errorMesage}</div> : null
                    }
                    <div className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-[3px] p-1 cursor-pointer bg-gray-100 hover:bg-[#fff] mt-3'>
                        <FcGoogle size={22} />
                        <div>Signup with Google</div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register
