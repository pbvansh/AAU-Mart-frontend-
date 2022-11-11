import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { orderUpdatedState } from '../../Atoms/adminProductAtom';
import setHeader from '../../Atoms/setHeader';
import AddressModal from './AddressModal';
import AdminCatogoryModal from './AdminCatogoryModal';
import AdminOrderComp from './AdminOrderComp';
import StatusModal from './StatusModal';

const AdminOrder = () => {

    const [showStatusModal, setshowStatusModal] = useState(false);
    const isOrderUpdated = useRecoilValue(orderUpdatedState)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/admin/orders', setHeader()).then((res) => {
            // console.log(res.data);
            setOrders(res.data)
        })
    }, [isOrderUpdated])

    return (
        <div className='p-10 flex-1 bg-gray-100'>
            <div className="p-10">
                <p className="text-4xl font-semibold text-center">Order Status</p>
            </div>
            <section className='grid grid-cols-4'>
                <div className='flex flex-col items-center justify-center m-5 bg-white h-40 rounded-md'>
                    <p className='font-bold text-2xl  text-gray-600 m-2'>Order Placed</p>
                    <p className='font-semibold text-lg'>{orders.length}</p>
                </div>
                <div className='flex flex-col items-center justify-center m-5 bg-white h-40 rounded-md'>
                    <p className='font-bold text-2xl text-gray-600 m-2'>Preparing</p>
                    <p className='font-semibold text-lg '>1</p>
                </div>
                <div className='flex flex-col items-center justify-center m-5 bg-white h-40 rounded-md'>
                    <p className='font-bold text-2xl text-gray-600 m-2'>Shipped</p>
                    <p className='font-semibold text-lg '>0</p>
                </div>
                <div className='flex flex-col items-center justify-center m-5 bg-white h-40 rounded-md'>
                    <p className='font-bold text-2xl text-gray-600 m-2'>Delivered</p>
                    <p className='font-semibold text-lg '>0</p>
                </div>
            </section>
            <section className='bg-white rounded-md p-5'>
                <p className='p-5 text-xl'>Order Listing</p>
                <table className="w-full text-left  sm:rounded-lg">
                    <thead className="text-md text-gray-700 font-normal">
                        <tr>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300">
                                Order
                            </th>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300">
                                Purchase On
                            </th>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300 max-w-sm">
                                Ship To
                            </th>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300">
                                Items
                            </th>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300">
                                Total Price
                            </th>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6 border-[1px] border-gray-300">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, _i) => (
                                <AdminOrderComp key={_i} idx={_i} user_id={order.user_id} order_id={order._id} date={order.createdAt.split('T')[0]} products={order.products} total={order.total} status={order.status} setshowStatusModal={setshowStatusModal} />
                            ))
                        }
                    </tbody>
                </table>
            </section>
            {
                showStatusModal ?
                    <StatusModal setshowStatusModal={setshowStatusModal} />
                    : null
            }
            
        </div>
    )
}

export default AdminOrder
