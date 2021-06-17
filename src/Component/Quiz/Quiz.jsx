import axios from 'axios'
import React from 'react'
// import { getToken } from '../../Util/Common'
// import axiosInstance from '../Axios'

const Quiz = () => {

//     axiosInstance.get(`test/1`)
//     .then((res) => {axiosInstance.defaults.headers['Authorization'] =
//           'JWT ' + localStorage.getItem('access_token');

//          console.log(res); 
    
        

// })

axios.get(`http://52.172.164.179:8090/test/1`).then((res)=>{
    console.log(res)
})


    // axiosInstance.get(`subjects`)
    //   .then((res) => {
        
    //     localStorage.getItem('access_token', res.data.access);
    //     // localStorage.getItem('refresh_token', res.data.refresh);
    //     axiosInstance.defaults.headers['Authorization'] =
    //       'JWT ' + localStorage.getItem('access_token');
       
        
    //     console.log(res);
    //     console.log(res.data);
        
        
    //   });
    

    return (
        <>
          Quiz Loading...  
        </>
    )
}

export default Quiz
