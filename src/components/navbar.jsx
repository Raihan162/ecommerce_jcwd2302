// Logo
import Logo from './../supports/assets/logo.png'

import './navbar.css'

import { MdLocationOn, MdOutlineAccountCircle } from 'react-icons/md'

import { Link, useLocation } from 'react-router-dom'

import './../supports/stylesheets/utilities.css'

export default function Navbar(props) {
    const location = useLocation() // Digunakan untuk mendapatkan pathname
    return (
        <div>
            <div className='bg-slate-50 text-slate-100 navbar flex px-10 h-24'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src={Logo} width='50px' height='50px' alt='Logo Purwadhika' />
                    </Link>
                    {
                        location.pathname === '/register' ?
                            null
                            :
                            <>
                                <span className='pl-10 font-bold '>
                                    <Link to='/menu' className='hover:text-green-800 hover:no-underline'>
                                        ORDER
                                    </Link>
                                </span>
                                <span className='pl-10 font-bold hover:text-green-800'>
                                    CARDS
                                </span>
                                <span className='pl-10 font-bold hover:text-green-800'>
                                    GIFT
                                </span>
                            </>
                    }

                </div>
                <div className='flex'>
                    {
                        location.pathname === '/register' ?
                            null
                            :
                            <>
                                <div className='flex items-center hover:text-green-800'>
                                    <MdLocationOn />
                                    <span className='mr-10 font-bold'>
                                        Find a store
                                    </span>
                                </div>
                                {
                                    props.data.username ?
                                        <div className='flex items-center'>
                                            <div className='font-bold text-xl'>
                                                {props.data.username}
                                            </div>
                                            <div className='my-fs-25 mt-1 ml-1' >
                                                <MdOutlineAccountCircle onClick={props.myFunc.onLogoutFirebase} />
                                            </div>
                                        </div>
                                        :
                                        <>
                                            <button className='my-bg-dark my-light rounded-full mr-3 px-3 py-2'>
                                                <Link to='/login' className='hover:no-underline my-light '>
                                                    Sign in
                                                </Link>
                                            </button>
                                            <button className='my-dark rounded-full px-3 py-2' style={{ border: '1px solid black' }}>
                                                <Link to='/register' className='hover:no-underline font-medium'>
                                                    Join now
                                                </Link>
                                            </button>
                                        </>
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    )
}