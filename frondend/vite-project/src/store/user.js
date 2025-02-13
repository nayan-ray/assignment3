import {create} from 'zustand';
import axios  from "axios";
import Cookies from 'js-cookie';

const userStore = create((set) => ({
  
    isLogin : ()=>{
        return !!Cookies.get("access_token");
        
    },


    // your state here
    loginRequest : async(loginInfo)=>{
         try {
            const response = await axios.post('http://localhost:3002/api/v1/login', loginInfo, {
                withCredentials: true
              });
             return response.data.success;
            
            
            
         } catch (error) {
            console.log(error.message)
         }
    },
    logoutRequest : async()=>{
        try {
         const response = await axios.get('http://localhost:3002/api/v1/logout', {
            withCredentials: true
          });
          return response.data.success;
        } catch (error) {
         console.log(error.message)
        }
    }
}));

export default userStore;