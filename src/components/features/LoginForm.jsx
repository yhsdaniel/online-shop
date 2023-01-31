import React, { useState, useEffect } from 'react';
import { getUser } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {token} = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => {
        sessionStorage.setItem('user', username)
        dispatch(getUser({username, password}))
        navigate('/')
    }

    return (
        <div>
            <section className="h-screen">
                <div className="h-full text-gray-800">
                    <div
                        className="flex items-center flex-wrap h-full g-6">
                        <div className="bg-login flex xl:justify-center lg:justify-between justify-center items-center grow-0 shrink-1 md:shrink-0 basis-auto h-full xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <div className='w-5/6 flex flex-col text-center font-mono'>
                                <span className='text-8xl text-white'>Dans</span>
                                <span className='text-4xl text-white'>Express</span>
                                <span className='text-2xl mt-8 text-white'>
                                    We Has Things What You Need
                                </span>
                                <span className='text-white'>
                                    You just stay in home and get the fast order.
                                </span>
                            </div>
                        </div>
                        <div className="flex xl:justify-center lg:justify-between justify-center items-center h-full xl:w-6/12 lg:w-6/12 md:w-8/12 mb-12 md:mb-0">
                            <form>
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-center items-start flex-col mb-4">
                                    <div className="form-group form-check mb-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                                        >Remember me</label>
                                    </div>
                                    <div className='flex justify-end items-center'>
                                        <a href="#!" className="text-gray-800 text-sm italic">Forgot password?</a>
                                    </div>
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="button"
                                        className="inline-block w-full py-2 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out shadow-indigo-500/40"
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <a
                                            href="#!"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginForm