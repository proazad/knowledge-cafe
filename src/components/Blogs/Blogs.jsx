import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
const Blogs = ({handleBookmark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[]);
    return (
        <div className="flex-1">
            {blogs.map(blog=> <Blog key={blog.id} handleBookmark={handleBookmark} handleReadTime={handleReadTime} blog={blog}></Blog>)}
        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired,
  };
export default Blogs;