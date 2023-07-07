import axios from 'axios';

const URL = 'https://weatherwise-api.hop.sh/api/v1';

export const userUpdate = async (user, id)=>{
    try{
        const config = {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
            } 
        }
        const{ data } = await axios.put(`${URL}/user-update/`+id , user, config)


        
        return data
        
    }catch(error){
        return(error)
    }
}

export const findUser = async(id)=>{
    try{
        const{data} = await axios.get(`${URL}/`+id)
        return data
    }catch(error){
        return(error)
    }
}