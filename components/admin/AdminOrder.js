import React from 'react'

const AdminOrder = () => {
  return (
    <div className='p-5 flex-1'> 
     <table className="w-full text-sm text-left   sm:rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="py-3 px-6 border border-black">
                            Product
                        </th>
                        <th scope="col" className="py-3 px-6 border border-black">
                            Description
                        </th>
                        <th scope="col" className="py-3 px-6 border border-black">
                            Category
                        </th>
                        <th scope="col" className="py-3 px-6 border border-black">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        products?.map((pro, _i) => (
                            <AdminProduct key={_i} idx={_i} id={pro._id} name={pro.name} desc={pro.desc} cat={pro.category} price={pro.price} imgurl={pro.img_url} setshowEditModal={setshowEditModal} setUpadateProductId={setUpadateProductId} setDeleteProductId={setDeleteProductId} setShowDeleteModal={setShowDeleteModal} />
                        ))
                    } */}
                </tbody>
            </table>
    </div>
  )
}

export default AdminOrder
