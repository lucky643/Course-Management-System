import { NavLink } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
     const { users, logout } = useContext(Auth);

     const linkClasses = ({ isActive }) =>
          `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
     ${isActive
               ? "bg-blue-600 text-white"
               : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`;

     return (
          <nav className="bg-gray-900 shadow-md">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">

                         {/* Logo */}
                         <NavLink
                              to="/"
                              className="text-xl font-bold text-white tracking-wide"
                         >
                              CourseHub
                         </NavLink>

                         {/* Links */}
                         <div className="flex items-center space-x-2">
                              <NavLink to="/" className={linkClasses}>CourseList</NavLink>

                              {users?.role == "admin" && <NavLink to="/editcourse" className={linkClasses}>EditCourse</NavLink>}
                              {users?.role == "admin" && <NavLink to="/addcourse" className={linkClasses}>AddCourse</NavLink>
}


                              <NavLink to="/cart" className={linkClasses}>Cart</NavLink>

                              {!users && <NavLink to="/login" className={linkClasses}>Login</NavLink>}
                              {!users && <NavLink to="/signup" className={linkClasses}>SignUp</NavLink>}

                              {users && (
                                   <button
                                        onClick={logout}
                                        className="px-4 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
                                   >
                                        Logout
                                   </button>
                              )}

                              {users && (
                                   <div className="px-3 py-2 text-gray-300">
                                        👋 {users.userName}
                                   </div>
                              )}
                         </div>

                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
