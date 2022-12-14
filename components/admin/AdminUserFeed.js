import axios from "axios"
import { useEffect, useState } from "react"
import setHeader from "../../Atoms/setHeader"
import AdminUser from "./AdminUser"
import AdminDeleteUserModal from "./AdminDeleteUserModal";

const AdminUserFeed = () => {

    const [users, setUsers] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/user/').then((res) => {
            console.log(res.data);
            setUsers(res.data)
        })
    }, [])


    return (
        <div className="overflow-x-auto relative h-fit w-full p-10">
            <div className="p-10">
                <p className="text-4xl font-semibold text-center">Users</p>
            </div>
            <table className="w-full text-sm text-left text-gray-500  shadow-md sm:rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Mobile Number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Gender
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, _i) => (
                            <AdminUser key={_i} idx={_i} id={user._id} name={user.firstName && user.lastName ? user.firstName + ' ' + user.lastName : '--'} email={user.email} mobile={user.mobileNumber} gender={user.Gender} setShowDeleteModal={setShowDeleteModal}
                            />
                        ))
                    }
                </tbody>
            </table>
            {/* {showModal ? (
                <>
                    <ProductModal setShowModal={setShowModal} />
                </>
            ) : null}
            {showEditModal ? (
                <>
                    <EditProductModal setshowEditModal={setshowEditModal} Eid={products[updateProductId]?._id} Ename={products[updateProductId]?.name} Edesc={products[updateProductId]?.desc} Eprice={products[updateProductId]?.price} Eimg_url={products[updateProductId]?.img_url} Ecategory={products[updateProductId]?.category} />
                </>
            ) : null} */}
            {
                showDeleteModal ? (
                    <>
                        <AdminDeleteUserModal setShowDeleteModal={setShowDeleteModal} />
                    </>
                ) : null
            }
        </div>
    )
}

export default AdminUserFeed
