import axios from "axios";

export default function Cart() {

    return (
        <div>
            <div className="flex ">
                <div className="basis-2/5 my-bg-main h-screen">
                    <div>
                        <h1 className="text-white font-bold text-2xl pl-20 pt-20">
                            Order Lists
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col basis-3/5 items-center">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Order Summary
                        </h1>
                    </div>
                    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md">
                        <image className="object-cover rounded-t-lg h-40 bg-red-500 " src="/docs/images/blog/image-4.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}