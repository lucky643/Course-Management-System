import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { Auth } from '../context/AuthContext';

const CourseList = () => {
     const [courses, setCourses] = useState(null);
     

     let getCourses = async () => {
          let res = await axios.get("http://localhost:3000/Course");
          setCourses(res.data);
          }
     useEffect(()=>{
          getCourses();
     }, [])

     let handleDelete = async (id) =>{
          let filteredCourses = courses.filter( (course) => course.id != id);
          setCourses(filteredCourses);
          let res = await axios.delete(`http://localhost:3000/Course/${id}`);
          console.log(res);
     }

     return (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               <h1 className="text-2xl font-bold text-white col-span-full">All Courses</h1>
               {courses?.map(course => (
                    <CourseCard key={course.id} {...course} onDelete={handleDelete} />
               ))}
          </div>

     )
}

export default CourseList