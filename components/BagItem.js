import { async } from "@firebase/util"
import { XIcon } from "@heroicons/react/solid"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { basketAtomState } from "../Atoms/basketAtom"

const BagItem = ({ item, idx }) => {

    console.log(item);
    const [total, setTotale] = useState(0)
    const [items, setItem] = useRecoilState(basketAtomState)

    useEffect(() => {
        let num = Number(item.quantity) * Number(item.product_id.price)
        setTotale(num);
    }, [items])

    async function addOneItem() {
        const idx = items.findIndex(bagItem => bagItem._id == item._id)
        let newItems = [...items]
        let obj = { ...newItems[idx] }
        obj.quantity++;
        obj.total = Number(obj.quantity) * Number(item.product_id.price)
        newItems[idx] = obj;
        setItem(newItems)
        await axios.put(`https://aaumartbackend.pratikvansh.repl.co/api/cart/${item._id}`, {
            quantity: obj.quantity,
        })
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

    return (
        <div className="grid grid-cols-6 p-3 items-center m-2">
            <div className="col-span-2 space-x-10 flex items-center">
                <img src={item.product_id?.img_url} height={80} width={80} />
                <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-orange-400">{item.product_id?.category}</p>
                </div>
            </div>  
            <div>
                <p className="bg-gray-100 inline p-2"> <span className="text-orange-500">₹ </span>{item.product_id.price}</p>
            </div>
            <div className="flex space-x-5">
                <span onClick={removeOne} className="bg-gray-100 px-3 cursor-pointer">-</span>
                <p>{item.quantity}</p>
                <span onClick={addOneItem} className="bg-gray-100 px-2 cursor-pointer">+</span>
            </div>
            <p> <span className="text-green-500">₹</span> {total}</p>
            <XIcon className="w-5 cursor-pointer text-gray-500" onClick={removeItem} />
        </div>
    )
}

export default BagItem
