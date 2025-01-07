import myAxios  from "@/config";

//登录接口
export const userLogin = (params)=>{
    return myAxios.post('/user/login',params)
}

//注册接口
export const userRegister = (params)=>{
    return myAxios.post('/user/register',params)
}