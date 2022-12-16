import { async } from "@firebase/util"
import { XIcon } from "@heroicons/react/solid"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { basketAtomState } from "../Atoms/basketAtom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const BagItem = ({ item, idx }) => {
    console.log(idx);
    const [total, setTotale] = useState(0)
    const [items, setItem] = useRecoilState(basketAtomState)

    useEffect(() => {
        let num = Number(item.quantity) * Number(item.product_id.price)
        setTotale(num);
    }, [items])

    async function addOneItem(q) {
        const idx = items.findIndex(bagItem => bagItem._id == item._id)
        let newItems = [...items]
        let obj = { ...newItems[idx] }
        if (q > item.product_id.stock) {
            toast.warning(`only ${item.product_id?.stock} item in stock`, { autoClose: 2000 });
            obj.quantity = Number(item.product_id.stock);
            document.getElementById(`qntIn${idx}`).value = Number(item.product_id.stock);
        } else if (q == '') {
            toast.warning('Please enter valid quantity', { autoClose: 2000 })
        } else if (q !== undefined) {
            obj.quantity = q;
            obj.total = Number(obj.quantity) * Number(item.product_id.price)
            newItems[idx] = obj;
            setItem(newItems)
            await axios.put(`https://aaumartbackend.pratikvansh.repl.co/api/cart/${item._id}`, {
                quantity: obj.quantity,
            })
        } else {
            if (obj.quantity < item.product_id?.stock) {
                obj.quantity++;
                obj.total = Number(obj.quantity) * Number(item.product_id.price)
                newItems[idx] = obj;
                setItem(newItems)
                await axios.put(`https://aaumartbackend.pratikvansh.repl.co/api/cart/${item._id}`, {
                    quantity: obj.quantity,
                })
            } else {
                toast.warning(`only ${item.product_id?.stock} item in stock`, { autoClose: 2000 });
                document.getElementById(`qntIn${idx}`).value = Number(item.product_id.stock);
            }
        }
    }

    async function removeItem() {
        const index = items.findIndex((item, i) => i === idx)
        let newItem = [...items];
        if (index >= 0) {
            newItem.splice(index, 1)
            setItem(newItem)
            await axios.delete(`https://aaumartbackend.pratikvansh.repl.co/api/cart/${item._id}`)
        } else {
            console.warn(`Cant remove product as its not in`)
        }

    }

    async function removeOne() {
        const idx = items.findIndex(bagItem => bagItem._id == item._id)
        let newItems = [...items]
        let obj = { ...newItems[idx] }
        obj.quantity--;
        if (obj.quantity == 0) {
            removeItem()
        } else {
            newItems[idx] = obj;
            setItem(newItems)
            await axios.put(`https://aaumartbackend.pratikvansh.repl.co/api/cart/${item._id}`, {
                quantity: obj.quantity,
            })
        }
    }

    const getStock = (n) => {
        if (n == '0') {
            return (
                <p className="font-semibold text-sm text-red-500">
                    sold out
                </p>)
        }
        if (n < 10) {
            return (
                <p className="text-black"> Only<span className="text-red-500 font-semibold">{` ${n} `}</span>unit left</p>
            )
        }
    }

    return (
        <div className="grid grid-cols-6 p-3 items-center m-2">
            <div className="col-span-2 space-x-10 flex items-center">
                <img src={item.product_id?.img_url} height={80} width={80} />
                <div className="space-y-1">
                    <p className="font-semibold">{item.product_id.name}</p>
                    {
                        getStock(item.product_id?.stock)
                    }
                </div>
            </div>
            <div>
                <p className="bg-gray-100 inline p-2"> <span className="text-orange-500">₹ </span>{item.product_id.price}</p>
            </div>
            <div className="flex space-x-2">
                <span onClick={removeOne} className="bg-gray-100 px-3 cursor-pointer">-</span>
                <div className="max-w-xs">
                    <input type='text' id={`qntIn${idx}`} defaultValue={item.quantity} onChange={(e) => addOneItem(e.target.value)} className="border max-w-[50px] focus:outline-none focus:border-black rounded-sm" />
                </div>
                <span onClick={() => addOneItem()} className="bg-gray-100 px-2 cursor-pointer">+</span>
            </div>
            <p> <span className="text-green-500">₹</span> {total}</p>
            <XIcon className="w-5 cursor-pointer text-gray-500" onClick={removeItem} />
        </div>
    )
}

export default BagItem
