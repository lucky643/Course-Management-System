import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Auth } from '../context/AuthContext';

const Protected = ({children}) => {
     let {users} = useContext(Auth);
     if(users){
          return children;
     }
     else{
          return <Navigate to="/login" replace/>
     }
}

export default Protected