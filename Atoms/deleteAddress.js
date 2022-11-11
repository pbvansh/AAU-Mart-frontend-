import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setHeader from "./setHeader";
toast.configure()
export const deleteAddress = (id) => {
    try {
        axios.delete('https://AAUMartBackend.pratikvansh.repl.co/api/profile/address/' + id, setHeader()).then((res) => {
            toast.success(res.data.msg, { autoClose: 1500 });
        })
        return true;
    } catch (error) {
        console.log(error);
    }

}