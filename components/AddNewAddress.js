import axios from "axios"
import { useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from "recoil";
import { isAddressAddesState } from "../Atoms/adminProductAtom";
toast.configure()
import setHeader from '../Atoms/setHeader'

const AddNewAddress = ({ setShowNewAddress }) => {
  const [isAdded, setIsAdded] = useRecoilState(isAddressAddesState)
  const name = useRef(null)
  const mobile = useRef(null)
  const pincode = useRef(null)
  const locality = useRef(null)
  const address = useRef(null)
  const city = useRef(null)
  const state = useRef(null)
  const [type, setType] = useState(null)

  const CheckMobile = (mobileNumber) => {
    var p = /^\d{10}$/;
    const n = `${mobileNumber}`
    if (n.length != 10) {
      toast.warning('Please provide valid Mobile Number', { autoClose: 1500 })
      return false;
    } else {
      if (mobileNumber.match(p)) {
        return true;
      } else {
        toast.warning('Please provide valid Mobile Number', { autoClose: 1500 })
        return false;
      }
    }
  }

  const CheckPin = (pin) => {
    const p = /^\d{6}$/;
    if (`${pin}`.length == 6) {
      if (pin.match(p)) {
        return true;
      } else {
        toast.warning('Please provide valid pincode', { autoClose: 1500 })
        return false;
      }
    }
    else {
      console.log(Number.isInteger(pin));
      console.log(p.length);
      toast.warning('Please provide valid pincode', { autoClose: 1500 });
      return false;
    }
  }

  const saveAddress = (e) => {
    e.preventDefault();
    if (name.current.value.length > 0 && mobile && pincode && locality.current.value.length > 0 && address.current.value.length > 0 && city && state.current.value.length > 0 && type.length > 0 && CheckMobile(mobile.current.value) && CheckPin(pincode.current.value)) {
      axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/profile/address/create', {
        name: name.current.value,
        mobile: Number(mobile.current.value),
        pincode: Number(pincode.current.value),
        locality: locality.current.value,
        address: address.current.value,
        city: city.current.value,
        state: state.current.value,
        type,
      }, setHeader()).then((res) => {
        toast.success('your new address is added', { autoClose: 1500 });
        setShowNewAddress(false);
        setIsAdded(!isAdded)
      }).catch((e) => {
        toast.error('Your session is dead. Please login again', { autoClose: 2000 })
      })
    } else {
      toast.warning('Please fill all information', { autoClose: 1500 })
    }
  }
  return (
    <div className="border bg-blue-50 rounded-md p-5">
      <form className="max-w-2xl">
        <p className="text-blue-600 m-4 p-1">ADD A NEW ADDRESS</p>
        <div className="space-x-5 m-3 flex">
          <input type={'text'} ref={name} className='outline-none p-2 border rounded-sm focus:border-blue-500 w-full' placeholder="Name*" />
          <input type={'text'} ref={mobile} className='outline-none p-2 border rounded-sm focus:border-blue-500 w-full' placeholder="10-digit mobile number*" />
        </div>
        <div className="space-x-5 m-3 flex">
          <input type={'text'} ref={pincode} className='outline-none p-2 border rounded-sm focus:border-blue-500 w-full' placeholder="Pincode*" />
          <input type={'text'} ref={locality} className='outline-none p-2 border rounded-sm focus:border-blue-500 w-full' placeholder="Locality*" />
        </div>
        <textarea ref={address} className='outline-none p-2 border rounded-sm focus:border-blue-500 m-3 flex w-full' placeholder="Address (Area and Street)*" />
        <div className="space-x-5 m-3 flex">
          <input type={'text'} ref={city} className='outline-none p-2 border rounded-sm focus:border-blue-500 w-full' placeholder="City/District/Town*" />
          <select ref={state} className="focus:outline-none border p-[9px] text-sm w-full" name="state"><option value="" disabled="">--Select State--</option><option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chandigarh">Chandigarh</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu</option><option value="Delhi">Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttarakhand">Uttarakhand</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="West Bengal">West Bengal</option></select>
        </div>
        <div className="space-x-5 m-3">
          <span className='text-sm text-gray-600'>Address Type*</span>
          <div className='flex space-x-5 p-3'>
            <div className='space-x-2'>
              <input type={'radio'} name='Type' value={'Home'} onChange={(e) => setType(e.target.value)} />
              <label>Home</label>
            </div>
            <div className='space-x-2'>
              <input type={'radio'} name='Type' value={'Work'} onChange={(e) => setType(e.target.value)} />
              <label>Work</label>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 m-3">
          <button onClick={saveAddress} className='px-20 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>Save</button>
          <p onClick={() => setShowNewAddress(false)} className='px-5 py-2 rounded-sm text-blue-600 cursor-pointer'>Cancel</p>
        </div>
      </form>
    </div>

  )
}

export default AddNewAddress
