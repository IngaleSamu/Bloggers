import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {     
      // const handleDelete = (id) => {
      //   const newBlogs = blogs.filter(blogs => blogs.id !== id);
      //   setBlogs(newBlogs);
      // }
      const url = 'http://localhost:8000/blogs';
      const {data: blogs, error, isPending} = useFetch(url);
    return ( 
        <div className="home">
            {error && <div>{error}</div>}

            {isPending && <div>Loading ..............  </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs !" />}  
        </div>
     );
}
 
export default Home;
