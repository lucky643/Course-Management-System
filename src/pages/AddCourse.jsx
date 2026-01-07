import React, { useState } from 'react'

const AddCourse = () => {
     let [course, setCourse] = useState({
          title:"",
          image:"",
          price:"",
          duration:"",
          author:"",
          desc:""
     })

     let {title, image, price, duration, author, desc} ={...course};

     const handleSubmit = (e)=>{
          e.preventDefault();
          console.log(course)
     }

     const handleChange = (e)=>{
          let name = e.target.name;
          setCourse({...course, [name] : e.target.value})
          console.log(course)
     }
     return (
          <div>
               <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" value={title} onChange={handleChange}/>

                    <label htmlFor="image">image</label>
                    <input type="text" name="image" value={image} onChange={handleChange}/>

                    <label htmlFor="price">price</label>
                    <input type="text" name="price" value={price} onChange={handleChange}/>

                    <label htmlFor="duration">duration</label>
                    <input type="text" name ="duration" value={duration} onChange={handleChange}/>

                    <label htmlFor="author">author</label>
                    <input type="text" name="author"  value={author} onChange={handleChange}/>

                    <label htmlFor="desc">description</label>
                    <textarea name="desc" id="" onChange={handleChange}></textarea>

                    <button>submit</button>
               </form>
          </div>
     )
}

export default AddCourse