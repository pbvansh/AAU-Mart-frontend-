import { useRecoilState } from "recoil";
import { orderStatusState } from "../../Atoms/adminProductAtom";

const AdminOrderComp = ({ idx, date, products, total, status, setshowStatusModal }) => {
    const getBG = () => {
        if (status == 'Order Placed') return 'bg-[#e3c05f]';
        else if (status == 'Preparing'.trim()) return 'bg-[#f54983]';
        else if (status == 'Shipped'.trim()) return 'bg-[#5f46f0]';
        else if (status == 'Delivered'.trim()) return 'bg-[#74db5c]';
        else return 'bg-[#29cf8a]'
    }

    const [orderStatus, setOrderStatus] = useRecoilState(orderStatusState)
    const statusList = ['Order Placed', 'Preparing', 'Shipped', 'Delivered'];
    const idx = statusList.findIndex((value)=>value==orderStatus)

    return (
        <tr className="bg-white border-b  hover:bg-gray-50">
            <th scope="row" className="py-4 px-6 border-[1px] border-gray-300">
                {idx + 1}
            </th>
            <td className="py-4 px-6 border-[1px] border-gray-300">
                {date}
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
                <span className={`px-3 py-2 ${getBG()} rounded-full font-semibold`}>{status}</span>
            </td>
            <td className="py-4 px-6 border-[1px] border-gray-300 text-center">
                <p onClick={() => { setshowStatusModal(true); setOrderStatus(status) }} className="px-3 py-2 rounded-full bg-white shadow-xl hover:shadow-2xl inline cursor-pointer">view</p>
            </td>
        </tr>
    )
}

export default AdminOrderComp
