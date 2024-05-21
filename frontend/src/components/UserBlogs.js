// import React, { useEffect } from 'react'
// import axios from  "axios";
// import { useState } from 'react';
// const UserBlogs = () => {
//   const [blogs, setBlogs] = useState();
//   const id = localStorage.getItem("userId");
//   const sendRequest = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`);
//       return res.data; // Return directly the data property of the response
//     } catch (err) {
//       console.log(err);
//       return null; // or handle the error appropriately
//     }
//   };
  
//   useEffect(() => {
//     sendRequest().then((data) => setBlogs(data.blogs));
//   }, []);
//   console.log(blogs);
//   return (
//     <div>UserBlogs</div>
//   )
// }

// export default UserBlogs


import React, { useEffect, useState } from 'react'
import axios from  'axios';
import Blog from './Blog';
const UserBlogs = () => {
    const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div>
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
}

export default UserBlogs