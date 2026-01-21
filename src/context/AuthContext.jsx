import React, { Children } from 'react'
import { createContext, useState } from 'react'


export let Auth = createContext();
const AuthContext= ({children})=>{
     let [users, setUsers] =useState(()=>{
          return localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):null
     });

     let login = (loginData)=>{
          setUsers(loginData);
          localStorage.setItem("users", JSON.stringify(loginData));
     }

     let logout =()=>{
          setUsers(null);
          localStorage.removeItem("users");
     }


     return (
          <Auth.Provider value={{users, login, logout}}>{children}</Auth.Provider>
     )
}

export default AuthContext