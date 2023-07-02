import { useState } from "react";
import { useNavigate} from 'react-router-dom';
const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const history = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log('Added new blogs');
            setIsPending(false);
            history('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog Body : </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author : </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {/* <button>Add Blog</button> */}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
     );
}
 
export default CreateBlog;