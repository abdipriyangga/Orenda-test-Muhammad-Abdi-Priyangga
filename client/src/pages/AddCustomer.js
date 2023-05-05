import React from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom/dist';

const AddCustomer = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/')
    }
    return (
        <>
            <main className='flex'>
                <div >
                    <Sidebar />
                </div>
                <div className='p-3'>
                    <div className='mb-3 ml-10'>
                        <h2 className='text-lg font-bold text-black'>Customers Page</h2>
                        <button onClick={navigateToHome}>
                            <span className='hover:text-blue-700 text-sm font-medium text-red-700'>Main Menu </span>
                        </button>
                        <span> > </span>
                        <span className='text-sm font-medium text-gray-700'>Add Customer</span>
                    </div>
                    <div className='w-[70rem] h-[50rem] bg-white ml-44 shadow-lg p-6 rounded' >
                        <div className='flex justify-between'>
                            <h2 className='text-black text-lg font-bold'>Customer Information</h2>
                        </div>
                        <form class="w-full max-w-5xlxl mt-10">
                            <div className='flex w-full'>
                                <div className='w-full'>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                Customer Name
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Customer name" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                Phone Number
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone number" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                Email Address
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="doe@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-full mx-3 mb-6">
                                    <div className="w-full h-96 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Address
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="textarea" placeholder="Address" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-7 justify-end'>
                                <button class="flex-shrink-0 w-48 font-semibold bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Cancel
                                </button>
                                <button class="flex-shrink-0 w-48 font-semibold bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Create New
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddCustomer