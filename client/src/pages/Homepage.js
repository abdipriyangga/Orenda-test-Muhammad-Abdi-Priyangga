import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import iconPlus from '../assets/icons/plus.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';
export const Homepage = () => {
    const [data, setData] = useState('');
    const navigate = useNavigate();
    const dataFetch = () => {
        axios.get(`http://localhost:8000/customers`).then((response) => {
            const data = response.data.results
            setData(data)
        }).catch((err) => {
            return err
        })
    }
    useEffect(() => {
        dataFetch()
    }, [])
    const navigateToAddCustomer = () => {
        navigate('/addCustomer')
    }
    return (
        <>
            <main className='flex'>
                <div >
                    <Sidebar />
                </div>
                <div className='p-3'>
                    <div className='mb-10 ml-10'>
                        <h2 className='text-lg font-bold text-black'>Customers Page</h2>
                        <p className='text-sm font-medium text-gray-700'>Main Menu</p>
                    </div>
                    <div className='w-[70rem] h-[50rem] bg-white ml-44 shadow-lg p-6 rounded' >
                        <div className='flex justify-between'>
                            <h2 className='text-black text-xl font-bold'>All Customers</h2>
                            <button class="bg-red-700 hover:bg-red-500 text-white font-normal py-2 px-4 rounded inline-flex items-center" onClick={navigateToAddCustomer}>
                                <img src={iconPlus} width={15} height={15} className='mr-2 text-white' />
                                <span>Add New Customer</span>
                            </button>
                        </div>
                        <div className="flex flex-col mt-10">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Customer Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Phone Number
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Email Address
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Address
                                                    </th>
                                                    <th
                                                        colSpan={2}
                                                        scope="col"
                                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {/* {data.map(person => (
                                                    <tr key={person.email}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{person.phone}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{person.email}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{person.address}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">Edit</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">Delete</div>
                                                        </td>
                                                    </tr>
                                                ))} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
