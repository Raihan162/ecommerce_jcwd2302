import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function DetailProduct() {
    const productId = useParams()
    const selectSize = useRef()
    const selectTopping = useRef()
    const selectSugar = useRef()
    const selected = useRef()
    const [data, setData] = useState(null)
    const [sizeToShow, setSizeToShow] = useState(0)
    const [quantity, setQuantity] = useState(0)

    let onGetData = async () => {
        try {
            let response = await axios.get(`https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/products/${productId.id}`)
            setData(response.data)
        } catch (error) {

        }
    }

    let onSelectSize = () => {
        let indexSelectedSize = selectSize.current.value
        console.log(indexSelectedSize)
        setSizeToShow(indexSelectedSize)
    }

    let onAddOrder = async () => {
        try {
            let dataToSend = {
                idProduct: data.id,
                indexSize: parseInt(selectSize.current.value),
                indexTopping: parseInt(selectTopping.current.value),
                indexSugar: parseInt(selectSugar.current.value),
                quantity: 1,
                userId: parseInt(localStorage.getItem('token'))
            }
            let checkExist = await axios.get(`https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/cart?idProduct=${data.id}`)

            if (checkExist.data.length === 0) {
                let response = await axios.post('https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/cart', dataToSend)
            } else {
                let newQuantity = checkExist.data[0].quantity + 1
                let update = await axios.patch(`https://my-json-server.typicode.com/Raihan162/jsonserver-jcwd2302/cart/${checkExist.data[0].id}`, { quantity: newQuantity })
                console.log(update)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    if (data === null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <div>
                Menu Atas
            </div>
            <div className="flex items-center my-bg-main" style={{ height: '300px' }}>
                <div className="basis-2/5 flex justify-center">
                    <img src={data.image} alt='icon' className='rounded-full' style={{ width: '200px', height: '200px' }} />
                </div>
                <div className="basis-3/5 my-light">
                    <h1 className="my-fs-30 font-bold">
                        {data.name}
                    </h1>
                    <h1 className="my-fs-25 mt-2">
                        {data.size[sizeToShow].calories} Calories
                    </h1>
                    <h1 className="my-fs-25 mt-2">
                        Rp. {(data.size[sizeToShow].price).toLocaleString()}
                    </h1>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="basis-2/5 px-24">
                    {/* {
                        data.category === 0 ?
                            <> */}
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Size Options
                    </h1>
                    <select ref={selectSize} onClick={onSelectSize} className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            data.size.map((value, index) => {
                                return (
                                    <option key={index} value={index}>{value.option}</option>
                                )
                            })
                        }
                    </select>
                    {/* </>
                            :
                            null
                    } */}
                </div>
                <div className="basis-2/5">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Topping
                    </h1>
                    <select ref={selectTopping} id="countries" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {data.topping.map((value, index) => {
                            return (<option value={index}>{value}</option>)
                        })}
                    </select>

                    {
                        data.sugar ?
                            <>
                                <h1 className="my-fs-25 font-bold pb-2 mt-5" style={{ borderBottom: '3px solid silver' }}>
                                    Sugar
                                </h1>
                                <select ref={selectSugar} id="countries" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {data.sugar.map((value, index) => {
                                        return (<option value={index}>{value}</option>)
                                    })}
                                </select>
                            </>
                            :
                            null
                    }
                </div>
            </div>
            {
                localStorage.getItem('tokenUid') ?
                    <div className="flex justify-end px-24 relative">
                        <button onClick={onAddOrder} className="my-bg-main my-light px-3 py-3 rounded-full">
                            Add to order
                        </button>
                        <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-700 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    :
                    null
            }
        </div>
    )
}