import { commanapi } from "./axios";

const baseURL="https://blogserver-wagi.onrender.com"

//user registration
export const register =async(data)=>{
    return await commanapi("POST",`${baseURL}/reg`,data,"")
}

//user login
export const login = async(data)=>{
    return await commanapi("POST",`${baseURL}/log`,data,"")
}

//post a blog
export const addpost=async(data,headers)=>{
    return await commanapi("POST",`${baseURL}/add`,data,headers)
}

//view all blogs
export const allblog=async(headers)=>{
    return await commanapi("GET",`${baseURL}/allblog`,"",headers)
}

//user blogs only
export const userblog=async(id,headers)=>{
    return await commanapi("GET",`${baseURL}/userblog/${id}`,'',headers)
}

//edit the blog
export const blogedit=async(data)=>{
    return await commanapi("PUT",`${baseURL}/edit`,data,'')
}

//delete blog
export const deleteblog=async(id)=>{
    return await commanapi("DELETE",`${baseURL}/delt/${id}`,{},"")
}

//post cpmment
export const addcomment=async(data)=>{
    return await commanapi("POST",`${baseURL}/adcomment`,data,"")
}

//veiw comments
export const getcomment=async(id)=>{
    return await commanapi("GET",`${baseURL}/getcomment/${id}`,{},"")
}

//delt cpmment
export const deltcomment=async(id)=>{
    return await commanapi("DELETE",`${baseURL}/deltcomm/${id}`,{},"")

}