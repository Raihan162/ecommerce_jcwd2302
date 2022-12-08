import Pic1 from './../../supports/assets/carousel-1.webp'
import Pic2 from './../../supports/assets/carousel-2.webp'
import Pic3 from './../../supports/assets/carousel-3.webp'
import Iced from './../../supports/assets/iced.webp'
import Hot from './../../supports/assets/hot.webp'
import Delta from './../../supports/assets/deltaSkymiles.jpg'

export default function Home() {

    return (
        <div className="flex flex-row">
            <div className='border basis-2/5 h-screen flex items-center bg-neutral-50'>
                <div className="pl-32 pb-28 font-bold text-3xl">
                    <h1>Joy to you 🎁</h1>
                </div>
            </div>
            <div className="basis-3/5">
                <div className="pl-12 pt-8 mb-6">
                    <h1 className='font-bold'>PURWADHIKA® REWARDS</h1>
                    <div className="pl-2 pt-4 font-semibold text-xl flex">
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic1} alt='Carousel-1' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Let us treat you—earn and redeem Stars for free drinks, food and more.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic2} alt='Carousel-2' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Customize your order in the app and pick it up when it’s ready.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic3} alt='Carousel-3' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Stop in on your birthday for a special treat on the house.
                            </p>
                        </div>
                    </div>
                    <button className='my-bg-dark my-light rounded-full px-3 py-1 mt-4 ml-3 font-semibold'>
                        Join now
                    </button>
                    <button className='my-dark rounded-full px-3 py-1 ml-3' style={{ border: '1px solid black' }} >
                        Learn more
                    </button>
                </div>
                <div className="bg-sky-50 pb-20">
                    <div className='flex flex-col items-center pt-12'>
                        <div className='card px-1 py-3 w-7/12 shadow-sm mb-4 rounded-2xl'>
                            <div>
                                <h2 className='text-3xl font-bold pt-2 px-2 mb-3'>
                                    Answer a few questions to find something new
                                </h2>
                                <hr />
                                <p className='text-md font-normal pt-2 px-2'>
                                    What type of drink are you looking for?
                                </p>
                            </div>
                            <div>
                                <div className='bg-emerald-100 mx-2 mt-3 p-3 rounded-xl flex justify-between'>
                                    <div className='flex flex-col justify-center'>
                                        <h4 className='font-bold text-lg'>
                                            Iced
                                        </h4>
                                        <p className='font-medium text-lg'>
                                            Cool off and uplift
                                        </p>
                                    </div>
                                    <div>
                                        <img src={Iced} alt='Iced Drinks' className='w-12' />
                                    </div>
                                </div>
                                <div className='bg-emerald-100 mx-2 mt-3 p-3 rounded-xl flex justify-between'>
                                    <div className='flex flex-col justify-center'>
                                        <h4 className='font-bold text-lg'>
                                            Hot
                                        </h4>
                                        <p className='font-medium text-lg'>
                                            Warm up and get going
                                        </p>
                                    </div>
                                    <div>
                                        <img src={Hot} alt='Iced Drinks' className='w-12 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card w-7/12 shadow-sm rounded-2xl mb-14'>
                            <img src={Delta} alt='Delta Skymiles' />
                            <h2 className='text-xl font-semibold px-3 mt-10'>
                                Closer to moments that matter
                            </h2>
                            <p className='px-3 mt-3'>
                                Add extra cheer this holiday season by joining Starbucks® Rewards, linking it to Delta SkyMiles® to unlock 1 mile per $1 spent at Starbucks (excludes taxes & tips).
                            </p>
                            <div className='flex justify-end'>
                                <button className=' my-bg-dark my-light rounded-full px-3 py-2 mx-4 mt-5 mb-3'>
                                    Sign up + link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}