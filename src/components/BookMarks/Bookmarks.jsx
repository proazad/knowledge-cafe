import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <aside className="w-[411px] mt-16 flex flex-col gap-5">
      <div className="bg-gray-300 p-4 border-2 rounded border-purple-600">
        <h3 className="font-bold text-purple-700 text-2xl">
          Spent time on read : {readTime} min
        </h3>
      </div>
      <div className="bg-gray-300 p-4">
        <h3 className="font-bold text-2xl">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark,idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </aside>
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number.isRequired,
  };
export default Bookmarks;
