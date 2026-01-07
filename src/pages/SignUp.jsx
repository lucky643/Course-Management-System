import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
     let navigate = useNavigate();
     const [formData, setFormData] = React.useState({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "user",
          id: uuidv4(),
     });

     const { userName, email, password, confirmPassword } = formData;
     
     const submitHandler = async (e) => {
          e.preventDefault();
          let res;

          if (
               userName.trim() &&
               email.trim() &&
               password.trim() &&
               confirmPassword.trim()
          ) {
               if (password === confirmPassword) {
                    let userAllreadyExist = await axios.get(`http://localhost:3000/users?email=${email}`);
                    console.log(userAllreadyExist);
                    if (userAllreadyExist.data.length > 0) {
                         toast.error("User with this email already exists!");
                    }
                    else {
                         res = await axios.post("http://localhost:3000/users", formData);
                         console.log(res);
                         if (res.status == 201) {
                              toast.success("Account created successfully!");
                              navigate("/login");
                         } else {
                              toast.error("Failed to create account. Please try again.");
                         }
                    }
               }
          }



          setFormData({
               userName: "",
               email: "",
               password: "",
               confirmPassword: "",
               role: "",
               id: uuidv4(),
          });
     };

     let changeHandler = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     }

     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
               <form
                    onSubmit={submitHandler}
                    className="w-full max-w-md bg-slate-900 text-white p-8 rounded-2xl shadow-2xl space-y-6"
               >
                    <h2 className="text-2xl font-bold text-center tracking-wide">
                         Create Account
                    </h2>

                    {/* Username */}
                    <div>
                         <label className="block mb-1 text-sm text-gray-300">Username</label>
                         <input
                              type="text"
                              name="userName"
                              value={userName}
                              onChange={changeHandler}
                              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 
                              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Enter username"
                              required
                         />
                    </div>

                    {/* Email */}
                    <div>
                         <label className="block mb-1 text-sm text-gray-300">Email</label>
                         <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={changeHandler}
                              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 
                              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Enter email"
                              required
                         />
                    </div>

                    {/* Password */}
                    <div>
                         <label className="block mb-1 text-sm text-gray-300">Password</label>
                         <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={changeHandler}
                              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 
                              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Enter password"
                              required
                         />
                    </div>

                    {/* Confirm Password */}
                    <div>
                         <label className="block mb-1 text-sm text-gray-300">
                              Confirm Password
                         </label>
                         <input
                              type="password"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={changeHandler}
                              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 
                              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Re-enter password"
                              required
                         />
                    </div>

                    {/* Submit */}
                    <button
                         type="submit"
                         className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 
                         transition-all duration-200 font-semibold tracking-wide"
                    >
                         Sign Up
                    </button>
               </form>
          </div>
     );
};
export default SignUp;
