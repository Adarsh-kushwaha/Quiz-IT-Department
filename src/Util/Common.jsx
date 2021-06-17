export const getToken = ()=>{
return localStorage.getItem("access_token") || null;
}

export const getUsername = () =>{
    const user = localStorage.getItem("username")
    if(user) return JSON.parse(user)
    else return null
}


