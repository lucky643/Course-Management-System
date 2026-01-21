import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const AddCourse = () => {
     let navigate = useNavigate();
     const [course, setCourse] = useState({
          id : v4(),
          title: "",
          image: "",
          price: "",
          duration: "",
          author: "",
          desc: "",
     });

     const { title, image, price, duration, author, desc } = course;

     const handleChange = (e) => {
          setCourse({ ...course, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (title.trim() && image.trim() && price.trim() && duration.trim() && author.trim() && desc.trim()) {
               let res = axios.post("http://localhost:3000/Course", course);
               navigate("/");
               toast.success("Course Added Successfully!");
          };
     }

          return (
               <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
                    <form
                         onSubmit={handleSubmit}
                         className="w-full max-w-xl bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
                    >
                         <h2 className="text-2xl font-bold text-white text-center">
                              Add New Course
                         </h2>

                         {/* Title */}
                         <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1">
                                   Course Title
                              </label>
                              <input
                                   type="text"
                                   name="title"
                                   value={title}
                                   onChange={handleChange}
                                   className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   placeholder="React Mastery"
                              />
                         </div>

                         {/* Image */}
                         <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1">
                                   Image URL
                              </label>
                              <input
                                   type="text"
                                   name="image"
                                   value={image}
                                   onChange={handleChange}
                                   className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                                   placeholder="https://image-link.com"
                              />
                         </div>

                         {/* Price & Duration */}
                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block text-sm text-gray-300 mb-1">
                                        Price (₹)
                                   </label>
                                   <input
                                        type="text"
                                        name="price"
                                        value={price}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                                        placeholder="999"
                                   />
                              </div>

                              <div>
                                   <label className="block text-sm text-gray-300 mb-1">
                                        Duration
                                   </label>
                                   <input
                                        type="text"
                                        name="duration"
                                        value={duration}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                                        placeholder="6 Weeks"
                                   />
                              </div>
                         </div>

                         {/* Author */}
                         <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1">
                                   Author
                              </label>
                              <input
                                   type="text"
                                   name="author"
                                   value={author}
                                   onChange={handleChange}
                                   className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                                   placeholder="John Doe"
                              />
                         </div>

                         {/* Description */}
                         <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1">
                                   Description
                              </label>
                              <textarea
                                   name="desc"
                                   value={desc}
                                   onChange={handleChange}
                                   rows="4"
                                   className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 resize-none"
                                   placeholder="Write course description..."
                              />
                         </div>

                         {/* Button */}
                         <button
                              type="submit"
                              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-200"
                         >
                              Add Course
                         </button>
                    </form>
               </div>
          );
};

export default AddCourse;
