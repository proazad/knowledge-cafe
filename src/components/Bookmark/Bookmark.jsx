import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <p className="p-4 text-lg font-semibold bg-white rounded mt-4">{title}</p>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
  };
export default Bookmark;