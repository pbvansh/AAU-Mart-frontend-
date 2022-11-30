import PDF from "../components/PDF"
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Invoice from "../components/invoice/Invoice";
import { useEffect, useState } from "react";

const Pdf = () => {
    const invoice = {
        id: "5df3180a09ea16dc4b95f910",
        invoice_no: "201906-28",
        balance: "$2,283.74",
        company: "vansh pratik",
        email: "pratik@gmail.com",
        phone: "+91 9687476178",
        address: "922 Campus Road, Drytown, Wisconsin, 1986",
        trans_date: "2019-09-12",
        due_date: "2019-10-12",
        items: [
            {
                sno: 1,
                desc: "ad sunt culpa occaecat qui",
                qty: 5,
                rate: 405.89,
            },
            {
                sno: 2,
                desc: "cillum quis sunt qui aute",
                qty: 5,
                rate: 373.11,
            },
            {
                sno: 3,
                desc: "ea commodo labore culpa irure",
                qty: 5,
                rate: 458.61,
            },
            {
                sno: 4,
                desc: "nisi consequat et adipisicing dolor",
                qty: 10,
                rate: 725.24,
            },
            {
                sno: 5,
                desc: "proident cillum anim elit esse",
                qty: 4,
                rate: 141.02,
            },
        ],
    };
    const [isClient, setIsClient] = useState(false)
    console.log(invoice);
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="min-h-screen">
            {isClient && (
                // <PDFDownloadLink document={<Invoice invoice={invoice} />} fileName="invoice.pdf" className="flex space-x-3 items-center">
                //     <img className="inline" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/downloadInvoice_e0f744.png" height={30} width={30} />
                //     <span>Download Invoice</span>
                //     {
                //         ({ blob, url, loading, error }) =>
                //             loading ? 'Loading document...' : 'Download now!'
                //     }
                // </PDFDownloadLink>
                <PDFViewer width="100%" height="1000">
                    <Invoice invoice={invoice} />
                </PDFViewer>
            )}

        </div>
    )
}

export default Pdf
