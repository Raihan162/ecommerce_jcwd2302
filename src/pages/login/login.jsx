import { useRef } from "react";
import axios from "axios";
import { redirect, Navigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'

export default function Login(props) {

    const username = useRef()
    const password = useRef()

    if (props.isRedirect.redirect) {
        return <Navigate to='/' />
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="flex justify-center mt-16 font-extrabold text-2xl ">
                Sign in or create an account
            </h1>
            <div className="mt-8 flex flex-col items-center w-2/6 self-center cards drop-shadow-lg rounded-xl mb-20">
                <p className="text-lg self-start ml-20 pt-10 my-dark">
                    <span className="my-main font-bold">*</span> indicates required field
                </p>
                <div>
                    <input ref={username} type='text' placeholder='* Username or email address' required className="border-solid border-2 border-slate-300 rounded-md px-2 py-2 w-3/4 mt-5" />
                    <input ref={password} type='password' placeholder='* Password' required className="border-solid border-2 border-slate-300 rounded-md px-2 py-2 w-3/4 mt-10 mb-10" />
                </div>
                <div className="self-start ml-20 text-lg mb-5">
                    <input type="checkbox" value="" className="w-6 h-6 text-green-600 bg-gray-100 rounded border-gray-300  dark:bg-gray-700 dark:border-gray-600 focus:ring-transparent" />
                    <label className="ml-2 text-md text-gray-900 dark:text-gray-300">Keep me signed in. <span className="my-main font-bold underline hover:no-underline ">Details</span></label>
                </div>
                <div className="self-start ml-20">
                    <p className="my-main underline hover:no-underline font-bold ">
                        Forgot your username?
                    </p>
                    <p className="my-main underline hover:no-underline font-bold mt-1">
                        Forgot your password?
                    </p>
                </div>
                <div className="mt-10 self-end mr-10 ">
                    <button onClick={() => props.myFunc.onLogin(username.current.value, password.current.value)} className="my-bg-main px-7 py-3 rounded-full my-light text-xl mb-4 drop-shadow-lg font-bold">
                        Sign In
                    </button>
                    <button onClick={props.myFunc1.onLoginWithGoogle} className="my-bg-main px-7 py-3 rounded-full my-light text-base mb-10 drop-shadow-lg font-semibold flex items-center">
                        <span className="text-xl mr-2">
                            <FcGoogle />
                        </span>
                        <span>
                            Login with Google
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}