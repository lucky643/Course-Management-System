import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';

const CourseList = () => {
     const [courses, setCourses] = useState(null);

     let getCourses = async () => {
          let res = await axios.get("http://localhost:3000/Course");
          setCourses(res.data);
          }
     useEffect(()=>{
          getCourses();
     }, [])

     return (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {courses?.map(course => (
                    <CourseCard key={course.id} {...course} />
               ))}
          </div>

     )
}

export default CourseList