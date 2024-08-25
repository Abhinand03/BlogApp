import axios from "axios"

export const commanapi=async(method,url,data,reqheader)=>{
    try{
        const reqconfig={
            method:method,
            url:url,
            data:data,
            headers:reqheader?reqheader:{"Content-Type":"application/json"}
    
        }
    
        return await axios(reqconfig).then((res)=>{return res}).catch((err)=>{return err})

    }
    catch(err){
        console.log(err);
        
    }

}