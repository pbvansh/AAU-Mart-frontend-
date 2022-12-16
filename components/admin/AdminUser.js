

const AdminUser = ({ id, name, email, gender, mobile, DUI, setShowDeleteModal }) => {
    return (
        <tr className="bg-white border-b  hover:bg-gray-50">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex space-x-8 items-center">
                {name}
            </th>
            <td className="py-4 px-6">
                {email ? email : '--'}
            </td>
            <td className="py-4 px-6">
                {mobile ? mobile : '--'}
            </td>
            <td className="py-4 px-6">
                {gender ? gender : '--'}
            </td>
            <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600  hover:underline" onClick={() => { DUI(id); setShowDeleteModal(true) }}>Delete</a>
            </td>
        </tr>
    )
}

export default AdminUser
