import jwt from 'jsonwebtoken'

export const decodedToken = ()=>{

    try{
        const authToken = localStorage.getItem('authToken')
       
        const decoded = jwt.verify(authToken, 'demo1234')

        if(decoded){
            const createAt = decoded.iat;
            const expTime = decoded.exp;
            if( createAt > expTime){
                return null;
            }
            return decoded;
        }else{
            return null;
        }
    }catch(error){
        if(error){
            return null
        }
    }

} 

