import React from "react";

const CourseCard = ({ id, title, image, price, duration, author, desc }) => {
     return (
          <div className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

               {/* Image */}
               <div className="h-48 overflow-hidden">
                    <img
                         src={image}
                         alt={title}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
               </div>

               {/* Content */}
               <div className="p-5 space-y-3">
                    <h2 className="text-lg font-semibold text-white line-clamp-2">
                         {title}
                    </h2>

                    <p className="text-sm text-gray-400 line-clamp-2">
                         {desc}
                    </p>

                    {/* Meta Info */}
                    <div className="flex justify-between text-sm text-gray-400">
                         <span>⏱ {duration}</span>
                         <span>✍ {author}</span>
                    </div>

                    {/* Price + Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                         <span className="text-lg font-bold text-indigo-400">
                              ₹{price}
                         </span>

                         <button className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition">
                              View Course
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default CourseCard;
