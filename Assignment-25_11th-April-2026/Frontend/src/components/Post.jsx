import { useEffect, useState } from "react";
import API from "../api";

function Post() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const res = await API.get("/posts");
        setPosts(res.data);
    };

    return (
        <div>
            <h2>Posts</h2>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Post;