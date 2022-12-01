import { DotsVerticalIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { orderIdForUpdateOrderState, orderStatusState } from "../../Atoms/adminProductAtom";
import AddressModal from "./AddressModal";

const AdminOrderComp = ({ idx, date, products, total, status, setshowStatusModal, order_id, user_id }) => {
    const getBG = () => {
        if (status == 'Order Placed') return 'bg-[#d6ab35]';
        else if (status == 'Preparing'.trim()) return 'bg-[#f54983]';
        else if (status == 'Shipped'.trim()) return 'bg-[#794ef2]';
        else if (status == 'Delivered'.trim()) return 'bg-[#258a2c]';
        else return 'bg-[#29cf8a]'
    }

    const [showAddressModal, setshowAddressModal] = useState(false);
    const [orderStatus, setOrderStatus] = useRecoilState(orderStatusState)
    const [orderIdforUpdate, setOrderIdforUpdate] = useRecoilState(orderIdForUpdateOrderState)
    const [address, setAddress] = useState([])
    // const idx = statusList.findIndex((value)=>value==orderStatus)

    useEffect(() => {
        axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/admin/order/address/' + user_id).then((res) => {
            setAddress(res.data)
        })
    }, [])

    return (
        <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th scope="row" className="py-4 px-6 border-[1px] border-gray-300">
                {idx + 1}
            </th>
            <td className="py-4 px-6 border-[1px] border-gray-300">
                {date}
            </td>
            <td className="py-4 px-6 border-[1px] border-gray-300 relative max-w-sm">
                {address && (
                    <>
                        <span onClick={() => setshowAddressModal(true)} className="absolute right-0 m-3 hover:bg-gray-300 cursor-pointer rounded-md">
                            <DotsVerticalIcon className="h-5 my-1" />
                        </span>
                        {address.address}<br />
                        {address.city},{address.state} - <span className="font-semibold">{address.pincode}</span>
                    </>
                    )
                }
            </td>
            <td className="py-4 px-6 border-[1px] border-gray-300">
                <ul>
                    {
                        products.map((prod, i) => (
                            <li key={i}>{`${i + 1}) ${prod.id.name}`}</li>
                        ))
                    }
                </ul>
            </td>
            <td className="py-4 px-6 border-[1px] border-gray-300">
                {total}
            </td>
            <td className="py-4 px-6 border-[1px] border-gray-300">
                <span className={`px-3 py-2 ${getBG()} rounded-full font-semibold text-white`}>{status}</span>
            </td>
            <td className="py-4 px-6 border-[1px] border-gray-300 text-center">
                <p onClick={() => {
                    setOrderIdforUpdate([order_id]);
                    setshowStatusModal(true);
                    setOrderStatus(status);
                }} className="px-3 py-2 rounded-full bg-white shadow-xl hover:shadow-2xl inline cursor-pointer">view</p>
            </td>
            {
                showAddressModal ?
                    <AddressModal address={address} setshowAddressModal={setshowAddressModal} />
                    : null
            }
        </tr>
    )
}

export default AdminOrderComp
