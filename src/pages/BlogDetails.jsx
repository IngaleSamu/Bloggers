import {useParams} from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const url = 'http://localhost:8000/blogs/'+id;
    const {data: blogs, error, isPending} = useFetch(url);
    const history = useNavigate();

    const handleDelete = (id) => {
        // const newBlogs = blogs.filter(blogs => blogs.id !== id);
        // setBlogs(newBlogs);
        fetch(url, {
            method : 'DELETE'
        }).then(()=>{
            console.log('Deleted the blogs');
            //setIsPending(false);
            history('/');
        })
      }
    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ..............  </div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <h4>Written By - {blogs.author}</h4>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}  
        </div>
     );
}
 
export default BlogDetails;