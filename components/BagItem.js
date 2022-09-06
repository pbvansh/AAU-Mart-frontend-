import { XIcon } from "@heroicons/react/solid"
import { useRecoilState, useRecoilValue } from "recoil"
import { basketAtomState, basketItemTotalAmountAtom } from "../Atoms/basketAtom"


const BagItem = ({ item,idx }) => {

    const [items, setItem] = useRecoilState(basketAtomState)
    const [basketTotal ,setBasketTotal] = useRecoilState(basketItemTotalAmountAtom)

    function addOneItem() {
        const idx = items.findIndex(bagItem => bagItem._id == item._id)
        let newItems = [...items]
        let obj = { ...newItems[idx] }
        obj.quantity++;
        obj.total = Number(obj.quantity)*Number(item.price)
        newItems[idx] = obj;
        setItem(newItems)
    }
// error is here
    function removeItem() {
        const index = items.findIndex((item,i)=>i === idx)
        let newItem =[...items];
        if(index >=0){
            newItem.splice(index,1)
        }else{
            console.warn(`Cant remove product  as its not in`)
        }
        setItem(newItem)
    }

    function removeOne(){
        const idx = items.findIndex(bagItem => bagItem._id == item._id)
        let newItems = [...items]
        let obj = { ...newItems[idx] }
        obj.quantity--;
        if(obj.quantity==0){
            removeItem()
        }else{
            newItems[idx] = obj;
            setItem(newItems)
        }
    }

    function findTotal(){
        const total = Number(item.price) * Number(item.quantity);
        // setBasketTotal(basketTotal+total)
        // console.log(basketTotal);
        return total;
    }

    return (
        <div key={item._id} className="grid grid-cols-6 p-3 items-center m-2">
            <div className="col-span-2 space-x-10 flex items-center">
                <img src={item.img} height={80} width={80} />
                <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-orange-400">{item.category}</p>
                </div>
            </div>
            <div>
                <p className="bg-gray-100 inline p-2"> <span className="text-orange-500">₹ </span>{item.price}</p>
            </div>
            <div className="flex space-x-5">
                <span onClick={removeOne} className="bg-gray-100 px-3 cursor-pointer">-</span>
                <p>{item.quantity}</p>
                <span onClick={addOneItem} className="bg-gray-100 px-2 cursor-pointer">+</span>
            </div>
            <p> <span className="text-green-500">₹</span> {findTotal()}</p>
            <XIcon className="w-5 cursor-pointer text-gray-500" onClick={removeItem}/>
        </div>
    )
}

export default BagItem
