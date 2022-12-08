import './register.css'

import { useRef, useState } from 'react';

import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from "react-router-dom";

export default function Register(props) {
    const [disabledButton, setDisabledButton] = useState(false)
    const [message, setMessage] = useState('')

    const username = useRef()
    const email = useRef()
    const password = useRef()

    let onSubmit = async () => {
        try {
            // Step1. Get Input Value
            let inputUsername = username.current.value
            let inputEmail = email.current.value
            let inputPassword = password.current.value

            // Steep2. Validate Input Value
            if (inputUsername.length === 0 || inputEmail.length === 0 || inputPassword.length === 0) throw { message: 'Inputan Belum Lengkap' }

            if (inputPassword.length < 8) throw { message: 'Password Invalid' }

            let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
            if (!character.test(inputPassword)) throw { message: 'Password must contains number' }

            setDisabledButton(true)
            let checkEmail = await axios.get(`https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/users?email=${inputEmail}`)
            let checkUsername = await axios.get(`https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/users?username=${inputUsername}`)

            if (checkEmail.data.length === 0 && checkUsername.data.length === 0) {
                // Post
                let register = await axios.post('https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/users', { username: inputUsername, email: inputEmail, password: inputPassword })
                username.current.value = ''
                email.current.value = ''
                password.current.value = ''
                toast.success('Register Success.')
                setMessage('')
            } else {
                throw { message: 'Email/username already register' }
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setDisabledButton(false)
        }
    }

    if (props.isRedirect.redirect) {
        return <Navigate to='/' />
    }

    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="my-fs-25 font-bold">
                Create an account
            </h1>
            <h1 className="my-fs-15 my-grey mt-5 font-bold">
                PURWADHIKA® REWARDS
            </h1>
            <p className="my-grey mt-3" style={{ maxWidth: '600px', textAlign: 'center' }}>
                Join Purwadhika Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
            </p>
            <div className="cards mt-20 px-20 py-10 w-3/6 rounded-md flex flex-col items-end">
                <h1 className='font-bold my-fs-25 self-start mb-3'>
                    Personal Information
                </h1>
                <input ref={username} type='text' placeholder='Input your username' className='py-2 px-2 w-100 rounded-md' style={{ border: '1px solid grey' }} />
                <h1 className='font-bold my-fs-25 self-start mt-3'>
                    Account Security
                </h1>
                <input ref={email} type='text' placeholder='Input your email' className='py-2 px-2 w-100 rounded-md my-3' style={{ border: '1px solid grey' }} />
                <input ref={password} type='password' placeholder='Input your password' className='py-2 px-2 w-100 rounded-md' style={{ border: '1px solid grey' }} />
                <button disabled={disabledButton} onClick={onSubmit} className='my-bg-main my-light px-3 py-3 rounded-full mt-3 hover:shadow-lg'>
                    Register now
                </button>
            </div>
            <Toaster />
        </div>
    )
}
