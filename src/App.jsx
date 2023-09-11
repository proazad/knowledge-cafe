import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/BookMarks/Bookmarks";
import Header from "./components/Headers.jsx/Header";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
      setBookmarks(newBookMarks);
  };

  const [readTime, setReadTime] = useState(0);
  const handleReadTime = (time, id) => {
    setReadTime(readTime + time);
    const remainingBookmark = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remainingBookmark);
    
  }
  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex gap-4">
        <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
