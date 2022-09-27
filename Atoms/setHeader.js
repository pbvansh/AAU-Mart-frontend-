import JWT from 'jsonwebtoken'

const setHeader =() =>{

    const token = localStorage.getItem('token');
    const headers = {
        headers : {
            "Accept": "application/json",
            "Authorization" : "Bearer "+token, 
        }
    }

    return headers;
}

export default setHeader;