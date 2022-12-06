import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import Invoice from "./invoice/Invoice";
import OrderProducts from "./OrderProducts";
import JWT from 'jsonwebtoken'
import axios from "axios";

const OrdersComp = ({ products, date, status,invoice_id }) => {

    const [address, setAddress] = useState([])
    const [email,setEmail] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JWT.decode(token)
        setEmail(user.userEmail)
        axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/admin/order/address/' + user.userId).then((res) => {
            setAddress(res.data);
        })
    }, [])
    const invoice = {
        invoice_no: invoice_id.substr(-10),
        balance: "$2,283.74",
        company: address.name,
        email,
        phone: address.mobile,
        address: address.address,
        trans_date: date.split('T')[0],
        due_date: "2019-10-12",
        items: products.map((product, i) => ({
            sno: i,
            desc: product.id.desc,
            qty: product.quantity,
            // rate: (Math.random()*1000).toFixed(2),
            rate: product.id.price
        }))
    };
    return (
        <div className="border border-black m-3 rounded-sm">
            <div className="m-1 flex">
                <PDFDownloadLink document={<Invoice invoice={invoice} />} fileName="invoice.pdf" className="inline hover:text-blue-500 rounded-md p-2 space-x-3 items-center">
                    <img className="inline" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/downloadInvoice_e0f744.png" height={30} width={30} />
                    <span className="inline">Download Invoice</span>
                    {
                        ({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>
            </div>
            <p className="text-end p-3 text-gray-600 italic">{date.split('T')[0]}</p>
            {
                products.map((product, i) =>
                (
                    <OrderProducts key={i} img={product.id.img_url} name={product.id.name} price={product.id.price} desc={product.id.desc} status={status} quantity={product.quantity} />
                )
                )
            }
        </div>
    )
}

export default OrdersComp;
