
import axios from 'axios';

const URL = 'https://weatherwise-api.hop.sh/api/v1';

export const userRegister = async (user) => {

    try{
        const config = {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
            } 

        }
        
        const{ data } = await axios.post(`${URL}/register`, user, config)
        
        localStorage.setItem('authToken', data.token);

        return data

    }catch(error){
        
        return error
        
    }
    
}
//     fetch(`${URL}/user-registar`, {method:"POST", body: JSON.stringify(user), mode:"cors", credentials: "include"}).then((data)=>data.json()).then((data)=>{})

export const userLogin = async (user)=>{
    try{
        const config = {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
            } 
        }
        
        const{ data } = await axios.post(`${URL}/login`, user, config)

        localStorage.setItem('authToken', data.token);
        
        return data

    }catch(error){
        
        return error
    }
}
