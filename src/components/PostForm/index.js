import React, {useState} from 'react';
import "./style.css";


 function PostForm() {
    const Post = ({ title, author, text, }) => (
        <div>
          <p className="postTitle">{title}</p>
    <p className="postedBy">Posted by {author} on {now.getDate()}/{now.getMonth()}/{now.getFullYear()} </p>
          <p className="postText">{text}</p>
          <hr></hr>
        </div>
      );
    const [posts, setPosts] = useState([]);

    const now = new Date()
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");


    const addPost = (post) => {
      setPosts([post, ...posts]);
    };

    const onAddButtonClick = () => {
      const post = {title, author, text };
      addPost(post);
    };

    return (
      <div>
        {posts.length === 0 && <p>No posts.</p>}
        {posts.map((post) => (
          <Post title={post.title} author={post.author} text={post.text} />
        ))}
        <div>
          <p class="add">Add a new post</p>
          <p>
          <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </p>
            <p>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

          </p>
          <p>
            <button onClick={onAddButtonClick}>Add</button>
          </p>
        </div>
      </div>
    );
 }

 export default PostForm
