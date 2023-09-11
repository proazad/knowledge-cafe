import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleBookmark, handleReadTime }) => {
  const {
    id,
    author,
    author_img,
    cover,
    hashtags,
    posted_date,
    reading_time,
    title,
  } = blog;

  return (
    <article className="py-16 border-b-2">
      <img src={cover} alt={title} className="w-full" />
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-5">
          <img src={author_img} alt={author} className="w-12 rounded-full" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <h4 className="text-base font-semibold text-gray-500">
              {posted_date}
            </h4>
          </div>
        </div>

        <div className="flex gap-4">
          <p className=" text-base font-semibold text-gray-500">
            {reading_time} min read
          </p>
          <button onClick={()=>handleBookmark(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <div className="my-4">
        <h2 className="font-bold text-4xl">{title}</h2>
      </div>
      {
        hashtags.map((tag, idx)=> <span key={idx}> #{tag}</span>)
      }
      <br />
      <button className="text-blue-400" onClick={()=>handleReadTime(reading_time, id)}>
        Mark as read
      </button>
    </article>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};
export default Blog;
