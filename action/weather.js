import axios from 'axios';

const URL = 'https://weatherwise-api.hop.sh/api/v1';


export const forecastWeather = async()=>{
    try{
        const{data} = await axios.get(`${URL}/forecast-weather`)
        return data
    }catch(error){
        return(error)
    }
}

export const currentWeather = async()=>{
    try{
        const {data} = await axios.get(`${URL}/current-weather`)
        return data
        
    }catch(error){
        return error
    }
}