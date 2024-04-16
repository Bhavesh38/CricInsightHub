import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { validateEmail, validatePassword } from '../../utilities/userUtil';
import { loginUserAction } from '../../actions/userActions';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errorMesage, setErrorMessage] = useState('');

    const handleCheckBox = () => {
        const rememberMe = document.getElementById('remember').checked;
        setFormData(prevFormData => ({
            ...prevFormData,
            rememberMe: rememberMe
        }));
    }
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setErrorMessage('Invalid Email');
            return;
        }
        if (!validatePassword(formData.password)) {
            setErrorMessage('Invalid Password');
            return;
        }
        const response = await dispatch(loginUserAction(formData));
        if (response.message === 'SUCCESS') {
            setErrorMessage('');
            let expiry = '';
            if (response.expiresIn === '24h') {
                expiry = new Date().getTime() + 1000 * 60 * 60 * 24;
            } else {
                expiry = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;
            }
            if (response.expiresIn === '1h') {
                expiry = new Date().getTime() + 1000 * 60 * 60;
            }
            localStorage.setItem('Batman', JSON.stringify({ token: response.token, expiry }));
            navigate("/");
        } else {
            setErrorMessage(response.message);
        }
    }
    return (
        <div className='w-full h-full flex justify-center items-cente sm:mt-[100px] '>
            <div className='w-full sm:w-1/2 md:w-1/3 sm:border-[1px] border-gray-500 p-2 rounded-[3px] bg-gray-100' >
                <h1 className='text-2xl font-bold text-[24px] text-[#00175f]'>Sign in</h1>
                <div>New to CricInsightHub? <Link className='text-[#3f44e1] hover:underline' to='/register'>Create Account</Link></div>
                <form onSubmit={(e) => handleFormSubmit(e)} className='flex flex-col gap-4 my-2'>
                    <div className=''>
                        <label htmlFor='email' className='block'>Email*</label>
                        <input required type='email' id='email' name='email' value={formData.email} onChange={handleFormChange} className='w-full p-1 px-2 border-[1px] border-gray-500 rounded-[3px] outline-none focus:border-[#3f44e1]' placeholder='Enter your email' />
                    </div>
                    <div className=''>
                        <label htmlFor='password' className='block'>Password*</label>
                        <input required type='password' id='password' name='password' value={formData.password} onChange={handleFormChange} className='w-full p-1 px-2 border-[1px] border-gray-500 rounded-[3px] outline-none focus:border-[#3f44e1]' placeholder='Password' />
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <input type='checkbox' id='remember' name='remember' onChange={handleCheckBox} />
                            <label htmlFor='remember' className='ml-1'>Remember me</label>
                        </div>
                        <Link to='/forgot-password' className='text-[#3f44e1] hover:underline'>Forgot Password?</Link>
                    </div>

                    <div className=''>
                        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-[3px]'>Login</button>
                    </div>
                    {
                        errorMesage ? <div className='text-red-500 text-[14px]'>{errorMesage}</div> : null
                    }
                    <div className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-[3px] p-1 cursor-pointer bg-gray-100 hover:bg-[#fff] mt-3'>
                        <FcGoogle size={22} />
                        <div>Signin with Google</div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
