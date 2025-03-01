import myAxios  from "@/config";

//登录接口
export const userLogin = (params)=>{
    return myAxios.post('/user/login',params)
}

//注册接口
export const userRegister = (params)=>{
    return myAxios.post('/user/register',params)
}

//查询日志接口
export const operateLog = ()=>{
    return myAxios.get('/operate_log/list')
}

//稿件上传
export const uploadManuscript = (params,config)=>{
    return myAxios.post('/manuscript/upload',params,config)
}

//获取当前用户信息
export const getCurrentUser = ()=>{
    return myAxios.get('/user/getCurrentUser')
}

//用户退出
export const userLogout = ()=>{
    return myAxios.get('/user/logout')
}

//获取稿件信息
export const getManuscripts = ()=>{
    return myAxios.get('/manuscript/list')
}