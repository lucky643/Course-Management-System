import axios from "axios";
import React, {useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const Login = () => {
     let {login} = useContext(Auth);
     let navigate = useNavigate();
     const [formData, setFormData] = useState({
          email: "",
          password: "",
          role: "",
     });

let{email, password, role} = {...formData};

     const submitHandler =async (e) => {
          e.preventDefault();
          if(email.trim() && password.trim() && role.trim()){
               let res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}&role=${role}`);
               if(res.data.length > 0){
                    toast.success("Login Successful!");
                    login(res.data[0]);
                    navigate("/");
               } else {
                    toast.error("Invalid Credentials!");
               }
          }
          setFormData({
               email: "",
               password: "",
               role: "",
          })
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
               <form
                    onSubmit={submitHandler}
                    className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
               >
                    <h2 className="text-3xl font-bold text-white text-center mb-6">
                         Login
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                         <label className="block text-gray-400 mb-2">Email</label>
                         <input
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) =>
                                   setFormData({ ...formData, email: e.target.value })
                              }
                              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                              required
                         />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                         <label className="block text-gray-400 mb-2">Password</label>
                         <input
                              type="password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) =>
                                   setFormData({ ...formData, password: e.target.value })
                              }
                              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                              required
                         />
                    </div>

                    {/* Role */}
                    <div className="mb-6">
                         <label className="block text-gray-400 mb-2">Role</label>
                         <div className="flex gap-6 text-white">
                              <label className="flex items-center gap-2 cursor-pointer">
                                   <input
                                        type="radio"
                                        name="role"
                                        value="user"
                                        onChange={(e) =>
                                             setFormData({ ...formData, role: e.target.value })
                                        }
                                        className="accent-blue-500"
                                   />
                                   User
                              </label>

                              <label className="flex items-center gap-2 cursor-pointer">
                                   <input
                                        type="radio"
                                        name="role"
                                        value="admin"
                                        onChange={(e) =>
                                             setFormData({ ...formData, role: e.target.value })
                                        }
                                        className="accent-blue-500"
                                   />
                                   Admin
                              </label>
                         </div>
                    </div>

                    {/* Button */}
                    <button
                         type="submit"
                         className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                    >
                         Login
                    </button>
               </form>
          </div>
     );
};

export default Login;
