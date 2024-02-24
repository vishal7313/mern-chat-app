import React from 'react'
import { GenderCheck } from './GenderCheck'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender })
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-500'>
                    SignUp <span className='text-blue-500'> ChatApp </span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter fullname"
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className='w-full input input-bordered h-10'
                            value={inputs.userName}
                            onChange={(e) => setInputs({...inputs, userName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter confirm password"
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheck onCheckboxChange = { handleCheckboxChange } selectedGender={ inputs.gender }/>

                    <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account? 
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
