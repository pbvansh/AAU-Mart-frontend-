import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react"

const Filter = ({setURL}) => {
    const [catName,setCatName] = useState(null)
    const [Min,setMin] = useState(null)
    const [Max,setMax] = useState(null)
    const [Product,setProduct] = useState(null)
    const [cat, setCat] = useState([])
    useEffect(() => {
        axios.get('https://aaumartbackend.pratikvansh.repl.co/api/category')
            .then((res) => {
                setCat(res.data)
            })
    }, [])

    const clear = (e)=>{
        e.preventDefault();
        setCatName('All');
        setMax(5000)
        setMin(0)
        setProduct('All')
        setURL(`https://aaumartbackend.pratikvansh.repl.co/api/product`)
    }

    const ApplyFilter =(e)=>{
        e.preventDefault();
        let options = '';
        if(catName){
             options += `cat=${catName}&`;
        }
        if(Min){
             options += `Min=${Min}&`;
        }
        if(Max){
             options += `Max=${Max}&`;
        }
        if(Product){
             options += `Product=${Product}&`;
        }
        console.log(options);
        setURL(`https://aaumartbackend.pratikvansh.repl.co/api/product?${options}`)
    }
    return (
        <section className=" shadow-xl rounded-lg max-w-xs w-full h-[500px] m-3 p-1 opacity-90 text-black">
            <div className="flex justify-end">
                <button onClick={clear} className="p-3 text-blue-500">CLEAR ALL</button>
            </div>
            <div className="p-5 space-y-3">
                <p className="font-bold text-sm">CATEGORIES</p>
                <select value={catName} onChange={(e)=>setCatName(e.target.value)} className="focus:outline-none border p-[9px] text-sm w-full rounded-sm" name="state">
                    <option value="All">--All--</option>
                    {
                        cat.map(({ name }) => <option className="" value={name}>{name}</option>)
                    }
                </select>
            </div>
            <div className="p-5 space-y-3">
                <p className="font-bold text-sm">PRICE</p>
                <input className="w-full" type={'range'} />
                <div className="flex justify-evenly items-center">
                    <select value={Min} onChange={(e)=>setMin(e.target.value)} className="focus:outline-none border p-1 rounded-sm">
                        <option value={0}>--Min--</option>
                        <option value={10}>₹10</option>
                        <option value={50}>₹50</option>
                        <option value={100}>₹100</option>
                        <option value={200}>₹200</option>
                    </select>
                    <p className=" text-gray-400">to</p>
                    <select value={Max} onChange={(e)=>setMax(e.target.value)} className="focus:outline-none border p-1 rounded-sm">
                        <option value={500}>₹500</option>
                        <option value={1000}>₹1000</option>
                        <option value={2000}>₹2000</option>
                        <option selected value={5000}>₹5000</option>
                    </select>
                </div>
            </div>
            <div className="p-5 space-y-3">
                <p className="font-bold text-sm">Product</p>
                <div className="flex items-center">
                    <SearchIcon className="h-4 text-gray-400" />
                    <input value={Product} onChange={(e)=>setProduct(e.target.value)} type={'text'} placeholder='Search Product' className="outline-none border-b-2 focus:border-b-blue-400 duration-500 ease-in-out text-sm p-1" />
                </div>
            </div>
            <div className="flex justify-end p-5">
                <button onClick={ApplyFilter} className="p-2 text-white bg-blue-500 px-8 rounded-sm hover:bg-blue-600">Apply</button>
            </div>
        </section>
    )
}

export default Filter
